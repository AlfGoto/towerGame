import * as THREE from '/node_modules/three/build/three.module.js';
import { scene } from "../../script.js";

const types = {
    basic: {
        size: 1,
        color: "#ff6969",
    },
    miniBoss: {
        color: 'lightskyblue',
        size: 1.25
    },
    boss: {
        color: 'lightgreen',
        size: 1.4
    },
    pinkboss: {
        color: 'pink',
        size: 1.6
    },
    yellowboss: {
        color: '#ffff12',
        size: 1.7
    },
    lightBlueboss: {
        color: 'lightblue',
        size: 1.8
    }
};

export default class threeFoe {
    constructor(left, top, type, text = "") {
        this.size = types[type].size * 50;
        this.geometry = new THREE.BoxGeometry(this.size, this.size, this.size);
        this.material = new THREE.MeshLambertMaterial({ color: types[type].color });

        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = 256;
        this.canvas.height = 256;
        this.updateTextTexture(text); 

        this.textTexture = new THREE.CanvasTexture(this.canvas);
        this.material.map = this.textTexture;

        this.cube = new THREE.Mesh(this.geometry, this.material);
        this.cube.castShadow = true;
        this.cube.receiveShadow = true;
        scene.add(this.cube);

        this.move(left, top);
    }

    move(left, top) {
        this.cube.position.x = (left - window.innerWidth / 2) * 2;
        this.cube.position.z = (top - window.innerHeight / 2) * 2;
    }

    updateText(newText) {
        this.updateTextTexture(newText);
        this.textTexture.needsUpdate = true; // Ensure texture update
    }

    updateTextTexture(text) {
        // Clear canvas
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw text on canvas
        this.context.fillStyle = 'white';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = 'black';
        this.context.font = '150px Arial';
        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle';
        this.context.fillText(text, this.canvas.width / 2, this.canvas.height / 2);
    }

    remove() {
        scene.remove(this.cube);
        this.geometry.dispose();
        this.material.dispose();
        // Dispose of the texture
        if (this.textTexture) {
            this.textTexture.dispose();
            this.textTexture = null;
        }
        this.cube = null;
    }
}
