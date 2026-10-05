import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import Menu from "../Menu";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* <a href="/" className={styles.logoLink}>
        <Image
          src="/logo.svg"
          alt="SIMPLE"
          className={styles.logo}
          width={120}
          height={40}
          priority
        />
      </a> */}
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/logo.svg"
          alt="SIMPLE"
          className={styles.logo}
          width={120}
          height={40}
          priority
        />
      </Link>
      {/* <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <a href="/news">ニュース</a>
          </li>
          <li className={styles.item}>
            <a href="/members">メンバー</a>
          </li>
          <li className={styles.item}>
            <a href="/contact">お問い合わせ</a>
          </li>
        </ul>
      </nav> */}
      {/* <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/news">ニュース</Link>
          </li>
          <li className={styles.item}>
            <Link href="/members">メンバー</Link>
          </li>
          <li className={styles.item}>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav> */}
      <Menu />
    </header>
  );
}
