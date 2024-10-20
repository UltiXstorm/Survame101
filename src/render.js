import * as THREE from 'three';

export const Canvas = () => {
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
	
	const geometry = new THREE.BoxGeometry(1,1,1);
	const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	
	const cube = new THREE.Mesh(geometry, material);
	cube.castShadow = true; //default is false
	cube.receiveShadow = true; //default
	scene.add(cube);
	
	const light = new THREE.PointLight( 0xffffff, 1, 100 );
	light.position.set( 5, 4, 7 );
	light.castShadow = true; // default false
	scene.add( light );
	
	light.shadow.mapSize.width = 512; // default
	light.shadow.mapSize.height = 512; // default
	light.shadow.camera.near = 0.5; // default
	light.shadow.camera.far = 500; // default
	
	camera.position.set(5, 4, 7);
	camera.lookAt(0,0,0);
	
	const renderer  = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
	
	renderer.render(scene, camera);
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	document.body.appendChild( renderer.domElement );
	
	
	
	const animate = () => {
		requestAnimationFrame( animate );
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
		renderer.render( scene, camera );
	}
	
	animate();
}

