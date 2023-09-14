import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import myImage from "@/app/images/equipo.jpg";

export default function About() {
  return (
    <div className={styles.wrapper}>
      <Image src={myImage} alt="equipo" />
      <h1 className={styles.title}>About</h1>
      <Link href="/">Back to Home Page</Link>
    </div>
  );
}
