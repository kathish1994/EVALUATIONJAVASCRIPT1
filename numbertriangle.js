"use strict";
function numberTriangle() {
  let a = "";
  let count = 1;
  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= i; j++) {
      a += " " + count;
      count++;
    }
    a += "\n";
  }
  return a;
}
console.log(numberTriangle());
