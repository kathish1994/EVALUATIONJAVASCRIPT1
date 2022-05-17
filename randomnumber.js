function myRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(myRandom(1,5));