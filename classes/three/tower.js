import * as THREE from '/node_modules/three/build/three.module.js';
import { scene } from "../../script.js";

export default class threeOrb {
    constructor(text = 10) {

        // Création de la sphère
        this.geometry = new THREE.SphereGeometry(100, 32, 32);

        // Matériau initial avec couleur
        this.material = new THREE.MeshLambertMaterial({ color: 'wheat' });

        // Création d'un canvas pour dessiner le texte
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = 256;
        this.canvas.height = 256;
        this.updateTextTexture(text); // Définir le texte initial

        // Création de la texture à partir du canvas
        this.textTexture = new THREE.CanvasTexture(this.canvas);
        this.material.map = this.textTexture;

        // Création de la sphère avec le matériau
        this.orb = new THREE.Mesh(this.geometry, this.material);
        this.orb.castShadow = true;
        this.orb.receiveShadow = true;
        scene.add(this.orb);

        this.orb.position.x = 0;
        this.orb.position.z = 0;
    }

    updateText(newText) {
        this.updateTextTexture(newText);
        this.textTexture.needsUpdate = true; 
    }

    updateTextTexture(text) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.context.fillStyle = 'white';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = 'black';
        this.context.font = '45px Arial';
        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle';
        this.context.fillText(text, this.canvas.width / 2, this.canvas.height / 2);
    }
    animate() {
        // this.orb.rotation.y += 0.01;
        this.orb.rotation.z += 0.01;
        // this.orb.rotation.x += 0.01;
    }
}