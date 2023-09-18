"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import styles from "./page.module.css"

export default function FramerLayout() {
  const [max, setMax] = useState(false)

  return (
    <div>
      <motion.div
        layout={true}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 40,
        }}
        className={`${styles.greenBox} ${max ? styles.max : ""}`}>

        <motion.h1
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 40,
          }}
          layout="position"
        >Framer Layout
        </motion.h1>

      </motion.div>
      <button onClick={() => setMax(!max)} className={styles.btn} >Toggle</button>
    </div>
  )
}