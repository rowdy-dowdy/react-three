import { useGLTF, useTexture } from '@react-three/drei'
import { Mesh, MeshStandardMaterial } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

type GLTFResult = GLTF & {
  nodes: any
  materials: any
}

const Shirt = () => {
  const { nodes, materials } = useGLTF('/shirt_baked.glb') as GLTFResult
  const logoTexture = useTexture('vite.svg')
  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        dispose={null}
      >
      </mesh>
    </group>
  )
}

export default Shirt