"use client"
import { useState } from "react"
import styles from "./page.module.css"
import Link from "next/link"
import { motion } from "framer-motion"

export default function MyToggle() {

  const [isOn, setIsOn] = useState(false)

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Toggle thingy <br /> Layout animation</h1>
      <button
        style={{
          justifyContent: isOn ? "flex-end" : "flex-start",
        }}
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
          layout={true}
        />
      </button>
      <br />
      <Link href={"/"} >Home page</Link>
    </div>
  )
}