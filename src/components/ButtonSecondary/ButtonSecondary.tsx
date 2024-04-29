import styles from './ButtonSecondary.module.scss';

const ButtonSecondary = () => {
  return (
    <a
      href="https://tracksol.io/"
      target="_blank"
      className={styles.buttonSecondary}
    >
      How it works
    </a>
  );
};

export default ButtonSecondary;
