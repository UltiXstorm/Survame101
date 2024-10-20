import * as THREE from 'three';

export class Render {
	constructor() {
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
		this.light = new THREE.PointLight( 0xffffff );
		this.renderer = new THREE.WebGLRenderer();
		
		this.camera.position.set(0, 2, 2);
		this.light.position.set(0, 2, 2);
		this.camera.lookAt(0,0,0);
		
		this.scene.add( this.light );
		
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( this.renderer.domElement );
	}
	
	render = () => {
		this.renderer.render(this.scene, this.camera);
	}
}

