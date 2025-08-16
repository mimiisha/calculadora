import React from 'react'
import Button from './Button'
import '../styles/Button.css'

const Keypad = ({
  onDigit,
  onDot,
  onClear,
  onAllClear,
  onOperation,
  onEquals,
  onPercentage,
  onToggleSign,
}) => {
  return (
    <div className="keypad">
      <Button className="function" onClick={onAllClear}>AC</Button>
      <Button className="function" onClick={onClear}>C</Button>
      <Button className="function" onClick={onPercentage}>%</Button>
      <Button className="operator" onClick={() => onOperation('/')}>÷</Button>
      
      <Button onClick={() => onDigit(7)}>7</Button>
      <Button onClick={() => onDigit(8)}>8</Button>
      <Button onClick={() => onDigit(9)}>9</Button>
      <Button className="operator" onClick={() => onOperation('*')}>×</Button>
      
      <Button onClick={() => onDigit(4)}>4</Button>
      <Button onClick={() => onDigit(5)}>5</Button>
      <Button onClick={() => onDigit(6)}>6</Button>
      <Button className="operator" onClick={() => onOperation('-')}>-</Button>
      
      <Button onClick={() => onDigit(1)}>1</Button>
      <Button onClick={() => onDigit(2)}>2</Button>
      <Button onClick={() => onDigit(3)}>3</Button>
      <Button className="operator" onClick={() => onOperation('+')}>+</Button>
      
      <Button onClick={() => onDigit(0)}>0</Button>
      <Button onClick={onToggleSign}>+/-</Button>
      <Button onClick={onDot}>.</Button>
      <Button className="operator" onClick={onEquals}>=</Button>
    </div>
  )
}

export default Keypad