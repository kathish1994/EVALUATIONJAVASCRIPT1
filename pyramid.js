"use strict";
function pyramidNumber() {
  let a = "";
  let count = 1;
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5 - i; j++) {
      a += " ";
    }
    for (let k = 1; k <= i - 1; k++) {
      a += " " + count;
      count++;
    }
    a += "\n";
  }
  return a;
}
console.log(pyramidNumber());
