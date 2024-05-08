'use server';

import { isWalletAddress } from '@/utils/isWalletAddress';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { z } from 'zod';
import prisma from '../../../lib/prisma';

export type CheckStatusFormType = {
  status: 'processing' | 'success' | 'error';
  applicationStatus?: string | null | undefined;
  message: string;
};

const statusCheckFormSchema = z.object({
  wallet: z
    .string({
      invalid_type_error: 'Invalid Solana Wallet Address',
      required_error: 'Solana Wallet Address is required',
    })
    .min(1, { message: 'Solana Wallet Address is required' }),
});

export async function createUser(
  prevState: any,
  formData: FormData,
): Promise<CheckStatusFormType> {
  const validatedFields = statusCheckFormSchema.safeParse({
    wallet: formData.get('wallet'),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      status: 'error',
      message: validatedFields.error.errors[0].message,
    };
  }

  try {
    const isWallet = await isWalletAddress(validatedFields.data.wallet);

    if (!isWallet) {
      return {
        status: 'error',
        message:
          'The wallet address you have entered is invalid. Please make sure you enter a Solana wallet address.',
      };
    }
  } catch (error) {
    return {
      status: 'error',
      message:
        'The wallet address you have entered is invalid. Please make sure you enter a Solana wallet address.',
    };
  }

  try {
    const application = await prisma.airdropApplication.findFirst({
      where: {
        walletAddress: validatedFields.data.wallet,
      },
    });

    console.log('application', application);

    if (application) {
      return {
        status: 'success',
        message: 'Your application has already been submitted!',
        applicationStatus: application.status,
      };
    } else {
      return {
        status: 'error',
        message: 'No application found for this wallet address',
      };
    }
  } catch (error: PrismaClientKnownRequestError | any) {
    return {
      status: 'error',
      message:
        'An error occurred while getting your application. Please try again later.',
    };
  }
}
