"use strict";
function sumOfEven() {
  let sum = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfEven());
