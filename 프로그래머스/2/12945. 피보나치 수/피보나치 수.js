const solution=(n) => {
    let a=0;
    let b=1;
    let c=0;
    let i=2;
    while(i!=n+1){
        c=a+b;
        a=b;
        b=c%1234567;
        i++;
        
    }
    return b;
}