type GameUndoButtonProps = {
  history: { rowIndex: number; colIndex: number }[];
  onUndo: (rowIndex: number, colIndex: number) => void;
};

function GameUndoButton({ history, onUndo }: GameUndoButtonProps) {
  return (
    <div className="undo-button">
      {history.map((move, index) => (
        <button type="button" onClick={() => onUndo(move.rowIndex, move.colIndex)}>
          {`Move ${index + 1}: Row ${move.rowIndex}, Col ${move.colIndex}`}
        </button>
      ))}
    </div>
  );
}

export default GameUndoButton;
