import Container from '@/components/Container/Container';
import Main from '@/components/Main/Main';
import StatusCheck from '@/components/StatusCheck/StatusCheck';
import styles from './page.module.scss';

const status = () => {
  return (
    <Main>
      <Container>
        <div className={styles.statusCheck}>
          <div className={styles.statusCheckHero}>
            <h1>Application Status Check</h1>
            <div>
              <p>
                To make sure all the applications stay valid, all you have to do
                is follow us on Twitter and join our Telegram group.
              </p>
              <p>
                We run validation checks every 12 hours to see if applications
                are still valid.
              </p>
            </div>
          </div>
          <StatusCheck />
        </div>
      </Container>
    </Main>
  );
};

export default status;
