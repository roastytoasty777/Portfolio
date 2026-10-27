import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const DUST_COUNT = 900;

const makeDot = () => {
  const c = document.createElement("canvas");
  c.width = c.height = 32;
  const ctx = c.getContext("2d")!;
  ctx.beginPath();
  ctx.arc(16, 16, 15, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  return new THREE.CanvasTexture(c);
};

const Core = () => {
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const wide = viewport.width > 9;

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, state.pointer.x * 0.6, 0.05);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -state.pointer.y * 0.4, 0.05);
    g.rotation.z += delta * 0.05;
  });

  return (
    <group ref={group} position={wide ? [2.9, 0.1, 0] : [0, 1.4, 0]} scale={wide ? 0.8 : 0.7}>
      <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh>
          <icosahedronGeometry args={[1.5, 24]} />
          <MeshDistortMaterial color="#ff8a2a" emissive="#ff5a00" emissiveIntensity={0.18} roughness={0.35} metalness={0.3} distort={0.45} speed={1.6} />
        </mesh>
      </Float>
      <mesh rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.5, 0.015, 16, 200]} />
        <meshBasicMaterial color="#3fd9ff" />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 5, 0]}>
        <torusGeometry args={[3.1, 0.01, 16, 200]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.35} />
      </mesh>
    </group>
  );
};

const Dust = () => {
  const ref = useRef<THREE.Points>(null);
  const dot = useMemo(makeDot, []);
  const positions = useMemo(() => {
    const arr = new Float32Array(DUST_COUNT * 3);
    for (let i = 0; i < DUST_COUNT; i++) {
      const r = 4 + Math.random() * 7;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(p) * Math.cos(t);
      arr[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      arr[i * 3 + 2] = r * Math.cos(p);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={DUST_COUNT} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} map={dot} alphaTest={0.4} color="#ffffff" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const Scene3D = ({ reduceMotion }: { reduceMotion: boolean }) => (
  <Canvas
    camera={{ position: [0, 0, 7], fov: 45 }}
    dpr={[1, 1.75]}
    frameloop={reduceMotion ? "demand" : "always"}
    gl={{ antialias: true, alpha: true }}
  >
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} intensity={2.6} color="#ffe2c0" />
    <directionalLight position={[-5, 2, 3]} intensity={1.2} color="#9fe8ff" />
    <Core />
    <Dust />
  </Canvas>
);

export default Scene3D;
