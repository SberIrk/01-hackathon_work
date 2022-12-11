import {Module} from '@/core/module'
import {CreateWin} from "@/core/win.js"
import {createElement} from "@/utils";
import {CustomMessage} from "@/modules/custom.message";

// Над модулем работал Клопов Дмитрий

export class MessengerModule extends Module {
    constructor(type) {
        const name = 'Отправить сообщение';
        super(type, name);
        this.win = new CreateWin(name);
        this.init();
    }

    init(){
       this.#createForm();
    }

    #createForm(){
        this.form = createElement('form');

        // ввод имени
        const div = createElement('div');
        const label = createElement('label',{textContent:'Имя:'});
        label.style.padding = '0px 5px 0px 0px';

        this.author = createElement('input', {type:'text', required: true, placeholder: 'Ваше имя'});
        const author = this.author;
        div.append(label,author);

        // ввод сообщения
        const div1 = createElement('div');
        const labelMsg = createElement('label',{textContent:'Отправить сообщение:'});
        this.messeng = createElement('textarea',{rows:10,
            cols:48,
            required: true,
            placeholder: 'Ваше сообщение',
            disabled: false,
        });
        const msg = this.messeng;
        msg.style.resize = 'none';
        const success = createElement('button',{textContent: "Отправить"});
        div1.append(labelMsg);

        // зарежаем форму
        this.form.append(div,div1,msg,success);
        this.win.add(this.form);

        const thisClass = this;
        // Обрабатываем событие отправить...
        this.form.addEventListener('submit',(event)=>{
            event.preventDefault();
            thisClass.messenger = new CustomMessage('CustomMessage_form');
            const id = Date.now();
            thisClass.messenger.renderMessage(`msg_${id}`,msg.value,author.value);
            this.win.close();
        })
    }


    trigger() {
        this.win.open();
    }

    close(){
        this.author.value = '';
        this.messeng.value = '';
        if(this.messenger){
            this.messenger.removeMessage();
        }
        this.win.close();
    }
}