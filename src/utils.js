
// Случайное число
export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

// Случайный цвет
export function randomColor(){
  const letters = '0123456789ABCDEF';
  let randomColor = '#';
  for(let i = 0; i < 6; i++) {
    randomColor += letters[Math.floor(Math.random() * letters.length)];
  };
  return randomColor;
}

// Создать элемент с параметрами, params обьект, где ключ параметр и value значения параметра
export function createElement(tag,params = {}){
  const element = document.createElement(tag);
  Object.entries(params).forEach(([param,value]) => element[param] = value);
  return element;
}