const solution = (n) => {
    let number = Array.from({ length: n }, (_, i) => i + 2); 
    let answer = number.filter(i => n % i === 0);
    for(let i = 0; i < answer.length-1; i++)
        for(let j = i+1; j < answer.length; j++)
            if(answer[j] % answer[i]==0){
                answer.splice(j, 1);
                j--;
            }
    return answer;
}

/* better solution */

// function solution(n) {
//     var list = [];

//     function isPrime(n){
//         if (n == 2)
//             return true;

//         for (let i = 2; i < n; i++){
//             if (n%i == 0){
//                 return false;
//             }
//         }
//         return true;
//     }

//     for (let i = 2; i <= n; i++){
//         if ((isPrime(i))&&(n%i == 0)){
//             list.push(i);
//             n = n/i;
//         }
//     }

//     return list;
// }
