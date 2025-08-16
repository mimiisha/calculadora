import React from 'react'
import Calculator from './compenents/Calculator'
import './styles/Calculator.css'
import './styles/App.css'

function App() {
  return (
    <>
      <div className="animated-background" />
      <div className="app">
        <Calculator />
      </div>
    </>
  )
}

export default App