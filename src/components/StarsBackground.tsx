"use client";

import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { random } from 'maath';
import { Box, useTheme} from '@mui/material';

const StarBackground = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );
  const theme = useTheme();

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={theme.palette.secondary.main}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <Box
    sx={{
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
    }}
  >
    <Canvas camera={{ position: [0, 0, 1] }}>   
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </Box>
);

export default StarsCanvas;