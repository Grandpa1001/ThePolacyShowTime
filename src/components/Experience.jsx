import React from 'react';
import { OrbitControls } from "@react-three/drei";

import Polak from "./Polak.jsx";

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight />
      <directionalLight 
        position={[5, 5, 5]}
        intensity={1}
        color="white"
        castShadow 
        shadow-mapSize={1024} 
      />
      <group position={[0, -8, -8]}>
        <Polak position={[0, 0, 0]} />
      </group>
      <mesh 
        rotation={[-0.5 * Math.PI, 0, 0]} 
        position={[0, -5, 0]} 
        receiveShadow
      >
        <planeGeometry attach="geometry" />
        <meshStandardMaterial attach="material" opacity={0.7} />
      </mesh>
    </>
  );
};

export default Experience;