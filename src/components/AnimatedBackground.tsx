import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

// Hook to detect if page is visible
function usePageVisibility() {
  const [isVisible, setIsVisible] = useState(!document.hidden)
  
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden)
    }
    
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])
  
  return isVisible
}

interface FloatingOrbProps {
  position: [number, number, number]
  color: string
  speed?: number
  size?: number
}

function FloatingOrb({ position, color, speed = 1, size = 0.08 }: FloatingOrbProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const isVisible = usePageVisibility()
  
  useFrame((state) => {
    if (meshRef.current && isVisible) {
      const time = state.clock.elapsedTime * speed
      meshRef.current.position.y = position[1] + Math.sin(time * 0.8) * 0.08
      meshRef.current.rotation.x = time * 0.15
      meshRef.current.rotation.y = time * 0.2
    }
  })
  
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.8} 
        roughness={0.1}
        transparent
        opacity={0.15}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

function WireframeCube({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const isVisible = usePageVisibility()
  
  useFrame((state) => {
    if (meshRef.current && isVisible) {
      const time = state.clock.elapsedTime * speed
      meshRef.current.rotation.x = time * 0.1
      meshRef.current.rotation.y = time * 0.15
      meshRef.current.position.y = position[1] + Math.cos(time * 0.6) * 0.06
    }
  })
  
  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.12, 0.12, 0.12]} />
      <meshStandardMaterial 
        color={color} 
        wireframe
        metalness={0.9}
        roughness={0.05}
        transparent
        opacity={0.08}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}

function TorusRing({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const isVisible = usePageVisibility()
  
  useFrame((state) => {
    if (meshRef.current && isVisible) {
      const time = state.clock.elapsedTime * speed
      meshRef.current.rotation.z = time * 0.12
      meshRef.current.rotation.x = Math.sin(time * 0.4) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(time * 0.7) * 0.05
    }
  })
  
  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[0.06, 0.02, 16, 32]} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.7}
        roughness={0.15}
        transparent
        opacity={0.12}
        emissive={color}
        emissiveIntensity={0.25}
      />
    </mesh>
  )
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null)
  const isVisible = usePageVisibility()
  
  const geometry = useMemo(() => {
    const positions = new Float32Array(100 * 3)
    for (let i = 0; i < 100; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 6
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [])

  useFrame((state) => {
    if (particlesRef.current && isVisible) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.015
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.008) * 0.03
    }
  })

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial
        color="#8b5cf6"
        size={0.012}
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  )
}

export default function AnimatedBackground() {
  const orbs = useMemo(() => [
    { position: [-2.5, 0.8, -1.5] as [number, number, number], color: "#8b5cf6", speed: 0.8, size: 0.06 },
    { position: [1.8, -0.6, -1.2] as [number, number, number], color: "#3b82f6", speed: 1.1, size: 0.08 },
    { position: [0, 1.2, -2] as [number, number, number], color: "#06b6d4", speed: 0.9, size: 0.07 },
    { position: [-1.2, -1, -1.8] as [number, number, number], color: "#10b981", speed: 0.7, size: 0.05 },
  ], [])

  const cubes = useMemo(() => [
    { position: [-1.8, 0.3, -2.2] as [number, number, number], color: "#8b5cf6", speed: 0.6 },
    { position: [2.2, -0.2, -1.5] as [number, number, number], color: "#3b82f6", speed: 0.9 },
    { position: [0.3, 0.9, -2.8] as [number, number, number], color: "#06b6d4", speed: 1.2 },
  ], [])

  const rings = useMemo(() => [
    { position: [-0.8, -0.4, -1.8] as [number, number, number], color: "#f59e0b", speed: 0.8 },
    { position: [1.5, 0.6, -2.5] as [number, number, number], color: "#ef4444", speed: 1.0 },
    { position: [-2.8, -0.8, -1.2] as [number, number, number], color: "#a855f7", speed: 0.7 },
  ], [])

  return (
    <div className="absolute inset-0 z-0">
      <Canvas 
        camera={{ position: [0, 0, 3], fov: 60 }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 3]} />
        
        {/* Minimal ambient lighting */}
        <ambientLight intensity={0.05} />
        
        {/* Soft directional light */}
        <directionalLight 
          position={[2, 2, 2]} 
          intensity={0.2}
          color="#ffffff"
        />
        
        {/* Subtle colored accent lights */}
        <pointLight 
          position={[-2, -2, 0]} 
          intensity={0.1} 
          color="#8b5cf6" 
          distance={6}
        />
        <pointLight 
          position={[2, 2, 0]} 
          intensity={0.08} 
          color="#3b82f6" 
          distance={5}
        />
        
        {/* Particle field for depth */}
        <ParticleField />
        
        {/* Clean floating elements */}
        {orbs.map((orb, index) => (
          <FloatingOrb key={`orb-${index}`} {...orb} />
        ))}
        
        {cubes.map((cube, index) => (
          <WireframeCube key={`cube-${index}`} {...cube} />
        ))}
        
        {rings.map((ring, index) => (
          <TorusRing key={`ring-${index}`} {...ring} />
        ))}
      </Canvas>
    </div>
  )
}
