import { OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import { extend, useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";

import { Easing, Tween, remove } from "three/examples/jsm/libs/tween.module";

extend({ OrbitControls });

const ChristmastTree = () => {
  const { scene, camera, gl } = useThree();
  const controls = useRef();

  useFrame(() => {
    console.log("Hey, I'm executing every frame!")
  })

  ///// CAMERAS CONFIG
  // const camera = new THREE.PerspectiveCamera(
  //   35,
  //   window.innerWidth / window.innerHeight,
  //   1,
  //   100
  // );
  // camera.position.set(34, 16, -20);
  // scene.add(camera);

  const [orbitControlEnable, updateOrbitControlEnable] = useState(false);
  // const introAnimation = () => {
  //   const introTween = new Tween(camera.position.set(0, -1, 0))
  //     .to(
  //       {
  //         x: 2,
  //         y: -0.4,
  //         z: 6.1,
  //       },
  //       6500
  //     )
  //     .easing(Easing.Quadratic.InOut)
  //     .start()
  //     .onComplete(function () {
  //       updateOrbitControlEnable(true);
  //       remove(introTween);
  //     });
  // };

  const modalRef = useRef(null);

  const texture = new THREE.TextureLoader().load("particle-texture.jpg");

  return (
    <>
      <mesh>
        <points ref={modalRef}>
          <sphereGeometry args={[2, 80, 50, 100]} />
          <pointsMaterial size={0.02} alphaMap={texture} />
        </points>
      </mesh>
    </>
  );
};

export default ChristmastTree;
