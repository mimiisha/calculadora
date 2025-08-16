import React from 'react';
import '../styles/Display.css'

const Display = ({ currentValue, operation, previousValue }) => {
  return (
    <div className="display">
      <div className="display-history">
        {previousValue} {operation}
      </div>
      <div className="display-current">
        {currentValue}
      </div>
    </div>
  )
}

export default Display