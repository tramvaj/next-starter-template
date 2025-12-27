import React from 'react';

export default function Page() {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}>
        <header style={{ background: '#0f172a', color: '#fff', padding: '16px 20px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h1 style={{ margin: 0, fontSize: 20 }}>Next Starter Template</h1>
            <nav aria-label="Main navigation">
              <ul style={{ listStyle: 'none', display: 'flex', gap: 16, margin: 0, padding: 0 }}>
                <li style={{ opacity: 0.85 }}>Home</li>
                <li style={{ opacity: 0.85 }}>About</li>
                <li style={{ opacity: 0.85 }}>Contact</li>
              </ul>
            </nav>
          </div>
        </header>

        <main style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, background: '#f8fafc' }}>
          <div style={{ maxWidth: 1100, width: '100%' }}>
            <section style={{ textAlign: 'center', marginBottom: 24 }}>
              <h2 style={{ margin: '0 0 8px 0' }}>Welcome</h2>
              <p style={{ margin: 0, color: '#475569' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </section>

            <section aria-label="Feature tiles">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                <article style={{ background: '#fff', padding: 20, borderRadius: 8, boxShadow: '0 1px 3px rgba(15,23,42,0.06)' }}>
                  <h3 style={{ marginTop: 0 }}>Tile One</h3>
                  <p style={{ margin: 0, color: '#64748b' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
                </article>

                <article style={{ background: '#fff', padding: 20, borderRadius: 8, boxShadow: '0 1px 3px rgba(15,23,42,0.06)' }}>
                  <h3 style={{ marginTop: 0 }}>Tile Two</h3>
                  <p style={{ margin: 0, color: '#64748b' }}>Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
                </article>

                <article style={{ background: '#fff', padding: 20, borderRadius: 8, boxShadow: '0 1px 3px rgba(15,23,42,0.06)' }}>
                  <h3 style={{ marginTop: 0 }}>Tile Three</h3>
                  <p style={{ margin: 0, color: '#64748b' }}>Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
                </article>

                <article style={{ background: '#fff', padding: 20, borderRadius: 8, boxShadow: '0 1px 3px rgba(15,23,42,0.06)' }}>
                  <h3 style={{ marginTop: 0 }}>Tile Four</h3>
                  <p style={{ margin: 0, color: '#64748b' }}>Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.</p>
                </article>
              </div>
            </section>
          </div>
        </main>

        <footer style={{ background: '#0b1220', color: '#9aa4b2', padding: '20px 0' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong>Footer Placeholder</strong>
              <div style={{ fontSize: 13 }}>Lorem ipsum dolor sit amet, consectetur.</div>
            </div>
            <div style={{ fontSize: 13 }}>© {new Date().getFullYear()} Next Starter Template</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
