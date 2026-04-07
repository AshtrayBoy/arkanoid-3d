import { PerspectiveCamera } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useMemo } from 'react'

export default function Camera() {
  const { size } = useThree()

  const zDistance = useMemo(() => {

    const isMobile = size.width < 768
    const currentTargetWidth = isMobile ? 3.4 : 6

    const fov = 50
    const aspect = size.width / size.height
    const fovRad = (fov * Math.PI) / 180

    const visibleHeightAtDistance = currentTargetWidth / aspect

    console.log(currentTargetWidth)
    
    const distance = visibleHeightAtDistance / (2 * Math.tan(fovRad / 2))
  
    return distance
  }, [size.width, size.height])

  return (
    <PerspectiveCamera
      makeDefault
      fov={50}
      near={0.1}
      far={100}
      position={[0, 0, zDistance]}
    />
  )
}