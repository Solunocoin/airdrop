import styles from './ButtonPrimary.module.scss';

const SubmitButton = ({ text }: ISubmitButton) => {
  return (
    <div className={styles.submitButtonWrapper}>
      <button type="submit" className={styles.submitButton}>
        {text}
      </button>
      <div className={styles.headerBtnPrimaryBorder}></div>
    </div>
  );
};

export default SubmitButton;
