"use client"
import { useState } from "react"
import styles from "./page.module.css"
import { motion } from "framer-motion"

export default function FramerMotion() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Framer Page</h1>
      <motion.div
        animate={{
          y: -80,
          scale: 2,
        }}
        className={styles.ball} />
      <button className={styles.btn}>Click me baa</button>
    </div>
  )
}