//새로운 배열을 출력하려면: map을 사용한다
//그렇지만 input이 배열이 아니기에 map을 사용하는건 적절하지 않아 보인다
//의문: 2부터 본인까지 차례로 검사하는 과정을 filter로 풀 수 있지 않을까?, 그렇지만 filter은 배열 메소드이기 때문에 안된다

//설명
const solution=(n)=>{
    var answer=[1]; //1은 모든 수의 약수니까 약수 배열을 1 포함해 만든다
        for(let i=2; i<=n; i++){ //1은 했으니까 2부터 고려한다. 2부터 본인까지 차례로 검사한다
            if(n%i===0) answer.push(i); //나눠진다면(나머지가 없다면, 나머지가 0이라면) 약수배열에 추가한다
        }
    return answer;
}


/* better solution */
// 배열 대신 객체 Set을 사용한다
// Set은 중복된 값을 허용하지 않는다
// 예를 들어 n=36, n=6인 경우, add(6)과 add(36/6)이 되어 6이 두 번 추가될 수 있지만 set에서는 중복을 허용하지 않기 때문에 자동으로 하나만 저장된다

// const solution=(n)=>{
//     let s = new Set();
//     for (let i = 1; i <= Math.sqrt(n); i++) {
//         if (n%i === 0) {
//             s.add(i);
//             s.add(n/i);
//         }
//     }
//     return [...s].sort((a,b)=>a-b);
// }
