import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function Tree() {
  const trunkGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 8);
  const trunkMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
  const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
  trunk.position.set(0, 1, 0);

  const leavesGeometry = new THREE.SphereGeometry(1, 8, 6);
  const leavesMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22 });
  const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
  leaves.position.set(0, 3, 0);

  const tree = new THREE.Group();
  tree.add(trunk);
  tree.add(leaves);

  return tree;
}

function ForestPage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 5);
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();

    const trees = [];
    const numTreesX = 5;
    const numTreesZ = 5;
    const spacingX = 4;
    const spacingZ = 4;
    for (let i = 0; i < numTreesX; i++) {
      for (let j = 0; j < numTreesZ; j++) {
        const tree = Tree();
        tree.position.x = (i - (numTreesX - 1) / 2) * spacingX;
        tree.position.z = (j - (numTreesZ - 1) / 2) * spacingZ;
        scene.add(tree);
        trees.push(tree);
      }
    }

    const groundGeometry = new THREE.PlaneGeometry(20, 20);
    const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);

    const skyGeometry = new THREE.SphereGeometry(1000, 32, 32);
    const skyMaterial = new THREE.MeshBasicMaterial({ color: 0x87CEEB, side: THREE.BackSide });
    const sky = new THREE.Mesh(skyGeometry, skyMaterial);
    scene.add(sky);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 1;
    controls.maxDistance = 20;
    controls.maxPolarAngle = Math.PI / 2;

    const resizeRendererToDisplaySize = (renderer) => {
      const canvas = renderer.domElement;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height);
      }
      return needResize;
    };

    const animate = () => {
      requestAnimationFrame(animate);

      controls.update();

      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh' }} />
  );
}

export default ForestPage;