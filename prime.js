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
