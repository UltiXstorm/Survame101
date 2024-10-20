import * as THREE from 'three';
import {Layout} from "../main.jsx";


export class Entity {
	constructor() {
		const geometry = new THREE.BoxGeometry(1,1,1);
		const material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
		this.cube = new THREE.Mesh(geometry, material);
		Layout.scene.add(this.cube);
	}
	
	rotate = (x=0,y=0,z=0) => {
		this.cube.rotation.x += x;
		this.cube.rotation.y += y;
		this.cube.rotation.z += z;
	}
}

