import React from "react";
import Cell from "./Cell";

const Board = ({ board, onCellClick, isWinningCell }) => (
  <div className="grid grid-cols-3 gap-4 w-64">
    {board.map((cell, index) => (
      <Cell
        key={index}
        value={cell}
        onClick={() => onCellClick(index)}
        disabled={!!cell}
        winner={isWinningCell(index)} // Pass winner flag to each cell
      />
    ))}
  </div>
);

export default Board;
