const findDivisors = (n) => {    
    let answer = 0;    
    for (let i = 1; i <= Math.sqrt(n); i++) {        
        if (n % i === 0) {
            answer++;
            if (i !== n / i)
            answer++;        
        }    
    }    
    return answer;
}
function solution(left, right) {
    let answer=0;
    for(let i=left; i<=right; i++)
        findDivisors(i)%2===0?answer+=i:answer-=i;
    return answer;
}

/*better solution */
//제곱근이 정수면 약수의 개수가 홀수다
// function solution(left, right) {
//     var answer = 0;
//     for (let i = left; i <= right; i++) {
//         if (Number.isInteger(Math.sqrt(i))) {
//             answer -= i;
//         } else {
//             answer += i;
//         }
//     }
//     return answer;
// }
