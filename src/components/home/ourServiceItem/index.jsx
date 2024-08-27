import { Arrow } from "../../ui/icons/arrow";
import { MyButton } from "../../ui/myButton";
import { camelize } from "@/util/cameCase";
import Link from "next/link";
import styles from "./style.module.scss";

export const OurServiceItem = ({ title, text, btn = false }) => {
 
  if (camelize(title) === "renovationOfCottagesAndVillas") {
    return null;  
  }

  return (
    <Link href={camelize(title)}>
      <div className={styles.ourServiceItem}>
        <h3>{title}</h3>
        <p>{text}</p>
        {btn && (
          <MyButton className={styles.ourServiceItem__btn}>
            <Arrow color="black" width={16} height={8} />
          </MyButton>
        )}
      </div>
    </Link>
  );
};