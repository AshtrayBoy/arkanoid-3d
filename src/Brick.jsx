import { useRef, useEffect, useMemo } from 'react'
import * as THREE from 'three'
import CustomShaderMaterial from 'three-custom-shader-material'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    csm_Position = position;
  }
`

const fragmentShader = `
  varying vec2 vUv;
  
  uniform float uBorderWidth;
  uniform vec3 uBorderColor;
  uniform float uProgress; 
  uniform vec3 uBaseColor;
  uniform float uTime;
  uniform float uIsSpecial; // 1.0 для спец-блоков, 0.0 для обычных

  void main() {
    float b = uBorderWidth;
    float border = smoothstep(0.0, b, vUv.x) * smoothstep(1.0, 1.0 - b, vUv.x) * smoothstep(0.0, b, vUv.y) * smoothstep(1.0, 1.0 - b, vUv.y);
    
    // Эффект пульсации для спец-блоков
    float pulse = uIsSpecial > 0.5 ? (sin(uTime * 10.0) * 0.5 + 0.5) * 0.4 : 0.0;
    vec3 finalColor = mix(uBorderColor, uBaseColor + pulse, border);
    
    csm_DiffuseColor = vec4(finalColor, uProgress);
    
    if (uProgress < 0.01) discard;
  }
`

export default function Brick({ pos, active, hp, type = 'standard' }) {
  const materialRef = useRef()
  const meshRef = useRef()
  
  const colors = useMemo(() => ({
    standard1: new THREE.Color(1.2, 2.0, 1.6),
    standard2: new THREE.Color(1.5, 1.5, 2.5),
    healer: new THREE.Color(0.2, 2.5, 0.8),
    bomber: new THREE.Color(2.5, 0.5, 0.2),
    border: new THREE.Color(5.5, 5.5, 5.5)
  }), [])

  const uniforms = useMemo(() => ({
    uBorderWidth: { value: 0.03 },
    uBorderColor: { value: colors.border },
    uProgress: { value: 1.0 },
    uBaseColor: { value: colors.standard1 },
    uTime: { value: 0 },
    uIsSpecial: { value: 0 }
  }), [colors])

  useEffect(() => {
    if (!materialRef.current) return

    let targetColor = colors.standard1
    let special = 0

    if (type === 'healer') {
      targetColor = colors.healer
      special = 1
    } else if (type === 'bomber') {
      targetColor = colors.bomber
      special = 1
    } else {
      targetColor = hp === 2 ? colors.standard2 : colors.standard1
      special = 0
    }

    uniforms.uBaseColor.value = targetColor
    uniforms.uIsSpecial.value = special
  }, [hp, type, colors, uniforms])

  useEffect(() => {
    if (!meshRef.current) return

    gsap.killTweensOf(meshRef.current.scale)
    gsap.killTweensOf(uniforms.uProgress)

    if (!active) {
      const tl = gsap.timeline({
        onComplete: () => { if (meshRef.current) meshRef.current.visible = false }
      })
      tl.to(meshRef.current.scale, { x: 0, y: 0, z: 0, duration: 0.4, ease: 'back.in(1.7)' }, 0)
      tl.to(uniforms.uProgress, { value: 0, duration: 0.3 }, 0.1)
    } else {
      meshRef.current.visible = true
      gsap.set(meshRef.current.scale, { x: 0, y: 0, z: 0 }) 
      gsap.set(uniforms.uProgress, { value: 1.0 })
      
      gsap.to(meshRef.current.scale, { 
        x: 1, y: 1, z: 1, 
        duration: 0.5, 
        ease: 'back.out(1.7)' 
      })
    }
  }, [active, uniforms])

  useFrame((state) => {
    if (uniforms.uIsSpecial.value > 0) {
      uniforms.uTime.value = state.clock.elapsedTime
    }
  })

  return (
    <mesh ref={meshRef} position={[...pos, 0.05]}>
      <boxGeometry args={[0.2, 0.1, 0.1]} />
      <CustomShaderMaterial
        ref={materialRef}
        baseMaterial={THREE.MeshStandardMaterial}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  )
}