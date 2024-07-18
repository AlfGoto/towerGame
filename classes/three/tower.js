import * as THREE from '/node_modules/three/build/three.module.js';
import { scene } from "../../script.js";

export default class threeOrb {
    constructor(left, top, type, text = 10) {
        this.radius = types[type].radius;

        // Création de la sphère
        this.geometry = new THREE.SphereGeometry(this.radius, 32, 32);

        // Matériau initial avec couleur
        this.material = new THREE.MeshLambertMaterial({ color: types[type].color });

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

        // Positionnement de l'orb
        this.move(left, top);
    }

    move(left, top) {
        this.orb.position.x = (left - window.innerWidth / 2) * 2;
        this.orb.position.z = (top - window.innerHeight / 2) * 2;
    }

    updateText(newText) {
        this.updateTextTexture(newText);
        this.textTexture.needsUpdate = true; // Assurer la mise à jour de la texture
    }

    updateTextTexture(text) {
        // Effacer le canvas
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Dessiner le texte sur le canvas
        this.context.fillStyle = 'white';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = 'black';
        this.context.font = '48px Arial';
        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle';
        this.context.fillText(text, this.canvas.width / 2, this.canvas.height / 2);
    }

    remove() {
        scene.remove(this.orb);
        this.geometry.dispose();
        this.material.dispose();
        // Libérer la texture
        if (this.textTexture) {
            this.textTexture.dispose();
            this.textTexture = null;
        }
        this.orb = null;
    }
}