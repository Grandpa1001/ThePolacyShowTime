import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Polak = (props) =>{
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('./models/polak.gltf')
  const {actions, names } = useAnimations(animations, group);
  console.log(names);
  return (
    <group {...props} dispose={null}>
      <group scale={1}>
        <mesh castShadow geometry={nodes.thePolak2_1.geometry} material={materials['ThePolac2-Material.001']} />
        <mesh castShadow geometry={nodes.thePolak2_2.geometry} material={materials['palette.004']} />
      </group>
    </group>
  )
}

export default Polak
useGLTF.preload('./models/polak.gltf')
