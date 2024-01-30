

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Polak =(props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/polak.glb')
  const { actions, names } = useAnimations(animations, group)
  console.log(names);

useEffect(() => {
  actions[names[0]].reset().fadeIn(0.5).play();
}, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <group name="thePolak2">
            <skinnedMesh castShadow name="thePolak2_1" geometry={nodes.thePolak2_1.geometry} material={materials['ThePolac2-Material.001']} skeleton={nodes.thePolak2_1.skeleton} />
            <skinnedMesh castShadow name="thePolak2_2" geometry={nodes.thePolak2_2.geometry} material={materials['palette.004']} skeleton={nodes.thePolak2_2.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

export default Polak;

useGLTF.preload('./models/polak.glb')
