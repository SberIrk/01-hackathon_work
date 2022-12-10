import './styles.css'
import {ContextMenu} from "./menu.js"
import {ShapeModule} from "./modules/shape.module.js"

function init(){
    const menu = new ContextMenu('.menu');
    menu.add(new SoundModule('soundModule'));
    menu.add(new ShapeModule('shapeModule'));
}

init();
