import { Module } from "@/core/module";
import { dataMessage } from '@/dataMessage'

// Над модулем работал Клопов Дмитрий

export class CustomMessage extends Module {
    #timerId
    constructor(type) {
        super(type, 'Случайное сообщение')
    }
    trigger() {
        this.#showMessages(dataMessage)
    }
    close() {
        this.removeMessage();
        clearInterval(this.#timerId);
    }
    #showMessages(array) {
        // При создании класса будем получать рандомные сообщение, а не при тригере...
        const thisClass = this;

        let currentId = array[0].id
        const go = () => {
            this.removeMessage()
            let currentText = array.find(element => element.id === currentId).message
            let currentFrom = array.find(element => element.id === currentId).from
            this.renderMessage(currentId, currentText, currentFrom)
            if (currentId === array.length) {
                // clearInterval(this.#timerId)
                currentId = 0
            }
            currentId++;
        }
        go()
        thisClass.#timerId = setInterval(go, 5000)
    }
    renderMessage(id, text, from) {
        document.body.insertAdjacentHTML(
            'beforeend',
            `<div class="custom-message-box" id="${id}"><span>${text}</span><b>${from}</b></div>`
        )
        this.messageHTML = document.querySelector('.custom-message-box')
        this.messageHTML.classList.toggle('show')
    }
    removeMessage() {
        if (this.messageHTML) {
            this.messageHTML.remove()
        }
    }
}