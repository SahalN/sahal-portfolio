/** @format */

"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeScene = () => {
  const mountRef = useRef(null); // Ref to the mount point for the Three.js scene

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Aspect ratio is 1 for a square canvas
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    const size = 640; // Set both width and height to 640px for a square canvas

    renderer.setSize(size, size); // Set renderer size to 640x640
    renderer.domElement.style.width = `${size}px`; // CSS width
    renderer.domElement.style.height = `${size}px`; // CSS height
    renderer.domElement.style.display = "block"; // Display block as per your example
    renderer.domElement.style.touchAction = "none"; // Disable touch actions if needed

    mountRef.current.appendChild(renderer.domElement);

    // Create a simple cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    // Optional: Scale down the cube if needed
    cube.scale.set(1, 1, 1); // Half the default size
    scene.add(cube);

    camera.position.z = 2; // Set camera position

    // Add OrbitControls for interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = true;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Update controls
      cube.rotation.x += 0.01; // Rotate the cube
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  // Set the div container for the canvas with the desired width and height
  return <div ref={mountRef} style={{ width: "640px", height: "640px" }} />;
};

export default ThreeScene;
