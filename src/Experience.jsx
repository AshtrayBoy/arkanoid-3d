import './App.css'
import Level from './Level';
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import Camera from './camera';

export default function Experience() {

  return (
    <>
      <Camera/>
      <directionalLight intensity={1} position={[4, 4 ,4]}></directionalLight>
      <ambientLight intensity={0.5}></ambientLight>

      <EffectComposer>
        <Bloom luminanceThreshold={0.5} luminanceSmoothing={1} height={300} />
      </EffectComposer>
      <Level/>
    </>
  )
}

