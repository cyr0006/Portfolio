import { OrbitControls, useTexture, Decal } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import type { Mesh, TextureLoader, Wir } from "three";
import "../Spheres/Spheres.css";
import { all } from "three/tsl";

type SpheresProps = {
  myDecal: string;
};

const Spheres = ({ myDecal }: SpheresProps) => {
  return (
    <Canvas camera={{ position: [0, 0, 2], fov: 75 }}>
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        enablePan={false}
        enableZoom={false}
      />
      <hemisphereLight color={"rgba(255, 240, 152, 1)"} intensity={0.1} />
      <AnimatedBox decalImage={myDecal} />
      <AnimatedMesh />
    </Canvas>
  );
};

type AnimatedBoxProps = {
  decalImage: string;
};

function AnimatedBox({ decalImage }: AnimatedBoxProps) {
  const polyRef = useRef<Mesh>(null!);
  //Texture
  const texture = useTexture(decalImage);

  //Snap back
  const [dragging, setDragging] = useState(false);
  const targetZrotation = 0;
  const targetYrotation = 0;
  const targetXrotation = 0;
  const damping = 0.01;

  useFrame(() => {
    if (!polyRef.current) {
      return;
    }
    if (dragging) {
      console.log(dragging);
    }
    if (!dragging) {
      //roattion -> polyRef.current.rotation.z += 0.005;
      const currentX = polyRef.current.rotation.x;
      polyRef.current.rotation.x += (targetXrotation - currentX) * damping;

      const currentY = polyRef.current.rotation.y;
      polyRef.current.rotation.y += (targetYrotation - currentY) * damping;

      const currentZ = polyRef.current.rotation.z;
      polyRef.current.rotation.z += (targetZrotation - currentZ) * damping;
    }
  });

  return (
    <mesh
      rotation={[Math.PI / 2, Math.PI / 2, Math.PI / 2]}
      ref={polyRef}
      onPointerDown={() => setDragging(true)}
      onPointerUp={() => setDragging(false)}
    >
      <icosahedronGeometry args={[1, 2]} />
      <Decal
        position={[0, 0, 0]} // Where on the mesh
        rotation={[0, 0, 0]} // Orientation of decal
        scale={[1, 1, 2]} // Size of decal
        map={texture} // The image texture
        depthTest={true} // Optional for z-fighting
        // Optional for debugging position
      />
      ;
      <meshStandardMaterial
        flatShading
        metalness={20}
        color={"rgba(255, 223, 116, 1)"}
      />
      <textureLoader />
    </mesh>
  );
}
function AnimatedMesh() {
  const polyRef = useRef<Mesh>(null!);
  //Snap back
  const [dragging, setDragging] = useState(false);
  const targetZrotation = 0;
  const targetYrotation = 0;
  const targetXrotation = 0;
  const damping = 0.01;

  useFrame(() => {
    if (!polyRef.current) {
      return;
    }
    if (dragging) {
      console.log(dragging);
    }
    if (!dragging) {
      //roattion -> polyRef.current.rotation.z += 0.005;
      const currentX = polyRef.current.rotation.x;
      polyRef.current.rotation.x += (targetXrotation - currentX) * damping;

      const currentY = polyRef.current.rotation.y;
      polyRef.current.rotation.y += (targetYrotation - currentY) * damping;

      const currentZ = polyRef.current.rotation.z;
      polyRef.current.rotation.z += (targetZrotation - currentZ) * damping;
    }
  });
  return (
    <mesh
      rotation={[Math.PI / 2, Math.PI / 2, Math.PI / 2]}
      ref={polyRef}
      onPointerDown={() => setDragging(true)}
      onPointerUp={() => setDragging(false)}
    >
      <icosahedronGeometry args={[1.1, 2]} />
      ;
      <meshBasicMaterial wireframe color={"rgba(73, 158, 255, 1)"} />
    </mesh>
  );
}

export default Spheres;
