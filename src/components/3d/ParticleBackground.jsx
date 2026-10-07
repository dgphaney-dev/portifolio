import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 1. Configuração da Cena, Câmera e Renderizador WebGL
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b0f19, 0.0015);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 2. Sistema de Estrelas em 3D (2200 estrelas brilhantes e multicoloridas)
    const particleCount = window.innerWidth < 768 ? 1200 : 2200;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const colorPalette = [
      new THREE.Color('#ffffff'), // Estrela Branca Pura
      new THREE.Color('#00e5ff'), // Ciano Neon Vibrante
      new THREE.Color('#a855f7'), // Roxo Cósmico Profundo
      new THREE.Color('#f472b6'), // Rosa Nebulosa
      new THREE.Color('#fde047'), // Dourado Quente
      new THREE.Color('#38bdf8'), // Azul Celeste
    ];

    for (let i = 0; i < particleCount; i++) {
      // Distribuição em profundidade ampla à frente da câmera
      positions[i * 3] = (Math.random() - 0.5) * 32;     // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 32; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 24 - 4; // z (sempre no campo de visão)

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      sizes[i] = Math.random() * 2.8 + 1.2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Textura circular de alta definição com núcleo incandescente
    const starCanvas = document.createElement('canvas');
    starCanvas.width = 64;
    starCanvas.height = 64;
    const ctx = starCanvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.2, 'rgba(255, 255, 255, 0.95)');
    grad.addColorStop(0.5, 'rgba(168, 85, 247, 0.45)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const texture = new THREE.CanvasTexture(starCanvas);

    const material = new THREE.PointsMaterial({
      size: 0.16, // Estrelas bem visíveis e brilhantes em toda a tela
      map: texture,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.95,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 3. Linhas da Constelação Cósmica (Connections com AdditiveBlending)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
    });

    const lineGeometry = new THREE.BufferGeometry();
    const linePos = new Float32Array(1800 * 3);
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // 4. Sistema de Meteoros 3D Cortando o Céu do Site
    const meteorCount = 3;
    const meteorGroup = new THREE.Group();
    scene.add(meteorGroup);

    const activeMeteors = [];
    const meteorMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    for (let m = 0; m < meteorCount; m++) {
      const mGeom = new THREE.BufferGeometry();
      const mPositions = new Float32Array([0, 0, 0, -3, 3, 0]);
      mGeom.setAttribute('position', new THREE.BufferAttribute(mPositions, 3));
      const mLine = new THREE.Line(mGeom, meteorMaterial);
      mLine.visible = false;
      meteorGroup.add(mLine);

      activeMeteors.push({
        line: mLine,
        active: false,
        x: 0,
        y: 0,
        z: -5,
        vx: 0,
        vy: 0,
        life: 0,
      });
    }

    let nextMeteorTime = performance.now() + 1000;

    const spawnMeteor3D = () => {
      const freeMeteor = activeMeteors.find((m) => !m.active);
      if (!freeMeteor) return;

      freeMeteor.x = (Math.random() - 0.5) * 20;
      freeMeteor.y = 8 + Math.random() * 4;
      freeMeteor.z = (Math.random() - 0.5) * 10 - 2;
      freeMeteor.vx = (Math.random() * 0.15 + 0.25) * (Math.random() > 0.5 ? 1 : -1);
      freeMeteor.vy = -(Math.random() * 0.2 + 0.35);
      freeMeteor.life = 1.0;
      freeMeteor.active = true;
      freeMeteor.line.visible = true;
    };

    // 5. Interação com o Mouse (Parallax 3D Fluido)
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

    // 6. Loop de Renderização Contínuo
    const startTime = performance.now();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const now = performance.now();
      const elapsedTime = (now - startTime) * 0.001;

      // Rotação suave do universo
      particles.rotation.y += 0.0009;
      particles.rotation.x += 0.0004;

      lines.rotation.y = particles.rotation.y;
      lines.rotation.x = particles.rotation.x;

      // Ondulação suave
      const floatY = Math.sin(elapsedTime * 0.3) * 0.25;
      particles.position.y = floatY;
      lines.position.y = floatY;

      // Parallax de câmera com o mouse e rolagem da página
      const scrollInfluence = scrollY * 0.0006;
      camera.position.x += (mouse.x * 2.8 - camera.position.x) * 0.035;
      camera.position.y += (-mouse.y * 2.8 - scrollInfluence - camera.position.y) * 0.035;
      camera.lookAt(0, -scrollInfluence * 0.2, 0);

      // Atualização de conexões entre estrelas próximas
      let vertexIndex = 0;
      const particlePositions = particles.geometry.attributes.position.array;
      const connectionCount = 240;

      for (let i = 0; i < connectionCount; i++) {
        for (let j = i + 1; j < connectionCount; j++) {
          const dx = particlePositions[i * 3] - particlePositions[j * 3];
          const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
          const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < 2.0) {
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

      // Animação dos meteoros 3D
      if (now > nextMeteorTime) {
        spawnMeteor3D();
        nextMeteorTime = now + 2000 + Math.random() * 2500;
      }

      activeMeteors.forEach((m) => {
        if (!m.active) return;
        m.x += m.vx;
        m.y += m.vy;
        m.life -= 0.02;

        const tailLen = 3.5;
        const posAttr = m.line.geometry.attributes.position;
        posAttr.setXYZ(0, m.x, m.y, m.z);
        posAttr.setXYZ(1, m.x - m.vx * tailLen, m.y - m.vy * tailLen, m.z);
        posAttr.needsUpdate = true;

        if (m.life <= 0 || m.y < -12) {
          m.active = false;
          m.line.visible = false;
        }
      });

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
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
}
