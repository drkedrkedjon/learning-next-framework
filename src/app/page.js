import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Practicando Next.js
      </h1>
      <Link className={styles.link} href="/about">About link</Link>
    </main>
  )
}
