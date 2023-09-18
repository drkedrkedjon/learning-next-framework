import styles from "./page.module.css"

export default function FramerMotion() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Framer Page</h1>
      <div className={styles.ball}>

      </div>
      <button className={styles.btn}>Click me baa</button>
    </div>
  )
}