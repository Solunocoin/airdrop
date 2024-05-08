import styles from './ButtonPrimary.module.scss';

const ButtonPrimary = ({
  href,
  text,
  target,
  showIcon = false,
}: IButtonPrimary) => {
  return (
    <div className={styles.headerBtnPrimaryWrapper}>
      <a href={href} className={styles.headerBtnPrimary} target={target}>
        {text}
        {showIcon && <span className={styles.lineRoundedIcon}></span>}
      </a>
      <div className={styles.headerBtnPrimaryBorder}></div>
    </div>
  );
};

export default ButtonPrimary;
