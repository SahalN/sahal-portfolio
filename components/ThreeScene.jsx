"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    // Phones and tablets: pointer is a finger, not a mouse.
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(90, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    // Retina phones report a device pixel ratio of 3, which means nine times
    // the pixels to shade for a decorative moon. Two is already sharp.
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const setSize = () => {
      const width = mount.clientWidth;
      if (!width) return;
      renderer.setSize(width, width);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };

    mount.appendChild(renderer.domElement);
    setSize();

    const loader = new GLTFLoader();
    let model;

    loader.load(
      "/moon.glb",
      (gltf) => {
        model = gltf.scene;
        model.scale.set(0.5, 0.5, 0.5);
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error("Error loading model", error);
      }
    );

    camera.position.x = 2;
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(2, 2, 5);
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = true;

    // OrbitControls sets touch-action:none on the canvas ("disable touch
    // scroll" in its own source), which would make a full-width moon swallow
    // page scrolling entirely. "pan-y" splits the gestures instead: the browser
    // keeps vertical swipes for scrolling, and every horizontal drag reaches
    // the controls, so the moon spins on the axis people actually reach for.
    if (isTouch) {
      renderer.domElement.style.touchAction = "pan-y";
      controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.ROTATE };
      // Pinch-zoom and panning would fight the browser's own gestures.
      controls.enableZoom = false;
      controls.enablePan = false;
    }

    let frame = null;

    const animate = () => {
      frame = requestAnimationFrame(animate);
      if (controls.enabled) controls.update();
      if (model && !prefersReducedMotion) model.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    const start = () => {
      if (frame === null) frame = requestAnimationFrame(animate);
    };

    const stop = () => {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
    };

    // Nothing is drawn while the moon is scrolled away or the tab is in the
    // background. On a phone that is most of the visit, and it is battery the
    // page has no business spending.
    let onScreen = true;
    const sync = () => {
      if (onScreen && document.visibilityState === "visible") start();
      else stop();
    };

    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      sync();
    });
    observer.observe(mount);

    document.addEventListener("visibilitychange", sync);
    window.addEventListener("resize", setSize);
    sync();

    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      window.removeEventListener("resize", setSize);
      controls.dispose();
      scene.traverse((object) => {
        object.geometry?.dispose();
        const material = object.material;
        if (Array.isArray(material)) material.forEach((m) => m.dispose());
        else material?.dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className='w-full md:w-[640px] h-auto' />;
};

export default ThreeScene;
