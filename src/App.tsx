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

  const newColor = `hsl(${hue},${saturation}%,${light}%)`
  const newStyle = { color: newColor }
  return (
    <main>
      <h1>Color Picker</h1>
      <h3>HSL Color Simulator</h3>

      <figure style={newStyle}>
        <i className="fas fa-sun fa-7x"></i>
        {/* <i className="fas fa-sun fa-10x"></i> */}
        {/* <i className="fas fa-sun fa-9x"></i> */}
      </figure>
      <section className="instructions">
        <p className="display">
          <strong>
            hsl: ({hue}, {saturation}%, {light}%)
          </strong>
        </p>
        <p>Slide the controls left and right to simulate the color</p>
        <section className="selector">
          <p>Hue: {hue}</p>
          <input className="hue" type="range" min="0" max="360" value={hue} onChange={handleChangeHue} />
          <p>Saturation: {saturation}%</p>
          <input
            className="saturation"
            type="range"
            min="0%"
            max="100%"
            value={saturation}
            onChange={handleChangeSaturation}
          />
          <p>Light: {light}%</p>
          <input className="light" type="range" min="0%" max="100%" value={light} onChange={handleChangeLight} />
        </section>
      </section>
      <footer></footer>
    </main>
  )
}
