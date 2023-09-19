"use client"
import { useState, useId } from "react"
import { motion } from "framer-motion"
import styles from "./page.module.css"
import Link from "next/link"

export default function NavFramer() {
  const [hoveredItem, setHoveredItem] = useState(null)
  const id = useId()


  return (
    <nav className={styles.navContainer}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <ul className={styles.ul}
      >
        {data.map(({ slug, url, texto }) => (
          <li key={slug}

          >
            {hoveredItem === slug && (
              <motion.div
                layoutId={id}
                className={styles.fondo}
                initial={false}
                animate={{
                  borderRadius: 10,
                }}
              />
            )}
            <Link
              onMouseEnter={() => setHoveredItem(slug)}
              className={styles.a}
              href={url}>{texto}</Link>
          </li>
        ))}
      </ul>
    </nav>
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