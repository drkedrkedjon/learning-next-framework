"use client"
import { useState } from "react"
import styles from "./page.module.css"
import Link from "next/link"
import { motion } from "framer-motion"

export default function MyToggle() {

  const [isOn, setIsOn] = useState(false)

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Toggle thingy</h1>
      <button
        className={styles.btn}
        onClick={() => setIsOn(!isOn)}
      >
        <motion.span
          className={styles.ball}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
          initial={false}
          animate={{
            x: isOn ? '100%' : "0%",
          }}
        />
      </button>
      <br />
      <Link href={"/"} >Home page</Link>
    </div>
  )
}