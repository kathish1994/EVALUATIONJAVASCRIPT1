"use strict";
function palindromeString(str) {
  let rev = "";
  const len = str.length;
  for (let i = len - 1; i >= 0; i--) {
    rev += str[i];
  }
  // if (str.toLowerCase() === rev.toLowerCase()) {
  //   console.log("given word is Palindrome");
  // } else {
  //   console.log("given word is not Palindrome");
  // }
  // return rev;
  const value =
    str.toLowerCase() === rev.toLowerCase()
      ? "given word is Palindrome"
      : "given word is not Palindrome";
  return value;
}
console.log(palindromeString("Raccar"));
