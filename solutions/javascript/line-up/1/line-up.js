import { String } from "core-js";

export const format = (name, number) => {
  let stringnum = String(number);
   if (stringnum.endsWith("11") || stringnum.endsWith("12") || stringnum.endsWith("13")) {
    return `${name}, you are the ${number}th customer we serve today. Thank you!`;
  }else if (stringnum.endsWith("1")) {
    return `${name}, you are the ${number}st customer we serve today. Thank you!`;
  } else if (stringnum.endsWith("2")) {
    return `${name}, you are the ${number}nd customer we serve today. Thank you!`;
  } else if (stringnum.endsWith("3")) {
    return `${name}, you are the ${number}rd customer we serve today. Thank you!`;
  } else {
    return `${name}, you are the ${number}th customer we serve today. Thank you!`;
  }
};
