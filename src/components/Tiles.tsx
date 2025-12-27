import React from 'react'
import styles from './Tiles.module.css'

export default function Tiles(){
  return (
    <section aria-label="Feature tiles">
      <div className={styles.grid}>
        <article className={styles.card}>
          <h3>Tile One</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
        </article>

        <article className={styles.card}>
          <h3>Tile Two</h3>
          <p>Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
        </article>

        <article className={styles.card}>
          <h3>Tile Three</h3>
          <p>Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
        </article>

        <article className={styles.card}>
          <h3>Tile Four</h3>
          <p>Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.</p>
        </article>
      </div>
    </section>
  )
}
