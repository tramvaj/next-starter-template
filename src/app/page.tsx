import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Tiles from '../components/Tiles'
import styles from './page.module.css'

export default function Page(){
  return (
    <html lang="en">
      <body className={styles.body}>
        <Header />

        <main id="main" className={styles.main}>
          <div className={styles.container}>
            <section className={styles.hero}>
              <h2>Welcome</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </section>

            <Tiles />
          </div>
        </main>

        <Footer />
      </body>
    </html>
  )
}
