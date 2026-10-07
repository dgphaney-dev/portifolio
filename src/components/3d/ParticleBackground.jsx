import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Preferência de redução de movimento do usuário
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // 1. Configuração da Cena, Névoa Cósmica e Câmera Perspectiva (Fiel ao caioduque.dev)
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b0f19, 0.002);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 2. Sistema de Partículas / Estrelas (Cores e Distribuição Caio Duque)
    const particleCount = window.innerWidth < 768 ? 900 : 1600;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const colorPalette = [
      new THREE.Color('#7b46ff'), // Roxo Cósmico Primário
      new THREE.Color('#00d4ff'), // Ciano Neon
      new THREE.Color('#ffffff'), // Estrela Branca
      new THREE.Color('#f472b6'), // Rosa Nebulosa
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22;     // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 22; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 22; // z

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = Math.random() * 2 + 0.5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Textura circular suave para as estrelas brilharem como orbes cósmicos
    const starCanvas = document.createElement('canvas');
    starCanvas.width = 32;
    starCanvas.height = 32;
    const ctx = starCanvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.25, 'rgba(255,255,255,0.9)');
    grad.addColorStop(0.7, 'rgba(255,255,255,0.25)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);
    const texture = new THREE.CanvasTexture(starCanvas);

    const material = new THREE.PointsMaterial({
      size: 0.12,
      map: texture,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 3. Linhas da Constelação Cósmica (Connections geométrica em tempo real)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x7b46ff,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    });

    const lineGeometry = new THREE.BufferGeometry();
    const linePos = new Float32Array(1500 * 3);
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // 4. Interação com o Mouse (Parallax 3D Suave)
    const mouse = new THREE.Vector2();
    let scrollY = window.scrollY;

    const handleMouseMove = (event) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouse.x = (event.clientX - windowHalfX) * 0.001;
      mouse.y = (event.clientY - windowHalfY) * 0.001;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // 5. Loop de Animação
    const startTime = performance.now();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Rotação sutil do universo
      particles.rotation.y += 0.0008;
      particles.rotation.x += 0.0004;

      lines.rotation.y = particles.rotation.y;
      lines.rotation.x = particles.rotation.x;

      // Ondulação suave
      const floatY = Math.sin(elapsedTime * 0.2) * 0.2;
      particles.position.y = floatY;
      lines.position.y = floatY;

      // Parallax de câmera com o mouse e rolagem da página
      const scrollInfluence = scrollY * 0.0005;
      camera.position.x += (mouse.x * 2.5 - camera.position.x) * 0.025;
      camera.position.y += (-mouse.y * 2.5 - scrollInfluence - camera.position.y) * 0.025;
      camera.lookAt(scene.position);

      // Atualização dinâmica das conexões entre partículas próximas (Constelação 3D)
      let vertexIndex = 0;
      const particlePositions = particles.geometry.attributes.position.array;
      const connectionCount = 220;

      for (let i = 0; i < connectionCount; i++) {
        for (let j = i + 1; j < connectionCount; j++) {
          const dx = particlePositions[i * 3] - particlePositions[j * 3];
          const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
          const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < 1.7) {
            if (vertexIndex < linePos.length - 6) {
              linePos[vertexIndex++] = particlePositions[i * 3];
              linePos[vertexIndex++] = particlePositions[i * 3 + 1];
              linePos[vertexIndex++] = particlePositions[i * 3 + 2];

              linePos[vertexIndex++] = particlePositions[j * 3];
              linePos[vertexIndex++] = particlePositions[j * 3 + 1];
              linePos[vertexIndex++] = particlePositions[j * 3 + 2];
            }
          }
        }
      }

      lineGeometry.setDrawRange(0, vertexIndex / 3);
      lineGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      id="bg-canvas"
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
      aria-hidden="true"
    />
  );
}
