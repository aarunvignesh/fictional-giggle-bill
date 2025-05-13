function factorial(n){
    console.log(n);
    if(n==1){
        return n
    }
    return factorial(n-1) * n;
}

console.log(factorial(5));