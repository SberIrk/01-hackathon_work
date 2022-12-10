import './styles.css'
import { ContextMenu } from "./menu.js"
import { ShapeModule } from "@/modules/shape.module";
import { SoundModule } from "@/modules/sound.module";
import { CustomMessage } from "@/modules/custom.message";
import { BackgroundModule } from "@/modules/background.module.js";

function init() {
    const menu = new ContextMenu('.menu');
    menu.add(new SoundModule('soundModule'));
    menu.add(new ShapeModule('shapeModule'));
    menu.add(new CustomMessage('CustomMessage'));
    menu.add(new BackgroundModule('BackgroundModule'));
}

init();
