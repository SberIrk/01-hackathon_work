import { Module } from "@/core/module";

export class CustomMessage extends Module {
    // При создании класса будем получать рандомные сообщение, а не при тригере...
    constructor(type, listMsg) {
        // Кнопку назавём тут и передадим родителю
        super(type, 'Случайное сообщение');
        this.listMsg = listMsg;
    }

    // Нужно индекс setInterval для закрытия
    #timerId;

    // Тоже перевёл функцию в класс, нужна для функции close
    #removeMessage = () => {
        const messageHTML = document.querySelector('.custom-message-box')
        if (messageHTML) {
            messageHTML.remove()
        }
    }

    // Нужно индекс setInterval для закрытия
    close(){
        this.#removeMessage();
        clearInterval(this.#timerId);
    }

    // Остальные функции перевёл в переменные, т.к. так как получаю ошибку при запуске
    // Ну лучше переделать их в методы класса...
    trigger() {

        const dataMessage = this.listMsg;
        const thisClass = this;
        const renderMessage =  function (current, currentText, currentFrom) {
            document.body.insertAdjacentHTML(
                'beforeend',
                `<div class="custom-message-box" id="${current}"><span>${currentText}</span><b>${currentFrom}</b></div>`
            )
            const messageHTML = document.querySelector('.custom-message-box')
            messageHTML.classList.toggle('show')
        }

        //запускает работу модуля. Внутри этого метода описана логика того, что будет происходить при клике
         const showMessage = function(from, to) {
            let current = dataMessage[from].id

            const go = function () {
                thisClass.#removeMessage();
                let currentText = dataMessage.find(element => element.id === current).message
                let currentFrom = dataMessage.find(element => element.id === current).from
                // console.log(current)
                // console.log(currentText)
                renderMessage(current, currentText, currentFrom)
                //------------------------
                if (current === to) {
                    // clearInterval(this.#timerId)
                    current = from
                }
                current++;
            }

            go();
            thisClass.#timerId = setInterval(go, 5000)
        }
        showMessage(0, dataMessage.length);
    }
}