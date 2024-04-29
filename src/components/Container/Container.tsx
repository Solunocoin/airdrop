import styles from './Container.module.scss';

const Container = ({ children }: IContainer) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
