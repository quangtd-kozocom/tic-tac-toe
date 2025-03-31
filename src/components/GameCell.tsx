type GameCellProps = {
  value: string | null;
  onClick: () => void;
};

function GameCell({ value, onClick }: GameCellProps) {
  return (
    <button className="cell" type="button" onClick={() => onClick()}>
      {value}
    </button>
  );
}

export default GameCell;
