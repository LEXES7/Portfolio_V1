import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import spacemanScene from "../assets/3D/spaceman.glb";

const Spaceman = ({ scale, position }) => {
  const spacemanRef = useRef();
  const { scene, animations } = useGLTF(spacemanScene);
  const { actions } = useAnimations(animations, spacemanRef);

  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState([0, 2, 7]); // Initial rotation
  const dragStart = useRef([0, 0]); // Store initial drag position

  useEffect(() => {
    actions["Idle"]?.play(); // Ensure the "Idle" animation exists
  }, [actions]);

  // Handle rotation during drag
  const handlePointerDown = (event) => {
    setIsDragging(true);
    dragStart.current = [event.clientX, event.clientY];
  };

  const handlePointerMove = (event) => {
    if (isDragging) {
      const [startX, startY] = dragStart.current;
      const deltaX = (event.clientX - startX) * 0.01; // Adjust sensitivity
      const deltaY = (event.clientY - startY) * 0.01;

      setRotation(([x, y, z]) => [x + deltaY, y + deltaX, z]);
      dragStart.current = [event.clientX, event.clientY];
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  useFrame(() => {
    if (spacemanRef.current) {
      spacemanRef.current.rotation.set(...rotation);
    }
  });

  return (
    <primitive
      ref={spacemanRef}
      object={scene}
      position={position}
      scale={scale}
      rotation={rotation}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerOut={handlePointerUp} // Stop dragging if pointer leaves the model
    />
  );
};

const SpacemanCanvas = () => {
  return (
    <Canvas
      className={"w-full h-screen bg-transparent z-10"}
      camera={{ position: [0, 0, 5], near: 0.1, far: 1000 }}
    >
      <Suspense fallback={null}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <Spaceman scale={[1.5, 1.5, 1.5]} position={[0, 0, 0]} />
      </Suspense>
    </Canvas>
  );
};

export default SpacemanCanvas;