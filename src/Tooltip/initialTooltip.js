import React from "react";
import styles from "./Tooltip.module.css";

export default function Tooltip({ show = true, children, x, y }) {
  return (
    <div
      className={styles.container}
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`
      }}
    >
      <div className={`${styles.innerContainer} ${show ? styles.visible : ""}`}>
        {children}
        <div className={styles.triangle} />
      </div>
    </div>
  );
}
