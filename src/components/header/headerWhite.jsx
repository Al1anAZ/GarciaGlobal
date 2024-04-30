import Link from "next/link";
import { Container } from "../ui/container";
import { ArrowBack } from "../ui/icons/arrowBack";
import styles from "./style.module.scss";

export const HeaderWhite = () => {
  return (
    <header className={styles.headerWhite}>
      <Container className={styles.headerWhite__container}>
        <Link href="/">
          <ArrowBack width={17} height={13} color="black" />
        </Link>
        <img
          src="/assets/ui/logoGrey.webp"
          alt="logo"
          width={192}
          height={51}
        />
      </Container>
    </header>
  );
};
