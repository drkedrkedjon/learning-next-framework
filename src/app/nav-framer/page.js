"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import styles from "./page.module.css"
import Link from "next/link"

export default function NavFramer() {
  return (
    <div className={styles.navContainer}>
      <ul className={styles.ul}>
        {data.map((item) => (
          <li key={item.slug}>
            <Link className={styles.a} href={item.url}>{item.texto}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const data = [
  {
    slug: "home",
    texto: "Home",
    url: "/"
  },
  {
    slug: "about",
    texto: "About",
    url: "/about"
  },
  {
    slug: "toggle",
    texto: "Toggle",
    url: "/toggle"
  },
]