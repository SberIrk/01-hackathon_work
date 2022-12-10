import './styles.css'
import {ContextMenu} from "./menu.js"
import {TestModule} from "./modules/test.module.js";
import {SoundModule} from "./modules/sound.module.js"

function init(){
    const menu = new ContextMenu('.menu');
    menu.add(new SoundModule('soundModule'));
    menu.add(new TestModule('playModule'));
}

init();
