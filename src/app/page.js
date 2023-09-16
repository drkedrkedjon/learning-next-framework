import styles from './page.module.css'
import Link from 'next/link'
import { data } from './data'
import Footer from '@/componentes/Footer'

export const metadata = {
  title: "Learning Next.js - Home page"
}

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Practicando Next.js
      </h1>
      <Link className={styles.link} href="/about">About link</Link>
      <div>
        <p>Three dynamic links</p>
        <div className={styles.linkContainer}>
          {data.map((item) => (
            <Link key={item.id} href={`/blog/${item.id}`}>{item.name}</Link>
          ))}
        </div>
        <Footer />
      </div>
    </main>
  )
}
