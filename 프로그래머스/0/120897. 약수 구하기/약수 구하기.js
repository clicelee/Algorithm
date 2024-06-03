//새로운 배열을 출력하려면: map을 사용한다
const solution=(n)=>{
    var answer=[1];
        for(let i=2; i<=n; i++){
            if(n%i===0) answer.push(i);
        }
    return answer;
}