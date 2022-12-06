import React from 'react'

import styles from "./Header.module.css";

import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={Logo} alt="todo logo" />
    </header>
  )
}
