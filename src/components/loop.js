import {Layout, Player} from "../main.jsx";
import {KEYCODE} from "../utils/keyCode.constant.js";


document.addEventListener('keydown', function(event){
	console.log('Key', event.keyCode);
	switch (event.keyCode) {
		case KEYCODE.Z:
			Player.move(0, 1);
			break;
		case KEYCODE.Q:
			Player.move(-1, 0);
			break;
		case KEYCODE.S:
			Player.move(0, -1);
			break;
		case KEYCODE.D:
			Player.move(1, 0);
			break;
	}
} );

export const loop = () => {
	requestAnimationFrame( loop );
	
	Layout.render();
}

