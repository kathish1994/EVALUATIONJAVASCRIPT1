// Equality operator
var a;
function equal(a){
    if(a==7){
    return "equal";
}
return "not equal";
}
console.log(equal("7"));

// Strict equality operator
function strictEqual(b){
    if(b===7){
    return "equal";
}
return "not equal";
}
console.log(strictEqual("7"));