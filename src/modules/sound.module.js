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
     * @param {global} oscillator модуль осцилятора
     * @param {global} gainNode модуль усиления звука
     */
    #duration = 3000;
    #volume = 0.05;
    #type = ["sine", "square", "sawtooth", "triangle"]
    #frequency = [-20000,20000];
    #play;
    #oscillator;
    #gainNode;

    #callback(){
        this.#play = false;
    }


    constructor(type) {
        super(type,'Случайный звук');
        // callback Функция асинхронного возврата

    }



    close(){
        this.#play = false;
        this.#gainNode.disconnect();
        this.#oscillator.disconnect();
    }

    trigger() {
        this.#playSound();

    }

    #playSound(){
        this.#oscillator = this.#audioCtx.createOscillator();
        this.#gainNode = this.#audioCtx.createGain();

        this.#oscillator.connect(this.#gainNode);
        this.#gainNode.connect(this.#audioCtx.destination);

        this.#gainNode.gain.value = this.#volume;

        this.#oscillator.onended = this.#callback.bind(this);

        this.#oscillator.start(this.#audioCtx.currentTime);
        this.#play = true;
        this.#randomSound();
        this.#oscillator.stop(this.#audioCtx.currentTime + ((this.#duration || 500) / 1000));

    }
    // frequency Частота звука
    #randomSound(time = 0){
        if(!this.#play) {
            this.close();
            return;
        }
        setTimeout(()=>{
            this.#oscillator.frequency.value = random(this.#frequency[0],this.#frequency[1]);
            this.#oscillator.type =  this.#type[random(1,4)-1];
            this.#randomSound(2);
        },time);
    }

}