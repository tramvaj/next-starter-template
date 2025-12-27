'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light'|'dark'>(() => {
    if (typeof window === 'undefined') return 'light'
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
      className="ml-4 inline-flex items-center justify-center rounded-md bg-white/8 px-3 py-1 text-sm font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700"
    >
      {theme === 'dark' ? 'Dark' : 'Light'}
    </button>
  )
}
