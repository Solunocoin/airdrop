import Lottie from 'lottie-react';
import { useFormStatus } from 'react-dom';
import buttonLoading from '../../../lottie/buttonLoading.json';
import styles from './SubmitButton.module.scss';

const SubmitButton = ({ text, loading = false }: ISubmitButton) => {
  const { pending } = useFormStatus();
  return (
    <div className={styles.submitButtonWrapper}>
      <button type="submit" className={styles.submitButton}>
        {pending ? (
          <Lottie
            style={{
              height: '20px',
            }}
            animationData={buttonLoading}
          />
        ) : (
          text
        )}
      </button>
      <div className={styles.headerBtnPrimaryBorder}></div>
    </div>
  );
};

export default SubmitButton;
