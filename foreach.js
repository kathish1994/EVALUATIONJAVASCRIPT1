"use strict";
const names = ["ram", "kumar", "raj", "alex", "gokul"];
const result = function (item, index, object) {
  return index;
};
const variable = names.forEach(result);
console.log(variable);
