"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface SlabConfig {
  size: [number, number, number];
  position: [number, number, number];
  rotation: [number, number, number];
}

interface PortalConfig {
  size: [number, number, number];
  position: [number, number, number];
  rotation: [number, number, number];
}

export function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Detect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Dimensions
    let width = mount.clientWidth || window.innerWidth;
    let height = mount.clientHeight || window.innerHeight;

    // 1. Scene & Depth Fog (blends seamlessly into deep carbon #0A0A0A)
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a0a0a, 8, 34);

    // 2. Camera setup with responsive distance
    let aspect = width / height;
    const camera = new THREE.PerspectiveCamera(44, aspect, 0.1, 90);
    const getBaseCameraZ = (a: number) => (a < 1.0 ? 25 : a < 1.4 ? 21 : 18);
    const baseCameraY = 1.0;
    camera.position.set(0, baseCameraY, getBaseCameraZ(aspect));

    // 3. Renderer configuration
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    mount.appendChild(renderer.domElement);

    // Sets for comprehensive memory tracking & disposal
    const geometriesToDispose = new Set<THREE.BufferGeometry>();
    const materialsToDispose = new Set<THREE.Material>();

    const trackGeometry = <T extends THREE.BufferGeometry>(geom: T): T => {
      geometriesToDispose.add(geom);
      return geom;
    };

    const trackMaterial = <T extends THREE.Material>(mat: T): T => {
      materialsToDispose.add(mat);
      return mat;
    };

    // 4. Master Hierarchical Groups
    const masterGroup = new THREE.Group();
    const architectureGroup = new THREE.Group();
    const portalsGroup = new THREE.Group();
    const datumGroup = new THREE.Group();

    masterGroup.add(datumGroup);
    masterGroup.add(architectureGroup);
    masterGroup.add(portalsGroup);
    scene.add(masterGroup);

    // 5. Architectural Ground Datum Grid (Projected coordinate field)
    const gridY = -4.5;
    const gridStep = 2.0;
    const zStart = 6.0;
    const zEnd = -32.0;
    const xStart = -24.0;
    const xEnd = 24.0;

    const gridLines: number[] = [];
    for (let x = xStart; x <= xEnd; x += gridStep) {
      gridLines.push(x, gridY, zStart, x, gridY, zEnd);
    }
    for (let z = zStart; z >= zEnd; z -= gridStep) {
      gridLines.push(xStart, gridY, z, xEnd, gridY, z);
    }

    const gridGeometry = trackGeometry(new THREE.BufferGeometry());
    gridGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(gridLines, 3)
    );
    const gridMaterial = trackMaterial(
      new THREE.LineBasicMaterial({
        color: 0x1a1a1a,
        transparent: true,
        opacity: 0.35,
      })
    );
    datumGroup.add(new THREE.LineSegments(gridGeometry, gridMaterial));

    // Spatial Datum Ticks (cad crosshairs at 4-unit intervals)
    const tickLines: number[] = [];
    const tickSize = 0.16;
    for (let x = xStart; x <= xEnd; x += gridStep * 2) {
      for (let z = zStart; z >= zEnd; z -= gridStep * 2) {
        tickLines.push(x - tickSize, gridY, z, x + tickSize, gridY, z);
        tickLines.push(x, gridY, z - tickSize, x, gridY, z + tickSize);
      }
    }
    const ticksGeometry = trackGeometry(new THREE.BufferGeometry());
    ticksGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(tickLines, 3)
    );
    const ticksMaterial = trackMaterial(
      new THREE.LineBasicMaterial({
        color: 0x2e2e2e,
        transparent: true,
        opacity: 0.5,
      })
    );
    datumGroup.add(new THREE.LineSegments(ticksGeometry, ticksMaterial));

    // 6. Monolithic Sculptural Slabs
    const slabConfigs: SlabConfig[] = [
      // Right backdrop anchor monolith (subtly stages the authentic portrait)
      {
        size: [3.8, 8.8, 0.18],
        position: [7.2, 0.4, -5.5],
        rotation: [0.02, -0.24, -0.01],
      },
      // Architectural Cantilever Lintel (spans upper horizon)
      {
        size: [14.0, 0.24, 3.6],
        position: [2.6, 3.5, -7.2],
        rotation: [-0.01, -0.1, -0.01],
      },
      // Midground vertical partition (depth layer behind right card)
      {
        size: [2.5, 6.8, 0.16],
        position: [3.8, -0.6, -3.8],
        rotation: [0.01, 0.16, 0.0],
      },
      // Ground foundation plinth / terrace plane
      {
        size: [8.5, 0.22, 4.2],
        position: [5.8, -3.8, -4.5],
        rotation: [0.0, 0.12, 0.0],
      },
      // Deep monumental horizon wall (receding in atmospheric fog)
      {
        size: [11.5, 5.6, 0.18],
        position: [-2.5, 0.8, -13.5],
        rotation: [0.01, 0.26, 0.0],
      },
      // Slender vertical mullion fin (anchors far-left margin)
      {
        size: [0.22, 8.2, 0.85],
        position: [-6.4, -0.2, -6.5],
        rotation: [0.0, -0.15, 0.01],
      },
    ];

    const slabMaterial = trackMaterial(
      new THREE.MeshStandardMaterial({
        color: 0x121212,
        roughness: 0.85,
        metalness: 0.2,
        transparent: true,
        opacity: 0.85,
      })
    );

    const slabEdgeMaterial = trackMaterial(
      new THREE.LineBasicMaterial({
        color: 0x333333,
        transparent: true,
        opacity: 0.5,
      })
    );

    slabConfigs.forEach((config) => {
      const geom = trackGeometry(new THREE.BoxGeometry(...config.size));
      const mesh = new THREE.Mesh(geom, slabMaterial);
      mesh.position.set(...config.position);
      mesh.rotation.set(...config.rotation);

      const edgesGeom = trackGeometry(new THREE.EdgesGeometry(geom));
      const wireframe = new THREE.LineSegments(edgesGeom, slabEdgeMaterial);
      mesh.add(wireframe);

      architectureGroup.add(mesh);
    });

    // 7. Architectural Viewport Portals (Spatial depth frames)
    const portalConfigs: PortalConfig[] = [
      {
        size: [5.4, 7.8, 0.02],
        position: [5.4, 0.2, -2.4],
        rotation: [0.01, -0.14, 0.0],
      },
      {
        size: [9.6, 6.0, 0.02],
        position: [1.6, 0.8, -8.6],
        rotation: [0.0, 0.08, -0.01],
      },
      {
        size: [14.5, 8.2, 0.02],
        position: [-0.6, 1.4, -16.2],
        rotation: [-0.01, -0.06, 0.0],
      },
    ];

    const portalEdgeMaterial = trackMaterial(
      new THREE.LineBasicMaterial({
        color: 0x2a2a2a,
        transparent: true,
        opacity: 0.45,
      })
    );

    portalConfigs.forEach((config) => {
      const geom = new THREE.BoxGeometry(...config.size);
      const edgesGeom = trackGeometry(new THREE.EdgesGeometry(geom));
      const portalWire = new THREE.LineSegments(edgesGeom, portalEdgeMaterial);
      portalWire.position.set(...config.position);
      portalWire.rotation.set(...config.rotation);
      portalsGroup.add(portalWire);
      geom.dispose();
    });

    // 8. Cinematic Architectural Lighting
    const ambientLight = new THREE.AmbientLight(0x222222, 1.6);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xf5f5f5, 2.2);
    sunLight.position.set(14, 18, 12);
    scene.add(sunLight);

    const fillLight = new THREE.DirectionalLight(0x445566, 0.8);
    fillLight.position.set(-16, -6, 8);
    scene.add(fillLight);

    // Subtle emerald atmospheric core light
    const emeraldAccent = new THREE.PointLight(0x10b981, 1.0, 20, 2);
    emeraldAccent.position.set(5.2, -0.4, -4.8);
    scene.add(emeraldAccent);

    // 9. Interaction & Motion State
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = -(event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 10. Responsive Resizing
    const handleResize = () => {
      if (!mount) return;
      width = mount.clientWidth;
      height = mount.clientHeight;
      if (width === 0 || height === 0) return;

      aspect = width / height;
      camera.aspect = aspect;
      camera.position.z = getBaseCameraZ(aspect);
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(mount);

    // 11. prefers-reduced-motion Handling
    if (prefersReducedMotion) {
      camera.lookAt(0, baseCameraY * 0.3, 0);
      renderer.render(scene, camera);

      return () => {
        resizeObserver.disconnect();
        window.removeEventListener("mousemove", handleMouseMove);
        if (mount && renderer.domElement && mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement);
        }
        geometriesToDispose.forEach((g) => g.dispose());
        materialsToDispose.forEach((m) => m.dispose());
        renderer.dispose();
      };
    }

    // 12. Animation Loop with IntersectionObserver & Tab Inactivity Throttling
    let animationFrameId: number;
    let isVisible = true;
    let isTabActive = true;
    const clock = new THREE.Clock();

    const render = () => {
      if (!isVisible || !isTabActive) return;

      animationFrameId = requestAnimationFrame(render);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation (inertia damping)
      mouseX += (targetMouseX - mouseX) * 0.035;
      mouseY += (targetMouseY - mouseY) * 0.035;

      // Camera parallax
      camera.position.x = mouseX * 1.5;
      camera.position.y = baseCameraY + mouseY * 0.8;
      camera.lookAt(mouseX * 0.3, baseCameraY * 0.2 + mouseY * 0.15, 0);

      // Controlled architectural harmonic drift (pure GPU matrix transforms)
      architectureGroup.rotation.y = Math.sin(elapsedTime * 0.08) * 0.025;
      architectureGroup.rotation.x = Math.cos(elapsedTime * 0.06) * 0.012;

      portalsGroup.position.y = Math.sin(elapsedTime * 0.1) * 0.06;
      portalsGroup.rotation.y = Math.cos(elapsedTime * 0.07) * 0.015;

      renderer.render(scene, camera);
    };

    // Start loop
    animationFrameId = requestAnimationFrame(render);

    // IntersectionObserver: stop RAF when scrolled out of view
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible;
        isVisible = entry.isIntersecting;
        if (isVisible && !wasVisible && isTabActive) {
          clock.start();
          animationFrameId = requestAnimationFrame(render);
        }
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(mount);

    // Tab visibility handling
    const handleVisibilityChange = () => {
      const wasActive = isTabActive;
      isTabActive = document.visibilityState === "visible";
      if (isTabActive && !wasActive && isVisible) {
        clock.start();
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // 13. Comprehensive Lifecycle Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (mount && renderer.domElement && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }

      geometriesToDispose.forEach((g) => g.dispose());
      materialsToDispose.forEach((m) => m.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
