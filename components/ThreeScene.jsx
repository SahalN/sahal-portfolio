/** @format */

"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; // Import GLTFLoader

const ThreeScene = () => {
  const mountRef = useRef(null); // Ref to the mount point for the Three.js scene

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(90, 1, 0.1, 1000); // Aspect ratio will be updated later
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    // Function to set dynamic size based on viewport
    const setSize = () => {
      const containerWidth = mountRef.current.clientWidth;
      const containerHeight = containerWidth; // Set to square based on width for a responsive square canvas

      // Update renderer and camera settings
      renderer.setSize(containerWidth, containerHeight);
      renderer.domElement.style.width = `${containerWidth}px`;
      renderer.domElement.style.height = `${containerHeight}px`;

      // Update camera aspect ratio and projection matrix
      camera.aspect = containerWidth / containerHeight;
      camera.updateProjectionMatrix();
    };

    // Append renderer to DOM
    mountRef.current.appendChild(renderer.domElement);
    setSize(); // Set initial size

    // Load the 3D model using GLTFLoader
    const loader = new GLTFLoader();
    let model; // Declare model here so it can be accessed in animate

    loader.load(
      "/gun.glb", // Path to the .glb file
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

    camera.position.x = 2; // Set initial camera position

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(2, 2, 5);
    scene.add(directionalLight);

    // Add OrbitControls for interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = true;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      if (model) model.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize for responsive design
    window.addEventListener("resize", setSize);

    // Cleanup on unmount
    return () => {
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
      window.removeEventListener("resize", setSize);
    };
  }, []);

  // Return div container for the Three.js canvas, which adapts to screen width
  return <div ref={mountRef} className='w-full md:w-[640px] h-auto' />;
};

export default ThreeScene;
