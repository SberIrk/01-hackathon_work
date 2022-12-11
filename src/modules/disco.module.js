
// Над модулем работал Клопов Дмитрий

import {Module} from '@/core/module'
import {BackgroundModule} from "@/modules/background.module";
import {ShapeModule} from "@/modules/shape.module";
import {CustomMessage} from "@/modules/custom.message";
import {dataMessage} from "@/dataMessage.js";


export class DiscoModule extends Module {
    constructor(text){
        super(text,'Дискотека');
    }

    #play;
    #timeout = 500;
    #msg = new CustomMessage('1',dataMessage);
    #shape = new ShapeModule('2');
    #background = new BackgroundModule('3');
    #audio = new Audio("https://music-2021.ru/uploads/files/2021-11/1637828309_sektor-gaza-patriot.mp3");
    trigger(){
        const thisClass = this;
        thisClass.#msg.trigger();
        thisClass.#shape.trigger();
        thisClass.#background.trigger();
        thisClass.#audio.play();
        //Повторяем после окончания трека
        thisClass.#audio.addEventListener('ended', () => {
            if(thisClass.#play){
                thisClass.#audio.play();
            }
        });
        thisClass.#play = setInterval(()=>{
            thisClass.#shape.close();
            thisClass.#background.close();
            thisClass.#shape.trigger();
            thisClass.#background.trigger();
        },thisClass.#timeout);
    };

    close(){
        const thisClass = this;
        clearInterval(thisClass.#play);
        thisClass.#play = null;
        thisClass.#background.close();
        thisClass.#shape.close();
        thisClass.#msg.close();
        thisClass.#audio.pause();
    };
}