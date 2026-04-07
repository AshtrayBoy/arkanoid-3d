import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useStore } from "./useStore";

export default function Ball() {
  const ballRef = useRef();
  const velocity = useRef([1.75, 1.75]);
  const radius = 0.04;
  const substeps = 4;

  const gameStatus = useStore((state) => state.gameStatus);
  const levelIndex = useStore((state) => state.levelIndex);

useEffect(() => {
  if (gameStatus === 'READY') {
    const randomX = (Math.random() - 0.5) * 1.0; 
    const standardY = 1.75;
    
    velocity.current = [randomX, standardY];

    if (ballRef.current) {
      const paddleX = useStore.getState().paddleX;
      ballRef.current.position.set(paddleX, -0.88, 0.051);
    }
  }
}, [gameStatus, levelIndex]);

  useFrame((state, delta) => {
    const { gameStatus, paddleRef, loseLife, bricks, hitBrick } = useStore.getState();
    const ball = ballRef.current.position;

    const paddleX = paddleRef?.current ? paddleRef.current.position.x : 0;

    if (gameStatus === 'READY') {
      ball.x = paddleX;
      ball.y = -0.88; 
      return;
    }

    if (gameStatus !== 'PLAYING') return;

    const safeDelta = Math.min(delta, 0.1);

    for (let i = 0; i < substeps; i++) {
    ball.x += (velocity.current[0] * safeDelta) / substeps;
    ball.y += (velocity.current[1] * safeDelta) / substeps;

      if (ball.x + radius > 1.5) {
        ball.x = 1.5 - radius;
        velocity.current[0] *= -1;
      } else if (ball.x - radius < -1.5) {
        ball.x = -1.5 + radius;
        velocity.current[0] *= -1;
      }

      if (ball.y + radius > 1) {
        ball.y = 1 - radius;
        velocity.current[1] *= -1;
      }

      if (ball.y - radius < -1.1) { 
        loseLife();
        return; 
      }

      const paddleTop = -0.92;
      if (ball.y - radius < paddleTop && ball.y - radius > -1.0) {
        if (Math.abs(ball.x - paddleX) < 0.22) {
          ball.y = paddleTop + radius; 

          const vx = velocity.current[0];
          const vy = velocity.current[1];
          const speed = Math.sqrt(vx * vx + vy * vy);

          const hitPoint = (ball.x - paddleX) / 0.22;


          const maxAngle = Math.PI / 3; 
          const angle = hitPoint * maxAngle;

          velocity.current[0] = speed * Math.sin(angle);
          velocity.current[1] = speed * Math.cos(angle); 
        }
      }
      
      const bw = 0.1;
      const bh = 0.05;

      for (const brick of bricks) {
        if (!brick.active) continue;

        const bx = brick.pos[0];
        const by = brick.pos[1];

        const dx = Math.abs(ball.x - bx);
        const dy = Math.abs(ball.y - by);

        if (dx < bw + radius && dy < bh + radius) {
          const overlapX = (bw + radius) - dx;
          const overlapY = (bh + radius) - dy;

          if (overlapX < overlapY) {
            velocity.current[0] *= -1;
            ball.x = ball.x > bx ? bx + bw + radius : bx - bw - radius;
          } else {
            velocity.current[1] *= -1;
            ball.y = ball.y > by ? by + bh + radius : by - bh - radius;
          }

          hitBrick(brick.id);
          break;
        }
      }
    }
  });

  return (
    <mesh ref={ballRef} position={[0, -0.88, 0.051]}>
      <sphereGeometry args={[radius, 16, 16]} />
      <meshBasicMaterial color={[1 * 1.5, 0.5 * 1.5, 1.25 * 1.5]} />
    </mesh>
  );
}