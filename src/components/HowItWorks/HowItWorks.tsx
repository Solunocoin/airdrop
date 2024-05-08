import Image from 'next/image';
import one_svg from '../../../public/one.svg';
import three_svg from '../../../public/three.svg';
import two_svg from '../../../public/two.svg';
import Container from '../Container/Container';
import styles from './HowItWorks.module.scss';

const HowItWorks = () => {
  return (
    <div id="howItWorks">
      <Container>
        <h2 className={styles.howItWorksTitle}>How It Works</h2>
        <div className={styles.howItWorks}>
          <div className={styles.howItWorksCard}>
            <Image src={one_svg} alt="One" />
            <h3>Application</h3>
            <p>
              No wallet connect required. 3 easy steps. Follow us on twitter{' '}
              <a href="https://twitter.com/soluno_coin">(@soluno_coin)</a>. Join
              our Telegram group{' '}
              <a href="https://twitter.com/solunocoin">(@solunocoin)</a>. Fill
              out the form <a href="#application">above</a>.
            </p>
          </div>
          <div className={styles.howItWorksCard}>
            <Image src={two_svg} alt="two" />
            <h3>Compliance</h3>
            <p>
              Your application will stay valid as long as you follow our twitter
              account and are part of our telegram group. We will run a
              validation check everyday.
            </p>
          </div>
          <div className={styles.howItWorksCard}>
            <Image src={three_svg} alt="three" />
            <h3>Reward</h3>
            <p>
              When Soluno launches sometime in May, you will receive your
              airdrop in your wallet automatically.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowItWorks;
