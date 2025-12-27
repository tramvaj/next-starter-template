import React from 'react'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#main" className={styles.skip}>Skip to content</a>
      <div className={styles.container}>
        <h1 className={styles.title}>Next Starter Template</h1>
        <nav aria-label="Main navigation">
          <ul className={styles.navList}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
