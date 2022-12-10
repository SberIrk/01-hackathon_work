import { Module } from "../core/module";

export class CustomMessage extends Module {
    constructor(type, text) {
        super(type, text)
    }
    trigger(dataMessage) {
        //запускает работу модуля. Внутри этого метода описана логика того, что будет происходить при клике
        showMessage(0, dataMessage.length)
        function showMessage(from, to) {
            let current = dataMessage[from].id

            function go() {
                removeMessage()
                let currentText = dataMessage.find(element => element.id === current).message
                let currentFrom = dataMessage.find(element => element.id === current).from
                // console.log(current)
                // console.log(currentText)
                renderMessage(current, currentText, currentFrom)
                //------------------------
                if (current === to) {
                    // clearInterval(timerId)
                    current = from
                }
                current++;
            }

            go()
            let timerId = setInterval(go, 5000)
        }
        function renderMessage(current, currentText, currentFrom) {
            document.body.insertAdjacentHTML(
                'beforeend',
                `<div class="custom-message-box" id="${current}"><span>${currentText}</span><b>${currentFrom}</b></div>`
            )
            const messageHTML = document.querySelector('.custom-message-box')
            messageHTML.classList.toggle('show')
        }
        function removeMessage() {
            const messageHTML = document.querySelector('.custom-message-box')
            if (messageHTML) {
                messageHTML.remove()
            }
        }
    }
}