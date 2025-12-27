import React from 'react'

export default function Tiles(){
  return (
    <section aria-label="Feature tiles">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <article className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold">Tile One</h3>
          <p className="text-sm text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
        </article>

        <article className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold">Tile Two</h3>
          <p className="text-sm text-slate-600">Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
        </article>

        <article className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold">Tile Three</h3>
          <p className="text-sm text-slate-600">Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
        </article>

        <article className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold">Tile Four</h3>
          <p className="text-sm text-slate-600">Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.</p>
        </article>
      </div>
    </section>
  )
}
