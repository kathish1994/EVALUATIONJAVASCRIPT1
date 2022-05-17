var obj1 = {
    id: 1,
    name: "edison",
};
var obj2 = {
    id: 2,
    name: "edison",
};
function compObj() {
    let a = Object.getOwnPropertyNames(obj1);
    let b = Object.getOwnPropertyNames(obj2);
    //console.log(a);
    //console.log(b);
    if (a.length != b.length) {
    return "false";
    }
    for (i = 0; i <= a.length; i++) {
    let prop1 = a[i];
    let prop=b[i];
    if (obj1[prop1] != obj2[prop]) {
        return "false";
    }
    }
    return "true";
}
console.log(compObj());
