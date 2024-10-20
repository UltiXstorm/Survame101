import * as THREE from 'three';

export const Canvas = () => {
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
	
	const geometry = new THREE.BoxGeometry(1,1,1);
	const material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
	
	const cube = new THREE.Mesh(geometry, material);
	scene.add(cube);
	
	const light = new THREE.PointLight( 0xeeeeee );
	scene.add( light );
	
	camera.position.set(0, 0, 2);
	light.position.set(0, 0, 2);
	camera.lookAt(0,0,0);
	
	const renderer  = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	
	renderer.render(scene, camera);
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	document.body.appendChild( renderer.domElement );
	
	const animate = () => {
		requestAnimationFrame( animate );
		cube.rotation.x += 0.005;
		cube.rotation.y += 0.01;
		renderer.render( scene, camera );
	}
	animate();
	
}

