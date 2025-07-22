import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import type { Mesh, TextureLoader } from "three";
import "../Spheres/Spheres.css";

const Spheres = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2], fov: 75 }}>
      <OrbitControls
        enableDamping
        dampingFactor={0.03}
        enablePan={false}
        enableZoom={false}
      />
      <hemisphereLight
        color={"#ffffff"}
        groundColor={"#444444"} // light reflected from below
        intensity={1}
      />
      <AnimatedBox />
    </Canvas>
  );
};

function AnimatedBox() {
  const polyRef = useRef<Mesh>(null!);

  //Snap back
  const [dragging, setDragging] = useState(false);
  const targetZrotation = 0;
  const targetYrotation = 0;
  const targetXrotation = 0;
  const damping = 0.005;

  useFrame(() => {
    if (!polyRef.current) {
      return;
    }
    if (dragging) {
      console.log(dragging);
    }
    if (!dragging) {
      //roattion -> polyRef.current.rotation.z += 0.005;
      const currentX = polyRef.current.rotation.y;
      polyRef.current.rotation.x += (targetXrotation - currentX) * damping;

      const currentY = polyRef.current.rotation.y;
      polyRef.current.rotation.y += (targetYrotation - currentY) * damping;

      const currentZ = polyRef.current.rotation.y;
      polyRef.current.rotation.z += (targetZrotation - currentZ) * damping;
    }
  });
  return (
    <mesh
      rotation={[Math.PI / 2, Math.PI / 4, Math.PI / 4]}
      ref={polyRef}
      onPointerDown={() => setDragging(true)}
      onPointerUp={() => setDragging(false)}
    >
      <icosahedronGeometry args={[1, 0]} />
      <meshToonMaterial color="wheat" />
    </mesh>
  );
}

export default Spheres;
