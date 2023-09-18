"use client"
import { useState } from "react"
import styles from "./page.module.css"
import { motion } from "framer-motion"
import Link from "next/link"

export default function FramerMotion() {
  const [isActive, setIsActive] = useState(true)

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Framer Page</h1>
      <motion.div
        initial={false}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 8,
        }}
        animate={{
          y: isActive ? 0 : -40,
          scale: isActive ? 1 : 1.4,
        }}
        className={styles.ball} />
      <button onClick={() => setIsActive(!isActive)} className={styles.btn}>Click me baa... !</button>
      <Link href={"/"} >Back to home</Link>
    </div>
  )
}