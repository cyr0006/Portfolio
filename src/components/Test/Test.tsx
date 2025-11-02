import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import model from "../../assets/html_model.gltf";

const Model = () => {
  const gltf = useGLTF(model);
  return <primitive object={gltf.scene} />;
};

const Test = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Model />
    </Canvas>
  );
};

export default Test;
