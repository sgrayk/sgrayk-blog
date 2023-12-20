import { Canvas } from "react-three-fiber";
import ChristmastTree from "./components/chrismast_tree";
import { OrbitControls } from "@react-three/drei";

const Noel2023 = () => {
  return (
    <div className="h-screen w-screen align-middle justify-center bg-blue-950">
      <Canvas
        shadows
        camera={{ fov: 40, near: 0.1, far: 1000, position: [0, 0, 3*3.14] }}
      >
        <color attach="background" args={["black"]} />
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <ChristmastTree />
      </Canvas>
    </div>
  );
};

export default Noel2023;
