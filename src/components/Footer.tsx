import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-slate-900 text-slate-300 py-6">
      <div className="container flex items-center justify-between">
        <div>
          <strong className="text-white">Footer Placeholder</strong>
          <div className="text-sm">Lorem ipsum dolor sit amet, consectetur.</div>
        </div>
        <div className="text-sm">© {new Date().getFullYear()} Next Starter Template</div>
      </div>
    </footer>
  )
}
