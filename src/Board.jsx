import * as THREE from "three";


export default function Board() {

  return (
    <>
      <mesh position={[0, 0 , 0]}>
        <meshPhongMaterial transparent={true} opacity={0.75} side={THREE.DoubleSide} color={'black'}/>
        <planeGeometry args={[3,2]}></planeGeometry>
      </mesh>

      {/* left wall */}
      <mesh position={[-1.505, 0, 0.05]}>
        <meshPhongMaterial transparent={true} color={'#1d1d1d'}/>
        <boxGeometry args={[0.01, 2.02, 0.1]}></boxGeometry>
      </mesh>

      <mesh position={[-1.505, 0, 0.101]}>
        <meshBasicMaterial transparent={true} color={[0.22 * 1.5, 0.91 * 1.5, 0.76 * 1.5]}/>
        <planeGeometry args={[0.01, 2.02]}></planeGeometry>
      </mesh>

      {/* right wall */}
      <mesh position={[1.505, 0, 0.05]}>
        <meshPhongMaterial transparent={true} color={'#1d1d1d'}/>
        <boxGeometry args={[0.01, 2.02, 0.1]}></boxGeometry>
      </mesh>

      <mesh position={[1.505, 0, 0.101]}>
        <meshBasicMaterial transparent={true} color={[0.22 * 1.2, 0.91 * 1.2, 0.76 * 1.2]}/>
        <planeGeometry args={[0.01, 2.02]}></planeGeometry>
      </mesh>

      {/* top wall */}
      <mesh position={[0, 1.005, 0.05]}>
        <meshPhongMaterial transparent={true} color={'#1d1d1d'}/>
        <boxGeometry args={[3, 0.01, 0.1]}></boxGeometry>
      </mesh>

      <mesh position={[0, 1.005, 0.101]}>
        <meshBasicMaterial transparent={true} color={[0.22 * 1.2, 0.91 * 1.2, 0.76 * 1.2]}/>
        <planeGeometry args={[3, 0.01]}></planeGeometry>
      </mesh>

      {/* bottom wall */}
      <mesh position={[0, -1.005, 0.05]}>
        <meshPhongMaterial transparent={true} color={'#1d1d1d'}/>
        <boxGeometry args={[3, 0.01, 0.1]}></boxGeometry>
      </mesh>

      <mesh position={[0, -1.005, 0.101]}>
        <meshBasicMaterial transparent={true} color={[1.95 * 1.2, 0.11 * 1.2, 0.16 * 1.2]}/>
        <planeGeometry args={[3, 0.01]}></planeGeometry>
      </mesh>
    </>
  )
}