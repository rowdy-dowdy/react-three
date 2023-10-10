import { easing } from 'maath';
import {useRef} from 'react'
import { Group } from 'three';
import useCanvas from '../../stores/canvas';
import { Vector3, useFrame } from '@react-three/fiber';

const CameraRig = () => {
  const group = useRef<THREE.Group>(null)
  const { position } = useCanvas()

  useFrame((state, delta) => {
    let targetPosition: any = [0,0,2]

    easing.damp3(state.camera.position, targetPosition, 0.25, delta)

    easing.dampE(
      group.current!.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    )
  })

  return (
    <group ref={group}>CameraRig</group>
  )
}

export default CameraRig