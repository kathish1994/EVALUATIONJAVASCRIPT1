const arr = [{id: 1, name: "Stephen covey" }, {id: 2, name: "Robin Sharma" }, {id: 3, name:
    "Tolstoy"}, {id: 3, name: "Tolstoy"}, {id: 5, name: "James clear"}];
function removeDuplicates(array) {
    let uniq = {};
    return array.filter(obj => !uniq[obj.id] && (uniq[obj.id] = true))
}

console.log(removeDuplicates(arr));
