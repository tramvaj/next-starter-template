import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Tiles from '../components/Tiles'
import '../styles/globals.css'

export default function Page(){
  const nav = [
    { label: 'Home', href: '/' },
    { label: 'Docs', href: '/docs' },
    { label: 'Blog', href: '/blog' },
  ]

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        <Header items={nav} />

        <main id="main" className="flex-1 py-12">
          <div className="container">
            <section className="text-center mb-6">
              <h2 className="text-2xl font-semibold mb-2">Welcome</h2>
              <p className="text-slate-600 dark:text-slate-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            </section>

            <Tiles />
          </div>
        </main>

        <Footer />
      </body>
    </html>
  )
}
