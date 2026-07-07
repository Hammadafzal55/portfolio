"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const techLabels = ["Next", "React", "TS", "AI", "Web3", "UI"];

const HeroScene = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.45, 8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const root = new THREE.Group();
    scene.add(root);

    const pointer = new THREE.Vector2(0, 0);

    const coreGeometry = new THREE.IcosahedronGeometry(1.55, 2);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x08e95e,
      metalness: 0.5,
      roughness: 0.2,
      transparent: true,
      opacity: 0.72,
      emissive: 0x043b1a,
      emissiveIntensity: 0.75,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    root.add(core);

    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(coreGeometry),
      new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.26,
      }),
    );
    core.add(wire);

    const halo = new THREE.Mesh(
      new THREE.TorusGeometry(2.18, 0.012, 16, 180),
      new THREE.MeshBasicMaterial({
        color: 0x67e8f9,
        transparent: true,
        opacity: 0.58,
      }),
    );
    halo.rotation.x = Math.PI / 2.35;
    root.add(halo);

    const secondHalo = new THREE.Mesh(
      new THREE.TorusGeometry(2.72, 0.01, 16, 180),
      new THREE.MeshBasicMaterial({
        color: 0x08e95e,
        transparent: true,
        opacity: 0.36,
      }),
    );
    secondHalo.rotation.y = Math.PI / 2.7;
    root.add(secondHalo);

    const electronGeometry = new THREE.SphereGeometry(0.08, 24, 24);
    const electronMaterial = new THREE.MeshBasicMaterial({
      color: 0x67e8f9,
    });
    const electrons = [0, 1, 2].map((index) => {
      const electron = new THREE.Mesh(electronGeometry, electronMaterial);
      const trail = new THREE.Mesh(
        new THREE.TorusGeometry(2.72 + index * 0.28, 0.006, 12, 180),
        new THREE.MeshBasicMaterial({
          color: index === 1 ? 0x08e95e : 0x67e8f9,
          transparent: true,
          opacity: 0.22,
        }),
      );
      trail.rotation.set(
        Math.PI / (2.1 + index * 0.2),
        index * 0.72,
        index * 0.45,
      );
      root.add(trail);
      root.add(electron);
      return { electron, offset: index * ((Math.PI * 2) / 3), radius: 2.72 + index * 0.28 };
    });

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 520;
    const positions = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount; index += 1) {
      const radius = 4 + Math.random() * 4.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[index * 3 + 2] = radius * Math.cos(phi);
    }
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.024,
        transparent: true,
        opacity: 0.62,
        depthWrite: false,
      }),
    );
    root.add(particles);

    const labelSprites = techLabels.map((label, index) => {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 96;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.52)";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.22)";
        ctx.lineWidth = 4;
        ctx.roundRect(10, 12, 236, 70, 22);
        ctx.fill();
        ctx.stroke();
        ctx.font = "700 34px Inter, Arial, sans-serif";
        ctx.fillStyle = index % 2 === 0 ? "#08E95E" : "#67E8F9";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(label, 128, 48);
      }

      const texture = new THREE.CanvasTexture(canvas);
      const sprite = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: texture,
          transparent: true,
          depthWrite: false,
        }),
      );
      sprite.scale.set(1.35, 0.5, 1);
      root.add(sprite);
      return { sprite, angle: (index / techLabels.length) * Math.PI * 2 };
    });

    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambient);

    const key = new THREE.PointLight(0x08e95e, 52, 12);
    key.position.set(2.4, 3.2, 4.2);
    scene.add(key);

    const rim = new THREE.PointLight(0x67e8f9, 42, 10);
    rim.position.set(-3, -1.6, 3.4);
    scene.add(rim);

    const resize = () => {
      const width = mount.clientWidth || 560;
      const height = mount.clientHeight || 520;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = -((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    resize();
    window.addEventListener("resize", resize);
    mount.addEventListener("pointermove", onPointerMove);

    let frameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      root.rotation.y = elapsed * 0.13 + pointer.x * 0.16;
      root.rotation.x = -0.13 + pointer.y * 0.1;
      core.rotation.x = elapsed * 0.32;
      core.rotation.y = elapsed * 0.46;
      halo.rotation.z = elapsed * 0.38;
      secondHalo.rotation.z = -elapsed * 0.3;
      particles.rotation.y = -elapsed * 0.025;
      particles.rotation.x = elapsed * 0.015;

      electrons.forEach(({ electron, offset, radius }, index) => {
        const speed = 1.15 + index * 0.22;
        const angle = elapsed * speed + offset;
        electron.position.set(
          Math.cos(angle) * radius,
          Math.sin(angle * 0.85 + index) * 0.82,
          Math.sin(angle) * radius,
        );
      });

      labelSprites.forEach(({ sprite, angle }, index) => {
        const radius = 3.15 + Math.sin(elapsed + index) * 0.12;
        const current = angle + elapsed * 0.42;
        sprite.position.set(
          Math.cos(current) * radius,
          Math.sin(elapsed * 0.75 + index) * 0.78,
          Math.sin(current) * radius,
        );
      });

      camera.position.x += (pointer.x * 0.45 - camera.position.x) * 0.04;
      camera.position.y += (0.45 + pointer.y * 0.26 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      mount.removeEventListener("pointermove", onPointerMove);
      mount.removeChild(renderer.domElement);
      particlesGeometry.dispose();
      electronGeometry.dispose();
      electronMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="hero-three-canvas" aria-hidden="true" />;
};

export default HeroScene;
