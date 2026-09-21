/// <reference path="./global.d.ts" />
//
// @ts-nocheck

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let pricePizza;

  if (pizza === 'Margherita') {
    pricePizza = 7;
  } else if (pizza === 'Caprese') {
    pricePizza = 9;
  } else if (pizza === 'Formaggio') {
    pricePizza = 10;
  }

  function totalExtras(extrasList) {
    if (extrasList.length === 0) {
      return 0;
    }

    const [firstExtra, ...remainingExtras] = extrasList;

    let priceExtra;
    if (firstExtra === 'ExtraSauce') {
      priceExtra = 1;
    } else if (firstExtra === 'ExtraToppings') {
      priceExtra = 2;
    }

    return priceExtra + totalExtras(remainingExtras);
  }

  return pricePizza + totalExtras(extras);
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let total = 0;

  for (let i = 0; i < pizzaOrders.length; i++) {
    const element = pizzaOrders[i];
    const { pizza, extras } = element;

    total += pizzaPrice(pizza, ...extras);
  }

  return total;
}
