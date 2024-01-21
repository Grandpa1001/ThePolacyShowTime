import { OrbitControls } from "@react-three/drei";


const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxBufferGeometry></boxBufferGeometry>
      </mesh>
    </>
  );
};

export default Experience;
