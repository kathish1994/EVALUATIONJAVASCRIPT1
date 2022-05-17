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