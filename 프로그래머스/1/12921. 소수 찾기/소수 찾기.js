const solution=(n)=>{ const isPrime = Array(n + 1).fill(true); for(let i=2; i<=Math.sqrt(n); i++) if(isPrime[i]) for (let j= i*i; j<=n; j+=i) isPrime[j]=false; return isPrime.filter(val => val).length-2;
};
