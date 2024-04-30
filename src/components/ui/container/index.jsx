import styles from "./style.module.scss";

export const Container = ({ children, className }) => {
  return (
    <div className={[className, styles.container].join(" ")}>{children}</div>
  );
};
