function revStr(str){
    var rev="";
var len=str.length;
for(var i=len-1;i>=0;i--){

    rev+=str[i];
}
return rev;
}
console.log(revStr("Reverse"));