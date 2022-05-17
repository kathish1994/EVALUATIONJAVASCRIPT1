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