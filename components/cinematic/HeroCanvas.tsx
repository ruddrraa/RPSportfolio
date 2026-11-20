"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = mount.clientWidth || window.innerWidth;
    let height = mount.clientHeight || window.innerHeight;

    // 1. Scene & Camera Setup with controlled coordinate bounds
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a0a0a, 12, 36); // Atmospheric depth horizon dissolving to warm ivory 0xF2F0EA

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 13.5);

    // 2. High-Performance WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    mount.appendChild(renderer.domElement);

    // Master hierarchical groups for parallax and scroll-linked transforms
    const masterGroup = new THREE.Group();
    const portraitGroup = new THREE.Group();
    const datumGroup = new THREE.Group();
    masterGroup.add(portraitGroup);
    masterGroup.add(datumGroup);
    scene.add(masterGroup);

    // Architectural spatial coordinate datum ground grid
    const gridHelper = new THREE.GridHelper(30, 30, 0x333333, 0x1a1a1a);
    gridHelper.position.y = -4.5;
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.25;
    datumGroup.add(gridHelper);

    // Studio lighting system: Key sun light, subtle fill, and balanced accent
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambientLight);

    const keySunLight = new THREE.DirectionalLight(0xfffbf0, 1.8);
    keySunLight.position.set(4, 7, 8);
    scene.add(keySunLight);

    // Terracotta accent reference (0xB45D3E): studio rim lighting
    const terracottaRimLight = new THREE.DirectionalLight(0xb45d3e, 0.2);
    terracottaRimLight.position.set(-6, -4, -3);
    scene.add(terracottaRimLight);

    // 3. Halftone Relief Portrait Sculpture Setup (InstancedMesh)
    let circleGeometry: THREE.CircleGeometry | null = null;
    let alabasterMaterial: THREE.MeshStandardMaterial | null = null;
    let sculpturalMesh: THREE.InstancedMesh | null = null;

    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let mouseWorldX = 0;
    let mouseWorldY = 0;
    let isHovering = false;
    let animationFrameId: number;
    let isVisible = true;
    let isTabActive = !document.hidden && document.visibilityState === "visible";
    let isLoopRunning = false;
    let assemblyProgress = { value: prefersReducedMotion ? 1.0 : 0.0 };
    let isAssembled = prefersReducedMotion;

    interface InstanceData {
      targetX: number;
      targetY: number;
      targetZ: number;
      initX: number;
      initY: number;
      initZ: number;
      scale: number;
      r: number;
      g: number;
      b: number;
    }
    const instanceList: InstanceData[] = [];
    let offsetsX: Float32Array;
    let offsetsY: Float32Array;
    let offsetsZ: Float32Array;
    const dummy = new THREE.Object3D();
    const color = new THREE.Color();

    // Load authentic portrait asset
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "/profile/cinematic_portrait.png";

    img.onload = () => {
      // Offscreen downsampling for optimal halftone density
      const sampleWidth = 110;
      const sampleHeight = Math.round((sampleWidth * img.height) / img.width);

      const offscreenCanvas = document.createElement("canvas");
      offscreenCanvas.width = sampleWidth;
      offscreenCanvas.height = sampleHeight;
      const ctx = offscreenCanvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(img, 0, 0, sampleWidth, sampleHeight);
      const imgData = ctx.getImageData(0, 0, sampleWidth, sampleHeight).data;

      const aspect = sampleWidth / sampleHeight;
      const scaleX = 7.2 * aspect;
      const scaleY = 7.2;

      for (let y = 0; y < sampleHeight; y++) {
        for (let x = 0; x < sampleWidth; x++) {
          const idx = (y * sampleWidth + x) * 4;
          const r = imgData[idx];
          const g = imgData[idx + 1];
          const b = imgData[idx + 2];
          const a = imgData[idx + 3];

          // Skip background pixels
          if (a < 40) continue;

          // Normalized centered coordinates
          const normX = (x / sampleWidth - 0.5) * scaleX;
          const normY = -(y / sampleHeight - 0.5) * scaleY;

          // Perceived luminance calculation
          const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255.0;

          // Anatomical 3D depth curvature: highlights pop forward, shadows recede
          const dx = (x / sampleWidth - 0.5) * 2.0;
          const dy = (y / sampleHeight - 0.5) * 2.0;
          const radial = Math.max(0, 1.0 - (dx * dx * 0.7 + dy * dy * 0.5));
          const depthZ = (lum * 1.5 + radial * 0.8) - 0.75;

          // Halftone disk radius proportional to local brightness
          const diskScale = 0.25 + lum * 0.95;

          // Dispersed origin coordinates for entrance assembly animation
          const angle = Math.random() * Math.PI * 2;
          const dist = 3.5 + Math.random() * 7.5;

          instanceList.push({
            targetX: normX,
            targetY: normY,
            targetZ: depthZ,
            initX: normX + Math.cos(angle) * dist,
            initY: normY + Math.sin(angle) * dist,
            initZ: depthZ - 4.0 - Math.random() * 6.0,
            scale: diskScale,
            r: 0.95 * (0.6 + lum * 0.4),
            g: 0.94 * (0.6 + lum * 0.4),
            b: 0.91 * (0.6 + lum * 0.4),
          });
        }
      }

      const totalInstances = instanceList.length;
      if (totalInstances === 0) return;

      offsetsX = new Float32Array(totalInstances);
      offsetsY = new Float32Array(totalInstances);
      offsetsZ = new Float32Array(totalInstances);

      // 3D disk geometry with smooth vertex normals
      circleGeometry = new THREE.CircleGeometry(0.038, 12);
      circleGeometry.computeVertexNormals();

      // PBR Material with controlled roughness and metalness
      alabasterMaterial = new THREE.MeshStandardMaterial({
        color: 0xf2f0ea,
        roughness: 0.35,
        metalness: 0.05,
        side: THREE.DoubleSide,
      });

      // Single-draw-call InstancedMesh for 60 FPS performance
      sculpturalMesh = new THREE.InstancedMesh(
        circleGeometry,
        alabasterMaterial,
        totalInstances
      );
      sculpturalMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

      const updateMeshTransforms = (t: number) => {
        if (!sculpturalMesh) return;
        for (let i = 0; i < totalInstances; i++) {
          const inst = instanceList[i];
          const curX = inst.initX + (inst.targetX - inst.initX) * t;
          const curY = inst.initY + (inst.targetY - inst.initY) * t;
          const curZ = inst.initZ + (inst.targetZ - inst.initZ) * t;
          const curScale = inst.scale * (0.3 + 0.7 * t);

          dummy.position.set(curX, curY, curZ);
          dummy.scale.set(curScale, curScale, curScale);
          dummy.updateMatrix();

          sculpturalMesh.setMatrixAt(i, dummy.matrix);
          color.setRGB(inst.r, inst.g, inst.b);
          sculpturalMesh.setColorAt(i, color);
        }
        sculpturalMesh.instanceMatrix.needsUpdate = true;
        if (sculpturalMesh.instanceColor) {
          sculpturalMesh.instanceColor.needsUpdate = true;
        }
      };

      // Initial position
      updateMeshTransforms(prefersReducedMotion ? 1.0 : 0.0);
      sculpturalMesh.position.set(0, 0.4, 0);
      portraitGroup.add(sculpturalMesh);

      // Entrance assembly choreography
      if (!prefersReducedMotion) {
        gsap.to(assemblyProgress, {
          value: 1.0,
          duration: 1.6,
          ease: "power3.out",
          delay: 0.1,
          onUpdate: () => {
            updateMeshTransforms(assemblyProgress.value);
          },
          onComplete: () => {
            isAssembled = true;
          },
        });
      }

      renderer.render(scene, camera);
    };

    // 4. Pointer & Touch Interaction for Parallax Depth & Interactive Repulsion Distortion
    const handleMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = -(event.clientY / window.innerHeight - 0.5) * 2;

      // Unproject screen coordinates into 3D world space at camera focal plane
      const vFOV = (camera.fov * Math.PI) / 180;
      const visibleHeight = 2 * Math.tan(vFOV / 2) * camera.position.z;
      const visibleWidth = visibleHeight * camera.aspect;

      mouseWorldX = (event.clientX / window.innerWidth - 0.5) * visibleWidth;
      mouseWorldY = -(event.clientY / window.innerHeight - 0.5) * visibleHeight;
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
      targetMouseX = 0;
      targetMouseY = 0;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!event.touches.length) return;
      const touch = event.touches[0];
      targetMouseX = (touch.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = -(touch.clientY / window.innerHeight - 0.5) * 2;

      const vFOV = (camera.fov * Math.PI) / 180;
      const visibleHeight = 2 * Math.tan(vFOV / 2) * camera.position.z;
      const visibleWidth = visibleHeight * camera.aspect;

      mouseWorldX = (touch.clientX / window.innerWidth - 0.5) * visibleWidth;
      mouseWorldY = -(touch.clientY / window.innerHeight - 0.5) * visibleHeight;
      isHovering = true;
    };

    const handleTouchEnd = () => {
      isHovering = false;
      targetMouseX = 0;
      targetMouseY = 0;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("touchstart", handleTouchMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    // 5. Scroll-Linked Transition (Sculpture smoothly recedes into background)
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: mount,
      start: "top top",
      end: "bottom top",
      scrub: 0.8,
      onUpdate: (self) => {
        const p = self.progress;
        masterGroup.position.z = -p * 11;
        masterGroup.position.y = -p * 1.6;
        if (alabasterMaterial) {
          alabasterMaterial.opacity = Math.max(0, 1.0 - p * 1.3);
        }
      },
    });

    // 6. Responsive Resize Handling
    const handleResize = () => {
      if (!mount) return;
      width = mount.clientWidth;
      height = mount.clientHeight;
      if (width === 0 || height === 0) return;

      camera.aspect = width / height;
      camera.position.z = width < 768 ? 16 : 13.5;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(mount);

    // 7. Render Loop with Inertial Mouse Smoothing & Elastic Particle Repulsion Physics
    const render = () => {
      if (!isVisible || !isTabActive) {
        isLoopRunning = false;
        return;
      }

      animationFrameId = requestAnimationFrame(render);

      mouseX += (targetMouseX - mouseX) * 0.045;
      mouseY += (targetMouseY - mouseY) * 0.045;

      portraitGroup.rotation.y = mouseX * 0.28;
      portraitGroup.rotation.x = -mouseY * 0.18;
      portraitGroup.position.x = mouseX * 0.4;
      portraitGroup.position.y = mouseY * 0.3 + 0.4;

      // Interactive Cursor Repulsion Physics (Kinetic Distortion Effect)
      if (isAssembled && sculpturalMesh && instanceList.length > 0) {
        const localCursorX = mouseWorldX - portraitGroup.position.x;
        const localCursorY = mouseWorldY - portraitGroup.position.y;
        const repulsionRadius = 2.4;
        const repulsionRadiusSq = repulsionRadius * repulsionRadius;
        let requiresUpdate = false;

        const count = instanceList.length;
        for (let i = 0; i < count; i++) {
          const inst = instanceList[i];
          const dx = inst.targetX - localCursorX;
          const dy = inst.targetY - localCursorY;
          const distSq = dx * dx + dy * dy;

          let targetPushX = 0;
          let targetPushY = 0;
          let targetPushZ = 0;

          if (isHovering && distSq < repulsionRadiusSq && distSq > 0.0001) {
            const dist = Math.sqrt(distSq);
            // Smooth quadratic repulsion curve
            const force = Math.pow(1.0 - dist / repulsionRadius, 2) * 1.4;
            targetPushX = (dx / dist) * force;
            targetPushY = (dy / dist) * force;
            targetPushZ = force * 1.1; // pops forward in 3D
            requiresUpdate = true;
          }

          // Elastic spring interpolation with damping back to rest coordinate
          offsetsX[i] += (targetPushX - offsetsX[i]) * 0.14;
          offsetsY[i] += (targetPushY - offsetsY[i]) * 0.14;
          offsetsZ[i] += (targetPushZ - offsetsZ[i]) * 0.14;

          if (
            Math.abs(offsetsX[i]) > 0.001 ||
            Math.abs(offsetsY[i]) > 0.001 ||
            Math.abs(offsetsZ[i]) > 0.001
          ) {
            requiresUpdate = true;
          }

          const curX = inst.targetX + offsetsX[i];
          const curY = inst.targetY + offsetsY[i];
          const curZ = inst.targetZ + offsetsZ[i];
          const dynamicScale = inst.scale * (1.0 + Math.min(0.5, offsetsZ[i] * 0.45));

          dummy.position.set(curX, curY, curZ);
          dummy.scale.set(dynamicScale, dynamicScale, dynamicScale);
          dummy.updateMatrix();
          sculpturalMesh.setMatrixAt(i, dummy.matrix);
        }

        if (requiresUpdate) {
          sculpturalMesh.instanceMatrix.needsUpdate = true;
        }
      }

      renderer.render(scene, camera);
    };

    if (isVisible && isTabActive && !isLoopRunning && !prefersReducedMotion) {
      isLoopRunning = true;
      animationFrameId = requestAnimationFrame(render);
    }

    // 8. IntersectionObserver to pause rendering when offscreen
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible;
        isVisible = entry.isIntersecting;
        if (isVisible && !wasVisible && isTabActive && !isLoopRunning && !prefersReducedMotion) {
          isLoopRunning = true;
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(render);
        } else if (!isVisible && isLoopRunning) {
          cancelAnimationFrame(animationFrameId);
          isLoopRunning = false;
        }
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(mount);

    // 9. Document Visibility Change Handling
    const handleVisibilityChange = () => {
      const wasActive = isTabActive;
      isTabActive = !document.hidden && document.visibilityState === "visible";
      if (isTabActive && !wasActive && isVisible && !isLoopRunning && !prefersReducedMotion) {
        isLoopRunning = true;
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(render);
      } else if (!isTabActive && isLoopRunning) {
        cancelAnimationFrame(animationFrameId);
        isLoopRunning = false;
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // 10. Strict Resource Cleanup & Disposal
    return () => {
      cancelAnimationFrame(animationFrameId);
      isLoopRunning = false;
      scrollTriggerInstance.kill();
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchstart", handleTouchMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (mount && renderer.domElement && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }

      if (circleGeometry) circleGeometry.dispose();
      if (alabasterMaterial) alabasterMaterial.dispose();
      if (sculpturalMesh) {
        sculpturalMesh.dispose();
      }
      gridHelper.dispose();
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
