type GameStatusProps = {
  status: string;
};

function GameStatus({ status }: GameStatusProps) {
  return <div>Game Status: {status}</div>;
}

export default GameStatus;
