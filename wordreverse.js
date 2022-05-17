function reverse(){
let str1="God is Good";
let str2=str1.split(" ");
//console.log(str2);
let reverseWord=[];
len=str2.length;
//console.log(len);
for(let i=len-1;i>=0;i--){
    reverseWord.push(str2[i]);
}
return reverseWord;
}reverse();
console.log(reverse().join(" "));