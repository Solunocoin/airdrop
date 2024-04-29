import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import styles from './Application.module.scss';

const Application = () => {
  return (
    <form className={styles.applicationForm} id="application">
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
          <label htmlFor="twitter" className={styles.applicationInputLabel}>
            <div>Twitter Username</div>
            <div>
              <span className={styles.required}>*</span>
              <span>Required</span>
            </div>
          </label>
          <input
            placeholder="Your Twitter/X username here"
            className={styles.applicationInput}
            id="twitter"
          />
        </div>
        <div className={styles.applicationInputWrapper}>
          <label htmlFor="twitter" className={styles.applicationInputLabel}>
            <div>Telegram Username</div>
            <div>
              <span className={styles.required}>*</span>
              <span>Required</span>
            </div>
          </label>
          <input
            placeholder="Your Telegram username here"
            className={styles.applicationInput}
            id="twitter"
          />
        </div>
        <div className={styles.applicationInputWrapper}>
          <label htmlFor="twitter" className={styles.applicationInputLabel}>
            <div>Solana Wallet Address</div>
            <div>
              <span className={styles.required}>*</span>
              <span>Required</span>
            </div>
          </label>
          <input
            placeholder="Your Solana wallet address here"
            className={styles.applicationInput}
            id="twitter"
          />
        </div>
        <div className={styles.applicationInputWrapper}>
          <label htmlFor="twitter" className={styles.applicationInputLabel}>
            <div>Email</div>
            <div>
              <span>Optional</span>
            </div>
          </label>
          <input
            placeholder="Your email here"
            className={styles.applicationInput}
            id="twitter"
          />
          <div>
            We only need this to notify you if your application will be
            disqualified.
          </div>
        </div>
      </div>

      <div className={styles.applicationButton}>
        <ButtonPrimary href="#application" text="Submit Application" />
      </div>
    </form>
  );
};

export default Application;
