import './styles.css'
import {ContextMenu} from "./menu.js"
import {ShapeModule} from "@/modules/shape.module";
import {SoundModule} from "@/modules/sound.module";
import {CustomMessage} from "@/modules/custom.message";
import {BackgroundModule} from "@/modules/background.module.js";
import {dataMessage} from "@/dataMessage.js";
import {DiscoModule} from "@/modules/disco.module.js";
import {TestWinModule} from "@/modules/testWin.module.js";


function init(){
    const menu = new ContextMenu('.menu');
    menu.add(new SoundModule('SoundModule'));
    menu.add(new ShapeModule('ShapeModule'));
    menu.add(new CustomMessage('CustomMessage',dataMessage));
    menu.add(new BackgroundModule('BackgroundModule'));
    menu.add(new DiscoModule('DiscoModule'));
    menu.add(new TestWinModule('TestWinModule'));

}

init();
