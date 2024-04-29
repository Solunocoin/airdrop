import Image from 'next/image';
import clouds from '../../../public/clouds.png';
import parachute from '../../../public/parachute.png';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroBackground}>
        <Image
          src={clouds}
          alt="Clouds"
          style={{ maxWidth: '100%', objectFit: 'cover' }}
        />
      </div>
      {/* 
      <div className={styles.heroBlob}>
        <Image
          src={colorful_blob}
          alt="Colorful blob"
          style={{ maxWidth: '100%', objectFit: 'contain' }}
        />
      </div> */}

      <div className={styles.heroInner}>
        <div
          style={{
            maxWidth: '400px',
            position: 'relative',
            height: 'auto',
            zIndex: 2,
          }}
        >
          <Image
            src={parachute}
            alt="Parachute"
            style={{ maxWidth: '100%', objectFit: 'contain' }}
          />
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Soluno <span>Airdrop</span> Incoming!!!
          </h1>
          <div className={styles.heroSubtitle}>
            4000 wallets will share 2.5% of the total supply!
          </div>

          <div className={styles.heroSecondContent}>
            <h2>Join now with 3 easy steps</h2>
            <div className={styles.heroSecondSubtitle}>
              <span>*</span> <div>No wallet connect required.</div>
            </div>
          </div>

          <div className={styles.heroSteps}>
            <div className={styles.heroStep}>
              <span>1.</span> Follow us on X/Twitter.{' '}
              <a href="https://twitter.com/soluno_coin" target="_blank">
                (@soluno_coin)
              </a>
            </div>
            <div className={styles.heroStep}>
              <span>2.</span> Join us on Telegram.{' '}
              <a href="https://t.me/solunocoin" target="_blank">
                (@solunocoin)
              </a>
            </div>
            <div className={styles.heroStep}>
              <span>3.</span> Fill out the form{' '}
              <a href="https://twitter.com/soluno_coin" target="_blank">
                below
              </a>
            </div>
          </div>

          <div className={styles.heroButtons}>
            <ButtonPrimary href="#application" text="Apply Now" />
            <ButtonSecondary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
