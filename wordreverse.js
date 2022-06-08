"use strict";
function wordReverse() {
  const str1 = "God is Good";
  const str2 = str1.split(" ");
  //console.log(str2);
  const reverseWord = [];
  const len = str2.length;
  //console.log(len);
  for (let i = len - 1; i >= 0; i--) {
    reverseWord.push(str2[i]);
  }
  return reverseWord;
}
console.log(wordReverse().join(" "));
