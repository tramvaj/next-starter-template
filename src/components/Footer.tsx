import React from 'react'
import styles from './Footer.module.css'

export default function Footer(){
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div>
          <strong>Footer Placeholder</strong>
          <div className={styles.small}>Lorem ipsum dolor sit amet, consectetur.</div>
        </div>
        <div className={styles.small}>© {new Date().getFullYear()} Next Starter Template</div>
      </div>
    </footer>
  )
}
