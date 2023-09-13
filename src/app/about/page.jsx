import Link from "next/link";
import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>About</h1>
      <Link href="/">Back to Home Page</Link>
    </div>
  );
}
