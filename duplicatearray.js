"use strict";
function removeDuplicateArray() {
  const a = [1, 2, 9, 4, 5, 8, 3, 5, 1, 4, 5];
  const b = a.filter(function (item, index) {
    //console.log(index);
    //console.log(item);
    return a.indexOf(item) === index;
  });
  console.log(b);
}
removeDuplicateArray();
