import React, { useState } from 'react'

export function App() {
  const [hue, setHue] = useState(180)
  const [saturation, setSaturation] = useState(75)
  const [light, setLight] = useState(25)

  function handleChangeHue(event: React.ChangeEvent<HTMLInputElement>) {
    setHue(Number(event.target.value))
  }
  function handleChangeSaturation(event: React.ChangeEvent<HTMLInputElement>) {
    setSaturation(Number(event.target.value))
  }

  function handleChangeLight(event: React.ChangeEvent<HTMLInputElement>) {
    setLight(Number(event.target.value))
  }
  return (
    <main>
      <h1>Color Picker</h1>
      <h3>HSL Color Simulator</h3>

      <figure>
        <i className="fas fa-sun fa-7x"></i>
        <i className="fas fa-sun fa-10x"></i>
        <i className="fas fa-sun fa-9x"></i>
      </figure>
      <section className="instructions">
        <p>Slide the controls left and right to simulate HSL color codes</p>

        <section className="selector">
          <p>Hue</p>
          <span>{hue}</span>
          <input className="hue" type="range" min="0" max="360" value={hue} onChange={handleChangeHue} />
          <p>Saturation</p>
          <span>{saturation}</span>
          <input
            className="saturation"
            type="range"
            min="0%"
            max="100%"
            value={saturation}
            onChange={handleChangeSaturation}
          />
          <p>Light</p>
          <span>{light}</span>
          <input className="light" type="range" min="0%" max="100%" value={light} onChange={handleChangeLight} />
        </section>
      </section>
      <footer></footer>
    </main>
  )
}
