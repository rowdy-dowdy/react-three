import { useFBX } from '@react-three/drei'
import React from 'react'

const Person = () => {
  const fbx = useFBX("./X Bot.fbx");

  return <primitive object={fbx} scale={0.01} />
}

export default Person