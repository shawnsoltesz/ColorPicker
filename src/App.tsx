import React, { useState } from 'react'

export function App() {
  const [hue, setHue] = useState(0)
  const [saturation, setSaturation] = useState(100)
  const [light, setLight] = useState(50)

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

  //Randomizer

  function handleRandomButtonClick() {
    setHue(Math.floor(Math.random() * 361))
    setSaturation(Math.floor(Math.random() * 101))
    setLight(Math.floor(Math.random() * 101))
  }

  return (
    <main>
      <h1 style={newStyle}>Color Picker</h1>
      <p className="display">
        <strong>
          hsl value: ({hue}, {saturation}%, {light}%)
        </strong>
      </p>

      <figure style={newStyle}>
        <i className="first fas fa-sun fa-7x"></i>
        <i className="second fas fa-sun fa-10x"></i>
        <i className="third fas fa-sun fa-9x"></i>
      </figure>
      <section className="instructions">
        <p>
          <strong>Instructions: </strong>
          Slide the controls left and right to adjust the color. Have fun!
        </p>

        <button onClick={handleRandomButtonClick}>Generate a Random Color</button>

        <section className="selector">
          <p>
            <strong>Hue: {hue}</strong>
          </p>
          <input className="hue" type="range" min="0" max="360" value={hue} onChange={handleChangeHue} />
          <p>
            <strong>Saturation: {saturation}%</strong>
          </p>
          <input
            className="saturation"
            type="range"
            min="0%"
            max="100%"
            value={saturation}
            onChange={handleChangeSaturation}
          />
          <p>
            <strong>Lightness: {light}%</strong>
          </p>
          <input className="light" type="range" min="0%" max="100%" value={light} onChange={handleChangeLight} />
        </section>
      </section>
      <footer>
        <p>
          Built with <i style={newStyle} className="fas fa-heart"></i> in St. Petersburg, Florida.
        </p>
      </footer>
    </main>
  )
}
