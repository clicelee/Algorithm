const solution=(n)=>{
    let i,number=n;
    for(i=1; i<=10; i++){
        number=number/i;
        if(number<1) break;
    }
    return i-1;
}