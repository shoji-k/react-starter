import React, { ReactElement } from 'react'
import Square from './Square'

function Board(props): ReactElement {
  const renderSquare = (i): ReactElement => {
    return (
      <Square i={i} value={props.squares[i]} onClick={(): void => props.onClick(i)} />
    )
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board
