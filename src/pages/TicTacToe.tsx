import { useCallback, useEffect, useState } from 'react';
import GameStatus from '../components/GameStatus';
import GameUndoButton from '../components/GameUndoButton';
import GameBoard from '../components/GameBoard';

type GameState = 'playing' | 'X Win' | 'O Win' | 'Draw';
type SquareValue = 'X' | 'O' | null;
type Board = SquareValue[][];
type BoardHistory = { rowIndex: number; colIndex: number }[];

function TicTacToe() {
  const [status, setStatus] = useState<GameState>('playing');
  const [board, setBoard] = useState<Board>(Array(3).fill(Array(3).fill(null)));
  const [history, setHistory] = useState<BoardHistory>([]);
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (rowIndex: number, colIndex: number) => {
    setBoard((prevBoard) => {
      // Prevent overriding the previous state
      if (prevBoard[rowIndex][colIndex] || status !== 'playing') {
        return prevBoard;
      }

      // Deep copy the board to avoid mutating the state directly
      const newBoard = prevBoard.map((row) => [...row]);
      newBoard[rowIndex][colIndex] = isXNext ? 'X' : 'O';
      setIsXNext((prev) => !prev);
      setHistory((prevHistory) => [...prevHistory, { rowIndex, colIndex }]);
      return newBoard;
    });
  };

  const handleUndo = (rowIndex: number, colIndex: number) => {
    if (status !== 'playing') return;

    const targetIndex = history.findIndex((h) => h.colIndex === colIndex && h.rowIndex === rowIndex);
    const undoActions = history.slice(targetIndex).reverse();
    undoActions.forEach((undo) => {
      setBoard((prevBoard) => {
        const newBoard = prevBoard.map((row) => [...row]);
        newBoard[undo.rowIndex][undo.colIndex] = null;
        return newBoard;
      });
    });
    setHistory((prevHistory) => prevHistory.slice(0, targetIndex));
  };

  const calculateWinner = useCallback((): 'X' | 'O' | null => {
    // Check rows
    for (let i = 0; i < 3; i += 1) {
      if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
        return board[i][0]; // Return the winner (X or O)
      }
    }

    // Check columns
    for (let i = 0; i < 3; i += 1) {
      if (board[0][i] && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
        return board[0][i]; // Return the winner (X or O)
      }
    }

    // Check diagonals
    if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
      return board[0][0];
    }

    if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
      return board[0][2];
    }

    // No winner
    return null;
  }, [board]);

  useEffect(() => {
    const winner = calculateWinner();
    if (winner) {
      setStatus(`${winner} Win`);
    } else if (board.flat().every((cell) => cell !== null)) {
      setStatus('Draw');
    }
  }, [board, calculateWinner]);

  return (
    <div>
      <GameStatus status={status} />
      <div className="game">
        <GameBoard board={board} handleClick={handleClick} />
        <GameUndoButton history={history} onUndo={handleUndo} />
      </div>
    </div>
  );
}

export default TicTacToe;
