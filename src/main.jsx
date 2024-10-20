import './index.css'
import {Render} from "./components/render.js";
import {loop} from "./components/loop.js";
import {Entity} from "./components/entity.js";

export const Layout = new Render();

export const Player = new Entity();

loop(Layout);

