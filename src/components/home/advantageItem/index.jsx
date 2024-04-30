import styles from "./style.module.scss";

export const AdvantageItem = ({ text }) => {
  return <div className={styles.advantageItem}>{text}</div>;
};
