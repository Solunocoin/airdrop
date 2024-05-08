'use client';
import Lottie from 'lottie-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { useFormStatus } from 'react-dom';
import Modal from 'react-modal';
import close_white from '../../../../public/close_white.svg';
import telegram_logo_white from '../../../../public/telegram_logo_white.png';
import loading from '../../../lottie/loading.json';
import styles from './ApplicationModal.module.scss';
import { IApplicationModal } from './ApplicationModal.types';

const customStyles = {
  content: {
    position: 'relative',
    width: '100%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundImage: 'linear-gradient(45deg, #1fbfe3, #86a8e7 54%, #d16ba5)',
    padding: '2rem',
    borderRadius: '1rem',
    border: 'none',
    maxWidth: '500px',
    zIndex: 1000,
  },
  overlay: {
    zIndex: 1000,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    backdropFilter: 'blur(9px)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#modals');

const ApplicationModal = ({ state }: IApplicationModal) => {
  const { pending, action, data, method } = useFormStatus();
  console.log('pending', pending);
  console.log('action', action);
  console.log('data', data);
  console.log('method', method);
  console.log('state', state);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  useMemo(() => {
    if (pending) {
      setIsOpen(true);
    }
  }, [pending, action]);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        //@ts-ignore
        style={customStyles}
        onRequestClose={state.status !== 'processing' ? closeModal : undefined}
        // overlayClassName={styles.overlay}
        contentLabel="Application Modal"
      >
        <div
          style={{
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              width: '15px',
              height: '15px',
              borderRadius: '50%',
              display: 'inline-block',
              marginRight: '0.5rem',
              marginTop: '-0.5rem',
              backgroundColor:
                state.status === 'processing' || pending
                  ? 'white'
                  : state.status === 'success'
                  ? '#ADFFA2'
                  : '#F08FBE',
            }}
          ></span>
          <h2
            style={{
              fontWeight: 500,
            }}
          >
            {state.status === 'processing' || pending
              ? 'Processing...'
              : state.status === 'success'
              ? 'Successful Submission!'
              : 'Error Occurred!'}
          </h2>
        </div>
        {/* <button onClick={closeModal}>close</button> */}

        {state.status === 'processing' || pending ? (
          <Lottie animationData={loading} loop />
        ) : (
          <>
            <div className={styles.applicationModalMessage}>
              {state.message}
            </div>

            {state.status === 'error' && (
              <div>
                {state.errorFields && (
                  <div className={styles.applicationModalErrorFields}>
                    <h4>Existing Application Details</h4>

                    {state.errorFields.twitter && (
                      <div className={styles.applicationModalErrorField}>
                        <span>Twitter:</span>{' '}
                        <a
                          href={`https://twitter.com/${state.errorFields.twitter}`}
                          target="_blank"
                        >
                          https://twitter.com/{state.errorFields.twitter}
                        </a>
                      </div>
                    )}

                    {state.errorFields.telegram && (
                      <div className={styles.applicationModalErrorField}>
                        <span>Telegram:</span>{' '}
                        <a
                          href={`https://t.me/${state.errorFields.telegram}`}
                          target="_blank"
                        >
                          https://t.me/{state.errorFields.telegram}
                        </a>
                      </div>
                    )}

                    {state.errorFields.wallet && (
                      <div className={styles.applicationModalErrorField}>
                        <span>Wallet:</span>{' '}
                        <span>
                          {state.errorFields.wallet.slice(0, 6)}...
                          {state.errorFields.wallet.slice(-6)}
                        </span>
                      </div>
                    )}

                    {state.errorFields.email && (
                      <div className={styles.applicationModalErrorField}>
                        <span>Email:</span>{' '}
                        <span>{state.errorFields.email}</span>
                      </div>
                    )}
                  </div>
                )}

                <div className={styles.applicationModalSupportText}>
                  {state.errorFields ? (
                    'If any of these information belongs to you. Please reach out to support below.'
                  ) : state.errorCode === 'telegram_username_not_in_group' ? (
                    <div>
                      Please join our Telegram group and apply again.{' '}
                      <a
                        style={{
                          color: 'white',
                        }}
                        href="https://t.me/solunocoin"
                        target="_blank"
                      >
                        (@solunocoin)
                      </a>
                    </div>
                  ) : state.errorCode === 'twitter_not_following' ? (
                    <div>
                      Please follow us on Twitter/X and apply again.{' '}
                      <a
                        style={{
                          color: 'white',
                        }}
                        href="https://twitter.com/soluno_coin"
                        target="_blank"
                      >
                        (@soluno_coin)
                      </a>
                    </div>
                  ) : (
                    'If you think this is incorrect, please reach out to support below.'
                  )}
                </div>

                <div className={styles.applicationModalSupportInner}>
                  <h4>Support</h4>
                  <a href="https://t.me/soluno_support" target="_blank">
                    <Image
                      width={30}
                      src={telegram_logo_white}
                      alt="telegram logo"
                    />
                    <div>https://t.me/soluno_support</div>
                  </a>
                </div>
              </div>
            )}

            {state.status === 'success' && (
              <div>
                <div className={styles.applicationModalApplicationStatus}>
                  <span>Status:</span>{' '}
                  <span
                    className={styles.applicationModalApplicationStatusCircle}
                  ></span>{' '}
                  <span>Unverified</span>
                </div>
                <div>All application start with unverified status.</div>
                <div>Next validation check is in 2h 40min.</div>
                <div>
                  Check status at any time.{' '}
                  <Link
                    style={{
                      color: 'white',
                    }}
                    href="/status"
                  >
                    Status Check
                  </Link>
                </div>
              </div>
            )}

            <button
              className={styles.applicationModalCloseBtn}
              onClick={closeModal}
            >
              <Image width={20} src={close_white} alt="close modal" />
            </button>
          </>
        )}
      </Modal>
    </div>
  );
};

export default ApplicationModal;
