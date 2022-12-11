export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function randomColor(){
  const letters = '0123456789ABCDEF';
  let randomColor = '#';
  for(let i = 0; i < 6; i++) {
    randomColor += letters[Math.floor(Math.random() * letters.length)];
  };
  return randomColor;
}