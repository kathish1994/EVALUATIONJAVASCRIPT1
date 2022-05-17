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