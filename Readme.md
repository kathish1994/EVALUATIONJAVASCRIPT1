# JAVASCRIPT EVALUATION 1 #
# 1.Check Prime Number? #
## Program ##
```Javascript
function primeNo(num){
    var result="";
    var count=0;
    if(num==1){
        console.log("1 is neither prime number nor composite number")
    }
    if(num>1){
        for(var i=1;i<=num;i++){
            if(num%i==0)
            count++;
        }
        if(count==2){
            console.log("prime number");
        }
        else{
            console.log(" not a prime number");
        }}
        
    }

    primeNo(34);
```

## Output ##
```Javascript
not a prime number
```

# 2.What is difference between == and === with an example? #
* == is used for comparison between two variables irrespective of the datatype of variable.
* === is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.

## Example ##
```Javascript
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
```

## Output ##
```Javascript
equal
not equal
```
# 3. How would you reverse a string in JavaScript? #
## Program ##
```Javascript
function revStr(str){
    var rev="";
var len=str.length;
for(var i=len-1;i>=0;i--){

    rev+=str[i];
}
return rev;
}
console.log(revStr("Reverse"));
```

## Output ##
```Javascript
esreveR
```
# 4. How would you reverse words in a sentence? #
## Program ##
```Javascript
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
```

## Output ##
```Javascript
Good is God
```
# 5. How will you verify a word as a palindrome? #
## Program ##
```Javascript
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
```

## Output ##
```Javascript
given word is Palindrome
```

# 6. Write your own program to explain the difference between forEach and map? #
## Example: For Each ##
```Javascript
let names=["ram",
"kumar",
"raj",
"alex",
"gokul"
];
let result=function(item,index,object){
console.log(item);
}
names.forEach(result);
```

## Output ##
```Javascript
ram
kumar
raj
alex
gokul
```

## Example: Map ##
```Javascript
let a=[0,1,2,3,4,5,6];
let result=a.map(value=>value=value+1);
console.log(result);
console.log(a);
```

## Output ##
```Javascript
[
  1, 2, 3, 4,
  5, 6, 7
]
[
  0, 1, 2, 3,
  4, 5, 6
]
```


# 7. Generate a random number between 1 to 5? #
## Program ##
```Javascript
function myRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(myRandom(1,5));
```
## Output1 ##
```Javascript
1
```
## Output2 ##
```Javascript
4
```
## Output3 ##
```Javascript
2
```
# 8. Remove duplicate from the following array?([1,2,9,4,5,8,3,5,1,4,5]) #
## Program ##
```Javascript
let a=[1,2,9,4,5,8,3,5,1,4,5];
let b=a.filter(function(item,index){
    //console.log(index);
//console.log(item);
    return a.indexOf(item)===index;
})
console.log(b);
```
## Output ##
```Javascript
[
  1, 2, 9, 4,
  5, 8, 3
]
```

# 9. Write a program to calculate the sum of the first 10 natural numbers. #
## Program ##
```Javascript
function naturalNo(){
    let sum=0;
    for(i=0;i<=10;i++){
        sum+=i;
    }
    return sum;
}
console.log(naturalNo());
```

## Output ##
```Javascript
55
```
# 10. Write a program to print the sum of the even and odd numbers for a given number?(100) #
## Program: Odd ##
```Javascript
function odd(){
    let sum=0;
    for(let i=0;i<=100;i++){
        if(i%2==0){
            sum+=i;
        }
}
return sum;
}
console.log(odd());
```
## Output ##
```Javascript
2550
```

## Program: Even ##
```Javascript
function even(){
    let sum=0;
    for(let i=0;i<=100;i++){
        if(i%2!=0){
            sum+=i;
        }
}
return sum;
}
console.log(even());
```
## Output ##
```Javascript
2500
```
# 11. Write a program to merge two arrays? ([1,2,9,3,5,1,4,5], [11,54,70,40]) #
## Program ##
```Javascript
let a=[1,2,9,3,5,1,4,5];
let b=[11,54,70,40];
const c=[...a,...b];
console.log(c);
```
## Output ##
```Javascript
[
   1,  2, 9,  3,  5,
   1,  4, 5, 11, 54,
  70, 40
]
```
# 12. Remove duplicate from an array of an object by id and name? a. [{id: 1, name: ‘Stephen covey’ }, {id: 2, name: ‘Robin Sharma’ }, {id: 3, name:‘Tolstoy’}, {id: 3, name: ‘Tolstoy’}, {id: 5, name: ‘James clear’}] #
## Program ##
```Javascript
const arr = [{id: 1, name: "Stephen covey" }, {id: 2, name: "Robin Sharma" }, {id: 3, name:
    "Tolstoy"}, {id: 3, name: "Tolstoy"}, {id: 5, name: "James clear"}];
function removeDuplicates(array) {
    let uniq = {};
    return array.filter(obj => !uniq[obj.id] && (uniq[obj.id] = true))
}

console.log(removeDuplicates(arr));
```
## Output ##
```Javascript
[
  { id: 1, name: 'Stephen covey' },
  { id: 2, name: 'Robin Sharma' },
  { id: 3, name: 'Tolstoy' },
  { id: 5, name: 'James clear' }
]
```

# 13. Compare two objects, If all properties are equal return true or return false? a. ({id: 1, name: “edison”}, {id: 1, name: “edison”}) b. ({id: 1, name: “edison”}, {id: 2, name: “edison”}) #
## Program(a) ##
```Javascript

var obj1 = {
  id: 1,
  name: "edison",
};
var obj2 = {
  id: 1,
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
```
## Output ##
```Javascript
true
```
## Program(b) ##
```Javascript
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
```
## Output ##
```Javascript
false
```

# 14. Take a multidimensional array and flat the array?[1,4,2,3,[10,20,20], [100,500,700,600],[2000,1000]] #
## Program ##
```Javascript
let multiDinArr=[1,4,2,3,[10,20,20], [100,500,700,600],[2000,1000]];
console.log(multiDinArr.flat());
```
## Output ##
```Javascript
[
     1,   4,   2,    3,
    10,  20,  20,  100,
   500, 700, 600, 2000,
  1000
]
```
# 15. Group by the id of the following array of objects using the Array.reduce method?[{id: 1, name: ‘edison’ }, {id: 2, name: ‘Annand’ }, {id: 3, name: ‘Vasnath’}] #
## Program ##
```Javascript
function groupById(given){
     let name = given.reduce((arr,given)=> {
        arr.push(given.id);
        return arr;
     },[])
     console.log(name);
 }
groupById( [{id: 1, name: "edison" }, {id: 2, name: "Annand" }, {id: 3, name: "Vasnath"}]);
```
## Output ##
```Javascript
[ 1, 2, 3 ]
```
# 16. Write a program in Javascript to display the pattern like right angle triangle using anasterisk.The pattern like : #
## sample output ##
```Javascript
*
**
***
****
*****
```

## Program ##
```Javascript
function asteriskTriangle(){
    let a="";
    for(i=1;i<=5;i++){
        for(j=1;j<=i;j++){
            a+="*";
        }
        a+="\n";
    }
    return a;
}
console.log(asteriskTriangle());
```
## output ##
```Javascript
*
**
***
****
*****
```
# 17. Write a program in Javascript to make such a pattern like right angle triangle withnumber increased by 1 #
## sample output ##
```Javascript
1
2 3
4 5 6
7 8 9 10
```
## Progaram ##
```Javascript
function numberTriangle(){
    let a="";
    let count=1;
    for(i=1;i<=4;i++){
        for(j=1;j<=i;j++){
            a+=" "+count;
            count++;
        }
        a+="\n";
    }
    return a;
}
console.log(numberTriangle());
```
## output ##
```Javascript
1
2 3
4 5 6
7 8 9 10
```
# 18. Write a program in Javascript to make such a pattern like a pyramid with numbers increased by 1 #
## sample output ##
```Javascript
   1
  2 3
 4 5 6
7 8 9 10
```
## Program ##
```Javascript
function pyramid(){
    let a="";
    let count=1;
    for(i=1;i<=5;i++){
        for(j=1;j<=5-i;j++){
            a+=" ";
        }
        for(k=1;k<=i-1;k++){
            a+=" "+count;
            count++;
        }
        a+="\n";
    }
    return a;
}
console.log(pyramid());
```
## output ##
```Javascript
   1
  2 3
 4 5 6
7 8 9 10
```

# 19. Write a program in Javascript to display the pattern like a diamond #
## sample output ##
```Javascript
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```
## Program ##
```Javascript
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
```
## output ##
```Javascript
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```
# 20.Explain following terms a. console.log b. console.dir c. console.count d. console.table e. console.time/timeLog/timeEnd f. console.trace g. console.group/groupEnd h. console.assert #
## Console.log ##
* The console. log() is a function in JavaScript which is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user.

## Console.dir ##
* console.dir() is the way to see all the properties of a specified JavaScript object in console by which the developer can easily get the properties of the object.

## console.count ##
* The console.count() method logs the number of times that this particular call to count() has been called.

## console.table ##
* The console.table() method displays tabular data as a table.

## console.time ##
* The console.time() method starts a timer you can use to track how long an operation takes.

## console.timeLog ##
* The console.timeLog() method logs the current value of a timer that was previously started by calling console.time() to the console.

## console.timeEnd ##
* The console.timeEnd() stops a timer that was previously started by calling console.time().

## console.trace ##
* The console.trace() method outputs a stack trace to the Web console

## console.group/groupEnd ##
* The console.group() method creates a new inline group in the Web console log, causing any subsequent console messages to be indented by an additional level, until console.groupEnd() is called.

## console.assert ##
* The console.assert() method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.
