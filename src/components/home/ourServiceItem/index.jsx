import { MyButton } from "../../ui/myButton";
import { camelize } from "@/util/cameCase";
import Link from "next/link";
import styles from "./style.module.scss";

const serviceSlugs = {
  "Будівництво котеджів і дач": "constructionOfCottagesAndVillas",
  "Плоский дизайн інтер'єру": "flatInteriorDesign",
  "Індивідуальне проектування": "individualProjecting",
  "Дизайн інтер'єру будинків": "houseInteriorDesign", 

  
  "Construcción de chalets y villas": "constructionOfCottagesAndVillas",
  "Diseño de interiores de apartamentos": "flatInteriorDesign",
  "Proyectos Individuales": "individualProjecting",
  "Diseño de interiores de casas": "houseInteriorDesign",
};

export const OurServiceItem = ({ title, text, btn = false }) => {
  const slug = serviceSlugs[title] || camelize(title);

  return (
    <Link href={`/${slug}`}>
      <div className={styles.ourServiceItem}>
        <h3>{title}</h3>
        <p>{text}</p>
        {btn && <MyButton className={styles.ourServiceItem__btn} />}
      </div>
    </Link>
  );
};
