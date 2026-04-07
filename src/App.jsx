import './App.css'
import Experience from './Experience'
import { Canvas } from '@react-three/fiber'
import Overlay from './Overlay'


export default function App() {

  return (
    <>
      <Canvas
        dpr={[1, 1.5]}
        gl={{alpha: true}}
          camera={ {
              fov: 50,
              near: 0.1,
              far: 50,
              position: [ 0, 0, 3 ]
          } }
      >
        <Experience/>

      </Canvas>
      <Overlay/>
    </>
  )
}
