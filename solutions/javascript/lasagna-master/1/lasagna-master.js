/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(times) {
  switch (times) {
    case 0:
      return "Lasagna is done.";

    case undefined:
      return "You forgot to set the timer.";

    case null:
      return "You forgot to set the timer.";

    default:
      return "Not done, please wait.";
  }
}


export function preparationTime(layers, timePreparationLayer = 2) {
    return layers.length*timePreparationLayer
}

export function quantities(quantlayer) {
    let noodles = 0
    let sauce = 0
    for (let key in quantlayer) {
        if (quantlayer[key] === "noodles") {
            noodles += 50 ;
        } else if (quantlayer[key] === "sauce") {
            sauce += 0.2;
        }
    }
    return {noodles: noodles, sauce: sauce}
}

export function addSecretIngredient(friendsList, myList) {
  const secretIngredient = friendsList[friendsList.length - 1];
  if (!myList.includes(secretIngredient)) {
    myList.push(secretIngredient);
  }
}

export function scaleRecipe(recipe, numPeople) {
  const scaled = {};

  for (let key in recipe) {
    scaled[key] = (recipe[key] / 2) * numPeople;
  }

  return scaled;
}