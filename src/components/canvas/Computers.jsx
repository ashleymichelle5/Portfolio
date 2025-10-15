import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, ContactShadows } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = () => {
  const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
  const meshRef = useRef()
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }
    
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange)
  }, [])
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.3
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1 + (isMobile ? -1.2 : -2)
    }
  })
  
  return (
    <>
      <ambientLight intensity={2.5} />
      
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={4}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      
      <directionalLight 
        position={[-5, 3, -5]} 
        intensity={3}
      />
      
      <directionalLight 
        position={[0, 5, -5]} 
        intensity={2.5}
      />
      
      <directionalLight 
        position={[0, 3, 5]} 
        intensity={2}
      />
      
      <spotLight
        position={[0, 10, 0]}
        angle={0.5}
        penumbra={1}
        intensity={3}
        castShadow
      />
      
      <spotLight
        position={[-5, 5, 3]}
        angle={0.4}
        penumbra={1}
        intensity={2}
        color="#915eff"
      />
      
    
      <pointLight position={[-3, 2, -3]} intensity={2} color="#ff006e" />
      <pointLight position={[0, 4, 0]} intensity={2} color="#ffffff" />
      <pointLight position={[4, 0, 2]} intensity={1.5} color="#915eff" />
      
      <group ref={meshRef}>
        <primitive 
          object={computer.scene} 
          scale={isMobile ? 0.5 : 0.7}
          position={[0, 0, 0]}
          castShadow
          receiveShadow
        />
      </group>
      
      <ContactShadows
        position={[0, isMobile ? -1.5 : -2.5, 0]}
        opacity={0.3}
        scale={10}
        blur={2.5}
        far={4}
      />
      
      <mesh position={[0, -3, -5]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial 
          color="#1a1a2e"
          metalness={0.2}
          roughness={0.8}
        />
      </mesh>
    </>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas 
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ 
        preserveDrawingBuffer: true,
        alpha: true,
        antialias: true
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2.2}
          enablePan={false}
          rotateSpeed={0.5}
        />
        <Computers />
      </Suspense>
    </Canvas>
  )
}

export default ComputersCanvas