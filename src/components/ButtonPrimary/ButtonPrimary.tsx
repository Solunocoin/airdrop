import styles from './ButtonPrimary.module.scss';

const ButtonPrimary = ({ href, text, target }: IButtonPrimary) => {
  return (
    <div className={styles.headerBtnPrimaryWrapper}>
      <a href={href} className={styles.headerBtnPrimary} target={target}>
        {text}
        <span className={styles.lineRoundedIcon}></span>
      </a>
      <div className={styles.headerBtnPrimaryBorder}></div>
    </div>
  );
};

export default ButtonPrimary;
