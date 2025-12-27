import React from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

type NavItem = { label: string; href: string }

export default function Header({ items = [] }: { items?: NavItem[] }) {
  const defaultItems = [{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }]
  const nav = items.length ? items : defaultItems

  return (
    <header className="bg-slate-900 text-white">
      <a href="#main" className="sr-only focus:not-sr-only focus:block p-2 bg-white text-slate-900 rounded">Skip to content</a>
      <div className="container flex items-center justify-between py-4">
        <h1 className="text-lg font-semibold">Next Starter Template</h1>

        <nav aria-label="Main navigation" className="flex items-center gap-4">
          <ul className="flex items-center gap-6">
            {nav.map(item => (
              <li key={item.href} className="opacity-90">
                <Link href={item.href} className="hover:underline">{item.label}</Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
