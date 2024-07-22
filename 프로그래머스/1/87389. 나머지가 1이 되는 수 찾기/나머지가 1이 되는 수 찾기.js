const solution = (n) => {
    for(let i=2; i<=n-1; i++)
            if((n-1)%i===0) return i;   
}