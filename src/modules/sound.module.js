import {Module} from '@/core/module'
import {random} from "@/utils.js";

export class SoundModule extends Module {

    #audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext);
    /**
     * @param {number} duration Длительность воспроизведения звука
     * @param [{min number}, [max number] frequency Частота звука (используеться в randomSound)
     * @param {number} volume Громкость воспроизведения звука
     * @param {string} type Тип осцилятора
     * @param {function} callback Функция асинхронного возврата
     * @param {boolean} play Флаг процесса воспроизведения звука
     */
    #duration = 3000;
    #volume = 10
    #type = ["sine", "square", "sawtooth", "triangle"]
    #frequency = [-20000,20000];
    #play
    #callback(){
        this.#play = false;
    }


    constructor(type) {
        super(type,'Случайный звук');
        // callback Функция асинхронного возврата

    }
    trigger() {
        this.#playSound();
    }

    #playSound(){
        const oscillator = this.#audioCtx.createOscillator();
        const gainNode = this.#audioCtx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.#audioCtx.destination);

        gainNode.gain.value = this.#volume;

        oscillator.onended = this.#callback.bind(this);

        oscillator.start(this.#audioCtx.currentTime);
        this.#play = true;
        this.#randomSound(oscillator);
        oscillator.stop(this.#audioCtx.currentTime + ((this.#duration || 500) / 1000));

    }
    // frequency Частота звука
    #randomSound(oscillator,time = 0){
        if(!this.#play) {
            return;
        }
        const thisClass = this;
        setTimeout(()=>{
            oscillator.frequency.value = random(this.#frequency[0],this.#frequency[1]);
            oscillator.type =  this.#type[random(1,4)-1];
            thisClass.#randomSound(oscillator,200);
        },time);
    }

}