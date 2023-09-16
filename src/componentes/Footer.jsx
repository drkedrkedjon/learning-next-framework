import styles from "./footer.module.css";

export default function Footer() {
  const date = new Date().toLocaleString("es-ES");
  return <p className={styles.date}>{`Creation date is: ${date}`}</p>;
}
