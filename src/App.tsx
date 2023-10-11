import { Environment, Center, Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Experience from './components/Experience'

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas shadows>
        <Experience />
      </Canvas>
    </Suspense>
  )
}

export default App
