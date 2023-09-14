import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import myImage from "@/app/images/equipo.jpg";
import { users } from "@/app/myNewData.js";

export default function About() {
  return (
    <div className={styles.wrapper}>
      <Image src={myImage} alt="equipo" />
      <p className={styles.title}>About</p>
      <Link href="/">Back to Home Page</Link>
      <div className={styles.linksUser}>
        {users.map((user) => (
          <Link href={`/about/${user.id}`} key={user.id}>
            {user.name}
          </Link>
        ))}
      </div>
      <p className={styles.title}>More dynamic links</p>
    </div>
  );
}
