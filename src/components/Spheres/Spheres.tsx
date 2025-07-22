import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Spheres = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2], fov: 75 }}>
      <OrbitControls enableDamping dampingFactor={0.03} />
      <hemisphereLight
        color={"#ffffff"}
        groundColor={"#444444"} // light reflected from below
        intensity={1}
      />
      <mesh rotation={[0, 0, 0]}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="white" flatShading />
      </mesh>
    </Canvas>
  );
};

export default Spheres;
