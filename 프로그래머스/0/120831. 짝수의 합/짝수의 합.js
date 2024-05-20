const solution=(n)=>{
    n=(Math.floor(n/2))*2;
    var sum=0;
    for(i=0; i<=n; i++) sum+=i;
    return (sum+n/2)/2;
    
}