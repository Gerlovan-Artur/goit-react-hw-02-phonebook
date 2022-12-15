import styles from '../Section/Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={styles.class_div}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
};