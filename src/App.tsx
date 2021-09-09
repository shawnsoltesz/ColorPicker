import React from 'react'

export function App() {
  return (
    <main>
      <h1>Color Picker</h1>
      <figure>
        <i className="fas fa-sun"></i>
      </figure>
      <section className="selector">
        <p>Hue</p>
        <input className="hue" type="range" min="0" max="360" value="180" />
        <p>Saturation</p>
        <input className="saturation" type="range" min="0%" max="100%" value="50%" />
        <p>Light</p>
        <input className="light" type="range" min="0%" max="100%" value="50%" />
      </section>
    </main>
  )
}
