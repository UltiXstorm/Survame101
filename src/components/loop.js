import {Layout, Player} from "../main.jsx";

export const loop = () => {
		requestAnimationFrame( loop );
		Player.rotate(0, 0.01);
		Layout.render();
}

