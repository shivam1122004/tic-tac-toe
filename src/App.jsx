import React, { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./utils/gameLogic";
import Confetti from "react-confetti"; // React-Confetti library

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const { winner, winningLine } = calculateWinner(board);
  const currentPlayer = isXNext ? "X" : "O";

  const handleCellClick = (index) => {
    if (board[index] || winner) return;
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      newBoard[index] = currentPlayer;
      return newBoard;
    });
    setIsXNext((prev) => !prev);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const isWinningCell = (index) => winningLine?.includes(index);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {winner && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          colors={["#ff0000", "#ff9900", "#33cc33", "#0066ff", "#ff33cc"]}
        />
      )}
      <h1 className="text-4xl font-bold mb-6">Tic Tac Toe</h1>
      <Board
        board={board}
        onCellClick={handleCellClick}
        isWinningCell={isWinningCell}
      />
      <p className="mt-4 text-lg">
        {winner ? (
          <span className="text-xl font-semibold text-green-500">
            Winner: {winner}
          </span>
        ) : (
          `Next Player: ${currentPlayer}`
        )}
      </p>
      <button
        onClick={resetGame}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow-lg hover:bg-blue-600"
      >
        Reset Game
      </button>
    </div>
  );
};

export default App;
