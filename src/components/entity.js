import * as THREE from 'three';
import {Layout} from "../main.jsx";


export class Entity {
	statistic = {
		speed: 0,
	}
	
	constructor() {
		const bodyGeometry = new THREE.BoxGeometry(1,1,1);
		const bodyMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff } );
		const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
		body.position.set(0, 0, 0);
		
		const canonGeometry = new THREE.BoxGeometry(0.5,0.4,0.4);
		const canonMaterial = new THREE.MeshPhongMaterial( { color: 0x4444ff } );
		const canon = new THREE.Mesh(canonGeometry, canonMaterial);
		canon.position.set(0.75, 0.2, 0);
		
		const aimGeometry = new THREE.BoxGeometry(0.3,0.1,0.1);
		const aimMaterial = new THREE.MeshPhongMaterial( { color: 0xff4444 } );
		const aim = new THREE.Mesh(aimGeometry, aimMaterial);
		aim.position.set(0.35, 0.55, 0);
		
		
		this.entity = new THREE.Group();
		this.entity.add(body);
		this.entity.add(canon);
		this.entity.add(aim);
		Layout.scene.add(this.entity);
	}
	
	move = (x=0, z=0) => {
		this.entity.position.x += x*this.statistic.speed;
		this.entity.position.z += z*this.statistic.speed;
	}
}

