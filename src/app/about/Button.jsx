"use client";
import { useState } from "react";
import style from "./button.module.css";

export default function Button() {
  const [color, setColor] = useState("red");

  return (
    <button className={style.button} onClick={() => setColor("yellow")}>
      {color}
    </button>
  );
}
