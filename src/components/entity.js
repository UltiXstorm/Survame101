import * as THREE from 'three';
import {Layout} from "../main.jsx";


export class Entity {
	constructor() {
		const bodyGeometry = new THREE.BoxGeometry(1,1,1);
		const bodyMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff } );
		const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
		body.position.set(0, 0, 0);
		
		const canonGeometry = new THREE.BoxGeometry(0.5,0.4,0.4);
		const canonMaterial = new THREE.MeshPhongMaterial( { color: 0x4444ff } );
		const canon = new THREE.Mesh(canonGeometry, canonMaterial);
		canon.position.set(0.75, 0.2, 0);
		
		
		this.entity = new THREE.Group();
		this.entity.add(canon);
		this.entity.add(body);
		Layout.scene.add(this.entity);
	}
	
	rotate = (x=0,y=0,z=0) => {
		this.entity.rotation.x += x;
		this.entity.rotation.y += y;
		this.entity.rotation.z += z;
	}
}

