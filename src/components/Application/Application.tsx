'use client';

import { useFormState } from 'react-dom';
import styles from './Application.module.scss';
import ApplicationModal from './ApplicationModal/ApplicationModal';
import SubmitButton from './SubmitButton/SubmitButton';
import { ApplicationFormType, createUser } from './actions';

const Application = () => {
  const initialState: ApplicationFormType = {
    status: 'processing',
    message: '',
  };

  const [state, formAction] = useFormState(createUser, initialState);

  return (
    <form
      className={styles.applicationForm}
      id="application"
      action={formAction}
    >
      <h2 className={styles.applicationTitle}>Airdrop Application Form</h2>

      <div className={styles.applicationContent}>
        <div className={styles.applicationSubtitle}>
          <span className={styles.required}>*</span>{' '}
          <div>Before you start. Please make sure you:</div>
        </div>
      </div>

      <div>
        <div className={styles.applicationStep}>
          1. Follow us on X/Twitter.{' '}
          <a href="https://twitter.com/soluno_coin" target="_blank">
            (@soluno_coin)
          </a>
        </div>
        <div className={styles.applicationStep}>
          2. Join us on Telegram.{' '}
          <a href="https://t.me/solunocoin" target="_blank">
            (@solunocoin)
          </a>
        </div>
      </div>

      <div>
        <div className={styles.applicationInputWrapper}>
          <label htmlFor="wallet" className={styles.applicationInputLabel}>
            <div>Solana Wallet Address</div>
            <div>
              <span className={styles.required}>*</span>
              <span>Required</span>
            </div>
          </label>
          <input
            placeholder="Your Solana wallet address here"
            className={styles.applicationInput}
            id="wallet"
            name="wallet"
            style={{
              border:
                state.status === 'error' && state.message.includes('wallet')
                  ? '1px solid red'
                  : 'none',
            }}
            required
          />
          {state.status === 'error' && state.message.includes('wallet') && (
            <div className={styles.applicationInputError}>
              Please add another Solana wallet address
            </div>
          )}
        </div>

        <div className={styles.applicationInputWrapper}>
          <label htmlFor="telegram" className={styles.applicationInputLabel}>
            <div>Telegram Username</div>
            <div>
              <span className={styles.required}>*</span>
              <span>Required</span>
            </div>
          </label>
          <input
            placeholder="Ex. solunocoin"
            className={styles.applicationInput}
            id="telegram"
            name="telegram"
            style={{
              border:
                state.status === 'error' && state.message.includes('Telegram')
                  ? '1px solid red'
                  : 'none',
            }}
            required
          />

          {state.status === 'error' && state.message.includes('Telegram') && (
            <div className={styles.applicationInputError}>
              Please add another Telegram username
            </div>
          )}
        </div>

        <div className={styles.applicationInputWrapper}>
          <label htmlFor="twitter" className={styles.applicationInputLabel}>
            <div>Twitter Username</div>
            <div>
              <span className={styles.required}>*</span>
              <span>Required</span>
            </div>
          </label>
          <input
            placeholder="Ex. soluno_coin"
            className={styles.applicationInput}
            name="twitter"
            id="twitter"
            style={{
              border:
                state.status === 'error' && state.message.includes('Twitter')
                  ? '1px solid red'
                  : 'none',
            }}
            required
          />

          {state.status === 'error' && state.message.includes('Twitter') && (
            <div className={styles.applicationInputError}>
              Please add another X/Twitter username
            </div>
          )}
        </div>

        <div className={styles.applicationInputWrapper}>
          <label htmlFor="email" className={styles.applicationInputLabel}>
            <div>Email</div>
            <div>
              <span>Optional</span>
            </div>
          </label>
          <input
            placeholder="Your email here"
            type="email"
            className={styles.applicationInput}
            id="email"
            name="email"
            style={{
              border:
                state.status === 'error' && state.message.includes('Email')
                  ? '1px solid red'
                  : 'none',
            }}
          />
          {state.status === 'error' && state.message.includes('Email') && (
            <div className={styles.applicationInputError}>
              Please add another Solana wallet address
            </div>
          )}
          <div>
            We only need this to notify you if your application will be
            disqualified.
          </div>
        </div>
      </div>

      <div className={styles.applicationButton}>
        <SubmitButton text="Submit Application" />
      </div>

      <ApplicationModal state={state} />
    </form>
  );
};

export default Application;
