import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useStore } from './useStore';

const beamColor = [1 * 2.2, 0.3 * 2.2, 0.5 * 2.2]
const limiterColor = [0.6 * 1.0, 0.1 * 1.0, 0.2 * 1.0]

export default function Paddle() {
  const meshRef = useRef()
  const { viewport } = useThree()

  const setPaddleRef = useStore((state) => state.setPaddleRef);

  useEffect(() => {
    setPaddleRef(meshRef);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const targetX = (state.pointer.x * viewport.width) / 2;
    const clampedX = Math.max(-1.3, Math.min(1.3, targetX));
    
    meshRef.current.position.x = clampedX;
  });

  return (

      <group ref={meshRef} position={[0, -0.96, 0.051]}>
            {/* Upper Beams */}
            <mesh position={[0, 0.035, 0]}>
              <boxGeometry args={[0.36, 0.01, 0.01]} />
              <meshBasicMaterial color={beamColor} />
            </mesh>
            <mesh position={[0, 0.035, -0.045]}>
              <boxGeometry args={[0.36, 0.01, 0.01]} />
              <meshBasicMaterial color={beamColor} />
            </mesh>
            <mesh position={[0, 0.035, 0.045]}>
              <boxGeometry args={[0.36, 0.01, 0.01]} />
              <meshBasicMaterial color={beamColor} />
            </mesh>

            {/* Lower Beams */}
            <mesh position={[0, -0.035, 0]}>
              <boxGeometry args={[0.36, 0.01, 0.01]} />
              <meshBasicMaterial color={beamColor} />
            </mesh>
            <mesh position={[0, -0.035, -0.045]}>
              <boxGeometry args={[0.36, 0.01, 0.01]} />
              <meshBasicMaterial color={beamColor} />
            </mesh>
            <mesh position={[0, -0.035, 0.045]}>
              <boxGeometry args={[0.36, 0.01, 0.01]} />
              <meshBasicMaterial color={beamColor} />
            </mesh>

            {/* Side Limiters */}
            <mesh position={[-0.19, 0, 0]}>
              <boxGeometry args={[0.02, 0.08, 0.1]} />
              <meshBasicMaterial color={limiterColor} />
            </mesh>
            <mesh position={[0.19, 0, 0]}>
              <boxGeometry args={[0.02, 0.08, 0.1]} />
              <meshBasicMaterial color={limiterColor} />
            </mesh>
      </group>
  )
}