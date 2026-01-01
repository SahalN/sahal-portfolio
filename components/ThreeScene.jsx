"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(90, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const setSize = () => {
      const containerWidth = mountRef.current.clientWidth;
      const containerHeight = containerWidth; 
      renderer.setSize(containerWidth, containerHeight);
      renderer.domElement.style.width = `${containerWidth}px`;
      renderer.domElement.style.height = `${containerHeight}px`;
      camera.aspect = containerWidth / containerHeight;
      camera.updateProjectionMatrix();
    };
    mountRef.current.appendChild(renderer.domElement);
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
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(2, 2, 5);
    scene.add(directionalLight);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = true;
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      if (model) model.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
    window.addEventListener("resize", setSize);
    return () => {
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
      window.removeEventListener("resize", setSize);
    };
  }, []);
  return <div ref={mountRef} className='w-full md:w-[640px] h-auto' />;
};

export default ThreeScene;
