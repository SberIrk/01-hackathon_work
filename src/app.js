import './styles.css'

import {ContextMenu} from "./menu.js"
import {ShapeModule} from "@/modules/shape.module.js";
import {SoundModule} from "@/modules/sound.module.js";
import {CustomMessage} from "@/modules/custom.message.js";
import {BackgroundModule} from "@/modules/background.module.js";
import {dataMessage} from "@/dataMessage.js";
import {DiscoModule} from "@/modules/disco.module.js";
import {MessengerModule} from "@/modules/messenger.module.js";
import {TimerModule} from "@/modules/timer.module.js";


function init() {
    const menu = new ContextMenu('.menu');
    menu.add(new SoundModule('soundModule'));
    menu.add(new ShapeModule('shapeModule'));
    menu.add(new CustomMessage('CustomMessage'));
    menu.add(new BackgroundModule('BackgroundModule'));
    menu.add(new DiscoModule('DiscoModule'));
    menu.add(new MessengerModule('MessengerModule'));
    menu.add(new TimerModule('TimerModule'));

}

init();
