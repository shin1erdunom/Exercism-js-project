//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, time) => {
  const yearEarth = 24 * 3600 * 365.25
  let age;
  switch (planet) {
    case 'mercury':
      age = time / (yearEarth * 0.2408467)
      break;

    case 'venus':
      age = time / (yearEarth * 0.61519726)
      break;

    case 'earth':
      age = time / (yearEarth * 1)
      break;

    case 'mars':
      age = time / (yearEarth * 1.8808158)
      break;

    case 'jupiter':
      age = time / (yearEarth * 11.862615)
      break;

    case 'saturn':
      age = time / (yearEarth * 29.447498)
      break;

    case 'uranus':
      age = time / (yearEarth * 84.016846)
      break;

    case 'neptune':
      age = time / (yearEarth * 164.79132)
      break;

    default:
      throw new Error('not a planet')
  }
  return Number(age.toFixed(2))
};
