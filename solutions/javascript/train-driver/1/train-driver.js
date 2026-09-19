// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { time } from "console"

/**
 * Return each wagon's id in form of an array.
 *
 * @param {...number} ids
 * @returns {number[]} wagon ids
 */
export function getListOfWagons(...ids) {
  return ids
}

/**
 * Reorder the array of wagons by moving the first 2 wagons to the end of the array.
 *
 * @param {Iterable<number>} ids
 * @returns {number[]} reordered list of wagons
 */
export function fixListOfWagons(ids) {
  const wagon = [...ids]
  for (let i = 0; i < wagon.length; i++) {
    if (wagon[i] === 1) {
      const wagon1 = wagon.slice(i)
      const wagon2 = wagon.slice(0,i)
      return [...wagon1, ...wagon2]
    }
  }
}

/**
 * Fixes the array of wagons by inserting an array of wagons after the first element in eachWagonsID.
 *
 * @param {Iterable<number>} ids
 * @param {Iterable<number>} missingWagons
 * @returns {number[]} corrected list of wagons
 */
export function correctListOfWagons(ids, missingWagons) {
  const wagon = [...ids];
  const missing = [...missingWagons];
  const [first, ...rest] = wagon;
  return [first, ...missing, ...rest];
}

/**
 * Extend route information by adding another object
 *
 * @param {Record<string, string>} information
 * @param {Record<string, string>} additional
 * @returns {Record<string, string>} extended route information
 */
export function extendRouteInformation(information, additional) {
  return {...information, ...additional}
}

/**
 * Separate arrival time from the route information object
 *
 * @param {Record<string, string>} information
 * @returns {[string, Record<string, string>]} array with arrival time and object without arrival time
 */
export function separateTimeOfArrival(information) {
  let {timeOfArrival, ...routeInformation} = information
  const time = information.timeOfArrival
  return [time, routeInformation]

}
