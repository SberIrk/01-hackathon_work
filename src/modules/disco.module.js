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
    #audio = new Audio("https://cdn.mp3xa.me/Zx41PzxZA4FkJKXG-EYTog/1670744650/L29ubGluZS9tcDMvMjAyMC8xMC_QodC10LrRgtC-0YAg0JPQsNC30LAgLSDQn9Cw0YLRgNC40L7Rgi5tcDM");
    trigger(){
        const thisClass = this;
        thisClass.#msg.trigger();
        thisClass.#shape.trigger();
        thisClass.#background.trigger();
        thisClass.#audio.play();
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
        thisClass.#background.close();
        thisClass.#shape.close();
        thisClass.#msg.close();
        thisClass.#audio.pause();
    };
}