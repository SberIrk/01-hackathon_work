import {Module} from '@/core/module'
import {randomColor} from "@/utils.js";

// Над модулем работала Перепелкина Мария

export class BackgroundModule extends Module {
    constructor(type) {
        super(type, 'Поменять цвет фона');
    }

    changeBodyBackgroundColor() {
        // Клопов: Перенес полезную функцию в Utilit, т.к. она также используеться в модуле shape.
        // const letters = '0123456789ABCDEF';
        // let randomColor = '#';
        // for(let i = 0; i < 6; i++) {
        //     randomColor += letters[Math.floor(Math.random() * letters.length)];
        // };

        document.body.style.backgroundColor = randomColor();
    }

    trigger() {
        this.changeBodyBackgroundColor();
    }

    close(){
        document.body.style.background = '';
    }
}