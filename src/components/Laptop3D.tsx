import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { Vector3 } from 'three';

// Component to handle scroll interaction and laptop rotation
const Laptop3D: React.FC = () => {
  const laptopRef = useRef<THREE.Group>(null);
  const [rotation, setRotation] = useState(new Vector3(0, 0, 0));
  const [lidAngle, setLidAngle] = useState(0); // Angle to control lid open/close

  // Handle mouse movement to rotate the laptop
  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const xRotation = ((clientY / window.innerHeight) * 2 - 1) * Math.PI * 0.2;
    const yRotation = ((clientX / window.innerWidth) * 2 - 1) * Math.PI * 0.2;
    setRotation(new Vector3(xRotation, yRotation, 0));
  };

  // Handle scroll to open/close the laptop lid
  const handleScroll = (event: WheelEvent) => {
    const newLidAngle = Math.min(Math.max(lidAngle - event.deltaY * 0.001, 0), Math.PI / 2);
    setLidAngle(newLidAngle);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('wheel', handleScroll);
    };
  }, [lidAngle]);

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <LaptopModel lidAngle={lidAngle} rotation={rotation} ref={laptopRef} />
    </Canvas>
  );
};

// Laptop model component
const LaptopModel = React.forwardRef<
  THREE.Group,
  { lidAngle: number; rotation: Vector3 }
>(({ lidAngle, rotation }, ref) => {
  const { nodes, materials } = useGLTF('/laptop_model.glb') as any;

  useFrame(() => {
    if (ref && (ref as any).current) {
      (ref as any).current.rotation.x = rotation.x;
      (ref as any).current.rotation.y = rotation.y;
    }
  });

  return (
    <group ref={ref} dispose={null}>
      {/* Base of the laptop */}
      <mesh geometry={nodes.Base.geometry} material={materials.Body}>
        <meshStandardMaterial attach="material" color="gray" />
      </mesh>

      {/* Lid of the laptop */}
      <mesh
        geometry={nodes.Lid.geometry}
        material={materials.Screen}
        position={[0, 0.05, -0.15]}
        rotation={[lidAngle, 0, 0]}
      >
        <meshStandardMaterial attach="material" color="black" />
      </mesh>
    </group>
  );
});

useGLTF.preload('/laptop_model.glb');

export default Laptop3D;