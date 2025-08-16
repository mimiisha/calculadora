import React, { useState } from 'react'
import Display from './Display'
import Keypad from './Keypad'
import '../styles/Calculator.css'

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setCurrentValue(String(digit))
      setWaitingForOperand(false)
    } else {
      setCurrentValue(currentValue === '0' ? String(digit) : currentValue + digit)
    }
  }

  const inputDot = () => {
    if (waitingForOperand) {
      setCurrentValue('0.')
      setWaitingForOperand(false)
      return
    }

    if (currentValue.indexOf('.') === -1) {
      setCurrentValue(currentValue + '.')
    }
  }

  const clearDisplay = () => {
    setCurrentValue('0')
  }

  const clearAll = () => {
    setCurrentValue('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(currentValue)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const result = calculate(previousValue, inputValue, operation)
      setPreviousValue(result)
      setCurrentValue(String(result))
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = (firstOperand, secondOperand, operation) => {
    switch (operation) {
      case '+':
        return firstOperand + secondOperand
      case '-':
        return firstOperand - secondOperand
      case '*':
        return firstOperand * secondOperand
      case '/':
        return firstOperand / secondOperand
      default:
        return secondOperand
    }
  }

  const handleEquals = () => {
    if (!operation || previousValue === null) return

    const inputValue = parseFloat(currentValue)
    const result = calculate(previousValue, inputValue, operation)

    setCurrentValue(String(result))
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(true)
  }

  const handlePercentage = () => {
    const value = parseFloat(currentValue) / 100
    setCurrentValue(String(value))
  }

  const toggleSign = () => {
    const value = parseFloat(currentValue) * -1
    setCurrentValue(String(value))
  }

  const formatNumber = (num) => {
    if (num === null) return ''

    const number = parseFloat(num)
    if (isNaN(number)) return num

    return number.toLocaleString(undefined, {
      maximumFractionDigits: 8
    })
  }

  return (
    <div className="calculator">
      <p>Calculadora</p>
      <Display
        currentValue={formatNumber(currentValue)}
        operation={operation}
        previousValue={formatNumber(previousValue)}
      />
      <Keypad
        onDigit={inputDigit}
        onDot={inputDot}
        onClear={clearDisplay}
        onAllClear={clearAll}
        onOperation={performOperation}
        onEquals={handleEquals}
        onPercentage={handlePercentage}
        onToggleSign={toggleSign}
      />
    </div>
  )
}

export default Calculator