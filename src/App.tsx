import { Environment, Center } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import CameraRig from './components/canvas/CameraRig'
import Backdrop from './components/canvas/Backdrop'
import Shirt from './components/canvas/Shirt'
import { Suspense } from 'react'

function App() {
  return (
    <div className="w-full h-screen">
      <Suspense>
        <Canvas>
          <ambientLight intensity={0.5} />
          <Environment preset='city' />
          {/* <CameraRig>
            <Backdrop /> */}
            <Center>
              <Shirt />
            </Center>
          {/* </CameraRig> */}
        </Canvas>
      </Suspense>
    </div>
  )
}

export default App
