"use strict";
function reverseString(str) {
  let rev = "";
  let len = str.length;
  for (let i = len - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}
console.log(reverseString("Reverse"));
