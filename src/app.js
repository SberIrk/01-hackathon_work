import './styles.css'
import {ContextMenu} from "./menu.js"
import {TestModule} from "./modules/test.module.js";


function init(){
    const menu = new ContextMenu('.menu');
    for (let i = 1; i < 6; i++){
        console.log(i);
        menu.add(new TestModule('test'+i));
    }
}

init();
