import {createElement} from "@/utils";

// Модуль окна


export class CreateWin {
    title = ''
    constructor(title = '') {
        this.title = title;
        this.#init();
    }

    // Инцилизация окна
    #init() {
        // Общий фон за окном
        this.front = createElement('div',{className:'hystmodal',id:'myModal'});

        // Окно
        this.win = createElement('div',{className:'hystmodal__window'});

        // Заголовок окна
        this.header = createElement('div',{className:'hystmodal__window_header'});
        this.title = createElement('span',{textContent:this.title});
        this.buttonWinClose = createElement('button',{className:'hystmodal__close',id:'myModal',textContent:'X'});
        this.#eventClose();
        this.header.append(this.title,this.buttonWinClose);

        // Тела окна
        this.body = createElement('div',{className:'hystmodal__window_body'});

        this.front.append(this.win);
        this.win.append(this.header,this.body);

        document.body.append(this.front);
    }

    // Событие закрытие
    #eventClose(){
        const thisClass = this;
        this.buttonWinClose.addEventListener("click", () =>{
            thisClass.close();
        });
    }

    // открывание окна
    open() {
        this.front.style.display = 'flex';
    }

    // закрывание окна
    close() {
        this.front.style.display = 'none';
    }

    // Добавление элементов в тело окна...
    add(element){
        this.body.append(element);
    }
}