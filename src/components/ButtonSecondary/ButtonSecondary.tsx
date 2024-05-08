import styles from './ButtonSecondary.module.scss';

const ButtonSecondary = ({ text, href, target }: IButtonSecondary) => {
  return (
    <a href={href} className={styles.buttonSecondary} target={target}>
      {text}
    </a>
  );
};

export default ButtonSecondary;
