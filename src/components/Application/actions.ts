'use server';

import { isWalletAddress } from '@/utils/isWalletAddress';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { randomUUID } from 'crypto';
import { revalidatePath, revalidateTag } from 'next/cache';
import { z } from 'zod';
import prisma from '../../../lib/prisma';

export type ApplicationFormType = {
  status: 'processing' | 'success' | 'error';
  applicationStatus?: string | null | undefined;
  message: string;
  errorCode?:
    | 'telegram_username_not_in_group'
    | 'invalid_wallet_address'
    | 'twitter_not_following';
  errorFields?: {
    twitter?: string;
    telegram?: string;
    wallet?: string;
    email?: string | null | undefined;
  };
};

const applicationFormSchema = z.object({
  twitter: z
    .string({
      invalid_type_error: 'Invalid Twitter Username',
    })
    .min(1, { message: 'Twitter Username is required' })
    .transform((username) => username.replace(/^@/, '')),
  telegram: z
    .string({
      invalid_type_error: 'Invalid Telegram Username',
    })
    .min(1, { message: 'Telegram Username is required' })
    .transform((username) => username.replace(/^@/, '')),
  wallet: z
    .string({
      invalid_type_error: 'Invalid Solana Wallet Address',
      required_error: 'Solana Wallet Address is required',
    })
    .min(1, { message: 'Solana Wallet Address is required' }),
  email: z.string().email({ message: 'Email is invalid' }).or(z.literal('')),
});

export async function createUser(
  prevState: any,
  formData: FormData,
): Promise<ApplicationFormType> {
  const validatedFields = applicationFormSchema.safeParse({
    wallet: formData.get('wallet'),
    telegram: formData.get('telegram'),
    twitter: formData.get('twitter'),
    email: formData.get('email'),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      status: 'error',
      message: validatedFields.error.errors[0].message,
    };
  }
  let validTelegram = false;
  let validTwitter = false;

  try {
    const isWallet = await isWalletAddress(validatedFields.data.wallet);

    if (!isWallet) {
      return {
        status: 'error',
        errorCode: 'invalid_wallet_address',
        message:
          'The wallet address you have entered is invalid. Please make sure you enter a Solana wallet address.',
      };
    }
  } catch (error) {
    return {
      status: 'error',
      errorCode: 'invalid_wallet_address',
      message:
        'The wallet address you have entered is invalid. Please make sure you enter a Solana wallet address.',
    };
  }

  try {
    const telegramResponse = await fetch(
      'https://soluno-server-production.up.railway.app/api/telegram/member',
      {
        method: 'POST',
        headers: {
          authorization:
            'afbb79488feb08751b2840100ee830bbad509002fde34f0900c244b3e0882b3e',
          'Content-Type': 'application/json', // Specify the content type of the request body
        },
        body: JSON.stringify({ username: validatedFields.data.telegram }),
      },
    );

    if (telegramResponse.status === 200) {
      validTelegram = true;
    } else if (telegramResponse.status === 404) {
      return {
        status: 'error',
        message: 'Your Telegram username is not a member of our group.',
      };
    }
  } catch (error) {
    console.log('error', error);
    validTelegram = false;
  }

  try {
    // Create an instance of AbortController specific to this fetch request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort(); // Abort the fetch after 10 seconds
      console.log(
        'Fetch request to check Twitter following status has timed out.',
      );
    }, 10000); // Set timeout for 10 seconds

    const isFollowing = await fetch(
      'https://soluno-server-production.up.railway.app/api/twitter/isFollowing',
      {
        method: 'POST',
        body: JSON.stringify({ twitterUsername: validatedFields.data.twitter }),
        headers: {
          authorization:
            'afbb79488feb08751b2840100ee830bbad509002fde34f0900c244b3e0882b3e',
          'Content-Type': 'application/json',
        },
        signal: controller.signal, // Attach the abort signal to this fetch request
      },
    );

    clearTimeout(timeoutId);

    if (isFollowing.status === 200) {
      validTwitter = true;
    } else if (isFollowing.status === 404) {
      validTwitter = false;
      return {
        status: 'error',
        errorCode: 'twitter_not_following',
        message: 'You are not following our Twitter account.',
      };
    }
  } catch (error) {
    console.log('error', error);
    validTwitter = false;
  }

  try {
    const newApplication = await prisma.airdropApplication.create({
      data: {
        id: randomUUID(),
        twitterUsername: validatedFields.data.twitter,
        telegramUsername: validatedFields.data.telegram,
        walletAddress: validatedFields.data.wallet,
        email:
          validatedFields.data.email === '' ? null : validatedFields.data.email,
        status: validTelegram && validTwitter ? 'valid' : 'unverified',
      },
    });
    revalidatePath('/');
    revalidateTag('applications');

    return {
      status: 'success',
      message: 'Your application has been submitted successfully!',
      applicationStatus: newApplication.status,
    };
  } catch (error: PrismaClientKnownRequestError | any) {
    console.log('Error12344', error);
    if (error?.code === 'P2002') {
      if (error.meta.target[0] === 'twitterUsername') {
        const application = await prisma.airdropApplication.findFirst({
          where: {
            twitterUsername: validatedFields.data.twitter,
          },
        });

        return {
          status: 'error',
          message:
            'An application with the same Twitter username already exists.',
          errorFields: {
            twitter: application?.twitterUsername,
            telegram: application?.telegramUsername,
            wallet: application?.walletAddress,
            email: application?.email,
          },
        };
      } else if (error.meta.target[0] === 'telegramUsername') {
        const application = await prisma.airdropApplication.findFirst({
          where: {
            telegramUsername: validatedFields.data.telegram,
          },
        });

        return {
          status: 'error',
          message:
            'An application with the same Telegram username already exists.',
          errorFields: {
            twitter: application?.twitterUsername,
            telegram: application?.telegramUsername,
            wallet: application?.walletAddress,
            email: application?.email,
          },
        };
      } else if (error.meta.target[0] === 'walletAddress') {
        const application = await prisma.airdropApplication.findFirst({
          where: {
            walletAddress: validatedFields.data.wallet,
          },
        });

        return {
          status: 'error',
          message:
            'An application with the same Solana wallet address already exists.',
          errorFields: {
            twitter: application?.twitterUsername,
            telegram: application?.telegramUsername,
            wallet: application?.walletAddress,
            email: application?.email,
          },
        };
      } else {
        return {
          status: 'error',
          message:
            'An error occurred while submitting your application. Please try again later.',
        };
      }
    } else {
      return {
        status: 'error',
        message:
          'An error occurred while submitting your application. Please try again later.',
      };
    }
  }
}
