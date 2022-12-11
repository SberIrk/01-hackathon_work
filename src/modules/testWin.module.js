import {Module} from '@/core/module'
import {CreateWin} from "@/core/win.js"

export class TestWinModule extends Module {
    constructor(type) {
        super(type, 'Тестовое окно');
        this.win = new CreateWin('Тестовое окно');
        const p = document.createElement('p');
        p.textContent = 'Тестовое окноdfsdfsdfsdfsdfsdfs fdsgdfg';
        this.win.add(p.textContent);
    }

    trigger() {
        this.win.open();
    }

    close(){
        this.win.close();
    }
}