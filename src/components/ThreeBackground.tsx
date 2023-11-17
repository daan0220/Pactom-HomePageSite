import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let particles: THREE.Points;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });

      renderer.setClearColor(0x000000);

      camera.position.z = 500;

      const particleCount = 2000;
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 2,
        map: new THREE.TextureLoader().load('https://threejs.org/examples/textures/sprites/disc.png'),
        blending: THREE.AdditiveBlending,
        depthTest: false,
        transparent: true,
      });

      const particlesPositions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i++) {
        particlesPositions[i] = (Math.random() - 0.5) * 1000;
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesPositions, 3));
      particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);

      renderer.setSize(window.innerWidth, window.innerHeight);
      animate();
    };

    const animate = () => {
      requestAnimationFrame(animate);

      particles.rotation.x += 0.001;
      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    window.addEventListener('resize', () => {
      if (renderer && canvasRef.current) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    });

    if (canvasRef.current) {
      init();
    }

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default ThreeBackground;
