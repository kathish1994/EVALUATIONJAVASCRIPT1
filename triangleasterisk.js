"use strict";
function asteriskTriangle() {
  let a = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      a += "*";
    }
    a += "\n";
  }
  return a;
}
console.log(asteriskTriangle());
