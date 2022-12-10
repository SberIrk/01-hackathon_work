import {Module} from '../core/module'

export class ShapeModule extends Module {
    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    const rectangle = document.createElement('div');
    // document.body.prepend(rectangle);
    rectangle.classList = 'shape-rectangle';
    rectangle.style.width = `${getRandomNumber(50, 120)}px`;
    rectangle.style.height = `${getRandomNumber(50, 120)}px`;
    rectangle.style.background = `rgb(${getRandomNumber(1, 255)}, ${getRandomNumber(1, 255)}, ${getRandomNumber(1, 255)})`;
    rectangle.style.transform = `rotate(${getRandomNumber(0, 360)}deg)`;
    rectangle.style.position = 'absolute';
    rectangle.style.left = `${getRandomNumber(10, 90)}%`;
    rectangle.style.top = `${getRandomNumber(10, 90)}%`;
    
    const circle = document.createElement('div');
    // document.body.prepend(circle);
    circle.classList = 'shape-circle';
    circle.style.borderRadius = `${getRandomNumber(30, 90)}px`
    circle.style.width = `${getRandomNumber(50, 120)}px`;
    circle.style.height = `${getRandomNumber(50, 120)}px`;
    circle.style.background = `rgb(${getRandomNumber(1, 255)}, ${getRandomNumber(1, 255)}, ${getRandomNumber(1, 255)})`;
    circle.style.transform = `rotate(${getRandomNumber(0, 360)}deg)`;
    circle.style.position = 'absolute';
    circle.style.left = `${getRandomNumber(10, 90)}%`;
    circle.style.top = `${getRandomNumber(10, 90)}%`;
    
    const triangle = document.createElement('div');
    // document.body.prepend(triangle);
    triangle.classList = 'shape-triangle';
    triangle.style.maxWidth = `${getRandomNumber(50, 60)}px`
    triangle.style.borderBottom = `${getRandomNumber(50, 60)}px solid rgb(${getRandomNumber(1, 255)}, ${getRandomNumber(1, 255)}, ${getRandomNumber(1, 255)})`;
    triangle.style.borderLeft = `${getRandomNumber(0, 60)}px solid transparent`;
    triangle.style.borderRight = `${getRandomNumber(0, 60)}px solid transparent`;
    triangle.style.transform = `rotate(${getRandomNumber(0, 360)}deg)`;
    triangle.style.position = 'absolute';
    triangle.style.left = `${getRandomNumber(10, 90)}%`;
    triangle.style.top = `${getRandomNumber(10, 90)}%`;
    
    function createRandomShape() {
        switch(Math.floor(Math.random() * 3)) {
            case 0 :
                document.body.prepend(rectangle);
                break;
            case 1 :
                document.body.prepend(circle);
                break;
            case 2 :
                document.body.prepend(triangle);
                break;
        };
      };
    
      createRandomShape();
    
}