import Board from "./Board";
import Ball from "./Ball";
import Paddle from "./Paddle";
import { useStore } from "./useStore";
import Brick from "./Brick";



export default function Level() {
  const bricks = useStore((state) => state.bricks);

  return (
    <>
      <Board />
      <Ball />
      <Paddle />
      {bricks.map((brick) => (
        <Brick 
          key={brick.id} 
          pos={brick.pos} 
          active={brick.active}
          hp={brick.hp} 
          type={brick.type}
        />
      ))}
    </>
  );
}