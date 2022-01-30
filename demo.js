function digui(n){
    /*if(n <= 2)
    return 1;
    return digui(n-1) + digui(n-2);*/
    return n <= 2 ? 1 : digui(n-1) + digui(n-2);
}
console.log(digui(10));