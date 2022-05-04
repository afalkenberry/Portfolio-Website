import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.124/build/three.module.js'; 

import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js';
const scene = new THREE.scene();

// create sphere
const sphere = new THREE.mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.MeshBasicMaterial({
  color: 0xFF0000
})
);

console.log(sphere)
