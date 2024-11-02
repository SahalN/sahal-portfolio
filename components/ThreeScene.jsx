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
    const camera = new THREE.PerspectiveCamera(90, 1, 0.1, 1000); // Aspect ratio is 1 for a square canvas
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    const size = 640; // Set both width and height to 640px for a square canvas

    renderer.setSize(size, size); // Set renderer size to 640x640
    renderer.domElement.style.width = `${size}px`; // CSS width
    renderer.domElement.style.height = `${size}px`; // CSS height
    renderer.domElement.style.display = "block"; // Display block as per your example
    renderer.domElement.style.touchAction = "none"; // Disable touch actions if needed

    mountRef.current.appendChild(renderer.domElement);

    let model; // Declare model here so it can be accessed in animate

    // Load the 3D model using GLTFLoader
    const loader = new GLTFLoader();
    loader.load(
      "/gun.glb", // Corrected path to the .glb file
      (gltf) => {
        model = gltf.scene; // Assign to the outer-scope variable
        model.scale.set(0.5, 0.5, 0.5);
        // model.position.set(0, 0, 0);
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error("Error loading model", error);
      }
    );

    camera.position.x = 2; // Set camera position

    // Add lights to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white ambient light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Bright directional light
    directionalLight.position.set(2, 2, 5); // Position it slightly to the side and above
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
      if (model) {
        // model.rotation.x -= 0.01; // Rotate the model if it's loaded
        model.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Set the div container for the canvas with the desired width and height
  return <div ref={mountRef} style={{ width: "640px", height: "640px" }} />;
};

export default ThreeScene;
