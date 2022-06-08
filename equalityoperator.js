"use strict";
// Equality operator
var a;
function equalityOperator(a) {
  if (a == 7) {
    return "equal";
  }
  return "not equal";
}
console.log(equalityOperator("7"));

// Strict equality operator
function strictEqualityOperator(b) {
  if (b === 7) {
    return "equal";
  }
  return "not equal";
}
console.log(strictEqualityOperator("7"));
