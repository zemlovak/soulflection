import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
// For simplex-noise v4+, use the named export createNoise3D
import { createNoise3D } from 'simplex-noise'

const noise3D = createNoise3D()

function SphereRandomMorphParticles({ particleCount = 3000, spread = 2 }) {
  const pointsRef = useRef()

  // Generate base positions in a sphere distribution
  const [basePositions] = useState(() => {
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3

      // Spherical coordinates approach
      // "spread" is basically the max radius
      const r = Math.random() * spread
      const phi = Math.random() * 2 * Math.PI
      const costheta = Math.random() * 2 - 1 // in [-1, 1]
      const theta = Math.acos(costheta)      // in [0, π]

      positions[i3]     = r * Math.sin(theta) * Math.cos(phi)
      positions[i3 + 1] = r * Math.sin(theta) * Math.sin(phi)
      positions[i3 + 2] = r * Math.cos(theta)
    }
    return positions
  })

  // This is the array we'll actually modify each frame
  const [positions] = useState(() => new Float32Array(basePositions))

  // On first render, create a BufferAttribute from 'positions'
  useEffect(() => {
    if (pointsRef.current) {
      pointsRef.current.geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
      )
    }
  }, [positions])

  // Animate the particles in each frame
  useFrame(({ clock }) => {
    if (!pointsRef.current) return
    const t = clock.getElapsedTime()

    const speed = 0.03
    const amplitude = 0.8
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3

      // Base (un-morphed) positions
      const bx = basePositions[i3]
      const by = basePositions[i3 + 1]
      const bz = basePositions[i3 + 2]

      // Apply noise offset
      const nx = noise3D(bx, bz, t * speed)
      const ny = noise3D(by, bx, t * speed)
      const nz = noise3D(bz, by, t * speed)

      // Morph from base positions using noise
      positions[i3]     = bx + nx * amplitude
      positions[i3 + 1] = by + ny * amplitude
      positions[i3 + 2] = bz + nz * amplitude
    }

    // Inform Three.js that positions changed
    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial
        size={0.02}
        color="#ffffff"
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  )
}

export default function App() {
  return (
    <div className='w-full lg:h-[400px] md:h-[300px]  bg-transparent my-0 mx-auto'

    >
      <Canvas
        style={{
          width: '100%',
          height: '100%',
        }}
        // The camera can still be controlled as needed
        camera={{ position: [0, 0, 6], fov: 40 }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <SphereRandomMorphParticles particleCount={8000} spread={2} />
      </Canvas>
    </div>
  )
}
