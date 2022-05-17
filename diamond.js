function pyramid(){
    let string = "";
for (let i = 1; i <= 5; i++) {
for (let j = 5; j > i; j--) {
    string += " ";
}
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
}
string += "\n";
}
for (let i = 1; i <= 4; i++) {
for (let j = 0; j < i; j++) {
    string += " ";
}
  for (let k = (5- i) * 2 - 1; k > 0; k--) {
    string += "*";
}
string += "\n";
}

    return string;
}

console.log(pyramid());