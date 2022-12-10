import {Menu} from './core/menu.js'

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);

        // событие открытие меню
        document.body.addEventListener('contextmenu', event => {
            event.preventDefault();
            this.open(event);
        });

    }

    // текущий модуль
    #runModule;

    // функция открытие меню
    open(event) {
        console.log();
        this.#positionMenu(event);
        this.el.classList.add('open');
    }
    // функция закрытие меню
    close() {
       this.el.classList.remove('open');
    }
    // функция добавление модуля
    add(module) {
        this.el.innerHTML += module.toHTML();
        const thisClass = this;
        this.el.addEventListener('click',event=>{
            if(event.target.dataset.type === module.type){
                thisClass.close();
                if(thisClass.#runModule){
                    thisClass.#runModule.close();
                }
                thisClass.#runModule = module;
                module.trigger();
                }
            }
        );
    }

    // Функция определения позиции для открывания меню
    #positionMenu(event) {
        // Находи позиицию клика
        const clickCoords = this.#getPosition(event);
        const clickCoordsX = clickCoords.x;
        const clickCoordsY = clickCoords.y;
        // Размер меню
        const menuWidth = this.el.offsetWidth + 4;
        const menuHeight = this.el.offsetHeight + 4;
        // Размер браузерского окна
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        // Проверяи и изменяем позицию меню, что бы не ушла за край окна браузера
        if ( (windowWidth - clickCoordsX) < menuWidth ) {
            menu.style.left = windowWidth - menuWidth + "px";
        } else {
            menu.style.left = clickCoordsX + "px";
        }
        if ( (windowHeight - clickCoordsY) < menuHeight ) {
            menu.style.top = windowHeight - menuHeight + "px";
        } else {
            menu.style.top = clickCoordsY + "px";
        }

    }
    // Функция опредленния позиции клика на экране
    #getPosition(event) {
        let posx = 0;
        let posy = 0;
        if (event.pageX || event.pageY) {
            posx = event.pageX;
            posy = event.pageY;
        } else if (event.clientX || event.clientY) {
            posx = event.clientX + document.body.scrollLeft +
                document.documentElement.scrollLeft;
            posy = event.clientY + document.body.scrollTop +
                document.documentElement.scrollTop;
        }

        return {
            x: posx,
            y: posy
        }
    }

}