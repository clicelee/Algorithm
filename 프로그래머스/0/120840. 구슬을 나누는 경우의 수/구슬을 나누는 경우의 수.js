// const factorial=(n)=>{
//     let answer=1;
//     for(let i=1;i<=n;i++) answer*= i;
//     return answer;
// }

// function solution(balls, share) {
//     return factorial(balls)/factorial(balls-share)/factorial(share);
// }

const factorial = (n) => {
    let answer = 1;
    for (let i = 1; i <= n; i++) answer *= i;
    return answer;
}

function solution(balls, share) {
    if (share === 0 || balls === share) return 1;
    let result = 1;
    for (let i = 0; i < share; i++) {
        result *= (balls - i);
        result /= (i + 1);
    }
    return result;
}
