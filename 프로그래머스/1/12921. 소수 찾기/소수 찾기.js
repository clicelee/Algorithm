const solution=(n)=>{ const isPrime = Array(n + 1).fill(true); for(let i=2; i<=Math.sqrt(n); i++) if(isPrime[i]) for (let j= i*i; j<=n; j+=i) isPrime[j]=false; return isPrime.filter(val => val).length-2;
};

//기존에 runtime 에러 났던 코드. n의 최댓값이 1000000인데, for 문을 두번 돌려야 해서 runtime error가 났다

// function solution(n) {
//     let count=0;
//     for(let k=2; k<=n; k++)
//         if(isPrimeNumber(k)===1) count++;
//     return count;
// }

// function isPrimeNumber(m){
//     for(let i=2; i<=Math.sqrt(m); i++)
//         if(m%i===0) return 0  //소수가 아니면 0 반환
//     return 1; //소수이면 1 반환
// }
// runtime error
