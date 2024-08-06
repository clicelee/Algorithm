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