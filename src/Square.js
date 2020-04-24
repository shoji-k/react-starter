import React from 'react'

function Square({ value, onClick, i }) {
  return (
    <button className="square" onClick={onClick} data-cy={`cell${i + 1}`}>
      {value}
    </button>
  )
}

export default Square
