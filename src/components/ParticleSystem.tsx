import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ParticleSystemProps {
  count?: number
  color?: string
  size?: number
  area?: number
}

export default function ParticleSystem({ 
  count = 30, 
  color = "#8b5cf6", 
  size = 0.8, 
  area = 6 
}: ParticleSystemProps) {
  const particlesRef = useRef<THREE.Points>(null)
  
  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * area
      positions[i3 + 1] = (Math.random() - 0.5) * area
      positions[i3 + 2] = (Math.random() - 0.5) * area * 0.5
    }
    
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [count, area])

  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      const time = state.clock.elapsedTime
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        
        // Gentle floating motion
        positions[i3] += Math.sin(time + i) * 0.0005
        positions[i3 + 1] += Math.cos(time + i) * 0.0005
        positions[i3 + 2] += Math.sin(time * 0.5 + i) * 0.0003
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true
      
      // Slow rotation
      particlesRef.current.rotation.y = time * 0.01
      particlesRef.current.rotation.x = Math.sin(time * 0.005) * 0.02
    }
  })

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial
        color={color}
        size={size * 0.015}
        transparent
        opacity={0.2}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
