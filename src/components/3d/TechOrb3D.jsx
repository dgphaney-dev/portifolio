import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function TechOrb3D() {
  const mountRef = useRef(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Verificar suporte WebGL
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch (e) {
      setHasWebGL(false);
      return;
    }

    // Configuração Three.js
    const width = currentMount.clientWidth || 400;
    const height = currentMount.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Grupo principal para rotação
    const group = new THREE.Group();
    scene.add(group);

    // 1. Núcleo Icosaedro Wireframe Tecnológico
    const geometryCore = new THREE.IcosahedronGeometry(1.4, 2);
    const materialWire = new THREE.MeshBasicMaterial({
      color: 0x9333ea,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const coreMesh = new THREE.Mesh(geometryCore, materialWire);
    group.add(coreMesh);

    // 2. Pontos luminosos nos vértices
    const pointsMat = new THREE.PointsMaterial({
      color: 0x06b6d4,
      size: 0.04,
      transparent: true,
      opacity: 0.8,
    });
    const corePoints = new THREE.Points(geometryCore, pointsMat);
    group.add(corePoints);

    // 3. Anel Orbital 1
    const ringGeo1 = new THREE.TorusGeometry(2.1, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    // 4. Anel Orbital 2 (oposto)
    const ringGeo2 = new THREE.TorusGeometry(2.4, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xd946ef,
      transparent: true,
      opacity: 0.4,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 6;
    group.add(ring2);

    // Variáveis de interação do mouse
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event) => {
      const rect = currentMount.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / width) * 2 - 1;
      const y = -((event.clientY - rect.top) / height) * 2 + 1;
      targetRotationY = x * 0.8;
      targetRotationX = -y * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Rotação autônoma contínua
      coreMesh.rotation.y += 0.003;
      coreMesh.rotation.x += 0.002;
      corePoints.rotation.y += 0.003;
      corePoints.rotation.x += 0.002;

      ring1.rotation.z += 0.006;
      ring2.rotation.z -= 0.005;

      // Resposta suave (lerp) ao movimento do mouse
      group.rotation.y += (targetRotationY - group.rotation.y) * 0.05;
      group.rotation.x += (targetRotationX - group.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border border-purple-500/40 bg-purple-500/5 animate-pulse flex items-center justify-center">
          <span className="text-xs font-mono text-purple-400">DOUGLAS.DEV 3D</span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="w-full h-[380px] sm:h-[440px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      aria-label="Objeto 3D Interativo"
    />
  );
}
