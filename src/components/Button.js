import React from 'react'

export const Button = ({buttonId, value,HandleOnClick,className}) => {
  return (
    <div>

      <button 
      id={buttonId}
      className = {className}
      onClick= {HandleOnClick}
      >
      {value}
      </button>
    </div>
  )
}
