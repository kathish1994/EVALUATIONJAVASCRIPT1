"use strict";
const arr = [
  { id: 1, name: "Stephen covey" },
  { id: 2, name: "Robin Sharma" },
  { id: 3, name: "Tolstoy" },
  { id: 3, name: "Tolstoy" },
  { id: 5, name: "James clear" },
];
function removeDuplicateObjects(array) {
  let uniq = {};
  const newArr = array.filter(
    (obj) =>
      !uniq[obj.id] &&
      (uniq[obj.id] = true) &&
      !uniq[obj.name] &&
      (uniq[obj.name] = true)
  );
  return newArr;
}

console.log(removeDuplicateObjects(arr));
