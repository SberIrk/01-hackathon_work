import {Module} from '@/core/module'
import {random} from "@/utils";

export class ShapeModule extends Module {

    #el = document.createElement('div');

    constructor(type) {
        super(type,'Случайна фигура');
    }

    createRectangle(){
        this.#el.classList = 'shape-rectangle';
        this.#createRandomPosition();
        this.#createRandomSize();
    }

    createCircle(){
        this.#el.classList = 'shape-circle';
        this.#createRandomPosition();
        this.#createRandomSize();
        this.#el.style.borderRadius = `${random(30, 90)}px`
    }

    createTriangle(){
        this.#el.classList = 'shape-triangle';
        this.#createRandomPosition();
        this.#el.style.maxWidth = `${random(50, 60)}px`
        this.#el.style.borderBottom = `${random(50, 60)}px solid rgb(${random(1, 255)}, ${random(1, 255)}, ${random(1, 255)})`;
        this.#el.style.borderLeft = `${random(0, 60)}px solid transparent`;
        this.#el.style.borderRight = `${random(0, 60)}px solid transparent`;
    }

    #createRandomPosition(){
        this.#el.style.transform = `rotate(${random(0, 360)}deg)`;//
        this.#el.style.position = 'absolute';//
        this.#el.style.left = `${random(10, 90)}%`;//
        this.#el.style.top = `${random(10, 90)}%`; //
    }

    #createRandomSize(){
        this.#el.style.width = `${random(50, 120)}px`;
        this.#el.style.height = `${random(50, 120)}px`;
        this.#el.style.background = `rgb(${random(1, 255)}, ${random(1, 255)}, ${random(1, 255)})`;
    }

    #listShapes = [
        this.createRectangle.bind(this),
        this.createCircle.bind(this),
        this.createTriangle.bind(this)
    ]

    close(){
        this.#el.removeAttribute('style');
    }

    trigger() {
        const runShape = this.#listShapes[random(1,this.#listShapes.length) - 1];
        runShape();
        document.body.prepend(this.#el);
      };
}