'use client';

import { useFormState } from 'react-dom';
import styles from './StatusCheck.module.scss';
import SubmitButton from './SubmitButton/SubmitButton';
import { CheckStatusFormType, createUser } from './actions';

const StatusCheck = () => {
  const initialState: CheckStatusFormType = {
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
      <h2 className={styles.applicationTitle}>Status Check</h2>

      <div className={styles.applicationContent}>
        <div className={styles.applicationSubtitle}>
          <div>
            Please paste your wallet address below to check the status of your
            application
          </div>
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
              Please enter a valid Solana wallet address!
            </div>
          )}
        </div>
      </div>

      <div className={styles.applicationButton}>
        <SubmitButton text="Check Application Status" />
      </div>

      {state.status === 'success' && (
        <div className={styles.applicationStatus}>
          <h2>Application Results</h2>
          <div className={styles.applicationStatusContent}>
            <span>Status: </span>
            <span
              style={{
                width: '15px',
                height: '15px',
                borderRadius: '50%',
                display: 'inline-block',
                marginRight: '0.5rem',
                marginTop: '-0.5rem',
                backgroundColor:
                  state.applicationStatus === 'unverified'
                    ? 'yellow'
                    : state.status === 'success'
                    ? '#ADFFA2'
                    : '#F08FBE',
              }}
            ></span>
            {state.applicationStatus}
          </div>
          <div className={styles.applicationStatusContent}>
            <span>Reason: </span>
            {state.applicationStatus === 'unverified'
              ? "Your application hasn't been verified yet. To make sure your application is valid all you have to do is to follow us on Twitter/X and to be a member of our Telegram group."
              : state.applicationStatus === 'valid'
              ? 'Your application is valid. To keep it valid all you have to do is to keep following us on Twitter/X and to be a member of our Telegram group.'
              : 'Your application is invalid. Please follow the instructions below to make it valid again.'}
          </div>
        </div>
      )}
    </form>
  );
};

export default StatusCheck;
