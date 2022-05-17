function revStr(str){
    var rev="";
var len=str.length;
for(var i=len-1;i>=0;i--){

    rev+=str[i];
}
if(str==rev){
    console.log("given word is Palindrome");
}else{
    console.log("given word is not Palindrome");
}return rev;
}

revStr("RACCAR");