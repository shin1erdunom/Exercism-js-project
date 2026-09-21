//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colors) => {
  let code = []
  if (colors.length<=2) {
    for (let i = 0; i < colors.length; i++) {
    switch (colors[i]) {
      case 'black':
        code.push(0)
        break;
    
      case 'brown':
        code.push(1)
        break;

      case 'red':
        code.push(2)
        break;

      case 'orange':
        code.push(3)
        break;

      case 'yellow':
        code.push(4)
        break;

      case 'green':
        code.push(5)
        break;

      case 'blue':
        code.push(6)
        break;

      case 'violet':
        code.push(7)
        break;

      case 'grey':
        code.push(8)
        break;

      case 'white':
        code.push(9)
        break;
  }}
  return Number(code.join(''))
  } else {
    for (let i = 0; i < 2; i++) {
    switch (colors[i]) {
      case 'black':
        code.push(0)
        break;
    
      case 'brown':
        code.push(1)
        break;

      case 'red':
        code.push(2)
        break;

      case 'orange':
        code.push(3)
        break;

      case 'yellow':
        code.push(4)
        break;

      case 'green':
        code.push(5)
        break;

      case 'blue':
        code.push(6)
        break;

      case 'violet':
        code.push(7)
        break;

      case 'grey':
        code.push(8)
        break;

      case 'white':
        code.push(9)
        break;
  }
  }
}return Number(code.join(''))

};
