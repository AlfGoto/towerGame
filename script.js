// Import necessary modules
import Jeu from "./classes/game.js";
import Debug from './classes/tools/debug.js';
import * as THREE from '/node_modules/three/build/three.module.js';

// Initialize Debug object
let debugO = new Debug();

// Create the scene
export const scene = new THREE.Scene();

let game = new Jeu();
export default game;

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
renderer.setClearColor(0xffffff, 0);
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight( 0xffffff, 1 );
light.position.set( 0, 1, 0 ); 
light.castShadow = true;
scene.add( light );

//Set up shadow properties for the light
light.shadow.mapSize.width = 2000; 
light.shadow.mapSize.height = 500; 
light.shadow.camera.near = 10;
light.shadow.camera.far = 500; 

// const geometry = new THREE.BoxGeometry(100, 100, 100);
// const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);

// scene.add(cube);

// camera.position.z = 5;
camera.position.y = 1000;
camera.lookAt( 0, 0, 0 );

export function animate() {
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    renderer.render(scene, camera);
    game.Tower.animate()
}

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

animate();


