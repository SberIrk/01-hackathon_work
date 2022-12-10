import './styles.css'
import {ContextMenu} from "./menu.js"
import {ShapeModule} from "@/modules/shape.module";
import {SoundModule} from "@/modules/sound.module";
import {CustomMessage} from "@/modules/custom.message";
import {dataMessage} from "@/dataMessage";

function init(){
    const menu = new ContextMenu('.menu');
    menu.add(new SoundModule('soundModule'));
    menu.add(new ShapeModule('shapeModule'));
    menu.add(new CustomMessage('CustomMessage',dataMessage));
}

init();
