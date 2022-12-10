import {Module} from '../core/module'

export class BackgroundModule extends Module {
    constructor(type) {
        super(type, 'Поменять цвет фона');
    }

    changeBodyBackgroundColor() {
        const letters = '0123456789ABCDEF';
        let randomColor = '#';
        for(let i = 0; i < 6; i++) {
            randomColor += letters[Math.floor(Math.random() * letters.length)];
        };
        document.body.style.backgroundColor = randomColor;
    }

    trigger() {
        this.changeBodyBackgroundColor();
    }

    close(){
        document.body.style.background = '';
    }
}