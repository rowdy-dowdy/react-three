import { OrbitControls } from '@react-three/drei'
import React from 'react'
import Person from './Person'

const Experience = () => {
  return (
    <>
      <OrbitControls  />

      <ambientLight />

      <Person />
    </>
  )
}

export default Experience