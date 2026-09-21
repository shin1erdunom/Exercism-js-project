//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (adn) => {
  let Adn = adn.split('');
  let Arn = []
  for (let i = 0; i < Adn.length; i++) {
    const element = Adn[i];
    switch (element) {
      case 'A':
        Arn.push('U')
        break;
    
      case 'G':
      Arn.push('C')
        break;

      case 'C':
      Arn.push('G')
        break;

      case 'T':
      Arn.push('A')
        break;
    }
  }
  return Arn.join('')
};

