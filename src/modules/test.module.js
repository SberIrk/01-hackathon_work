import {Module} from '@/core/module'

export class TestModule extends Module {
    constructor(text){
        super(text,text);
        this.type = text;
    }
    trigger(){
        const text = this.type;
        const func = () => alert(`trigger ${text}`);
        setTimeout(func,100); // что бы закрыть меню, а потом открыть аллерт...
    };
}