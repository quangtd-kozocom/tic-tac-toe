import GameCell from './GameCell';

type GameBoardProps = {
  board: (string | null)[][];
  handleClick: (rowIndex: number, colIndex: number) => void;
};

function GameBoard({ board, handleClick }: GameBoardProps) {
  return (
    <div>
      {board.map((row, rowIndex) => (
        <div className="row">
          {row.map((_, colIndex) => (
            <GameCell value={board[rowIndex][colIndex]} onClick={() => handleClick(rowIndex, colIndex)} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
