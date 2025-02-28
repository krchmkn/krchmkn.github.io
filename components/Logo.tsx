import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Logo.module.css";
import logo from "../public/img/logo.svg";

export default () => (
  <div className={styles.container}>
    <Link href="/">
      <Image
        src={logo}
        alt="Website logo"
        className={styles.image}
        priority
        data-test-id="logo"
      />
      &nbsp;🇨🇷
    </Link>
  </div>
);
