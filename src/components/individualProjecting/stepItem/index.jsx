import styles from "./style.module.scss";

export const StepItem = ({ title, text }) => {
  return (
    <div className={styles.stepItem}>
      <h2>{title}</h2>
      <div className={styles.stepItem__textContainer}>
        <div className={styles.stepItem__line}></div>
        <p>{text}</p>
      </div>
    </div>
  );
};
