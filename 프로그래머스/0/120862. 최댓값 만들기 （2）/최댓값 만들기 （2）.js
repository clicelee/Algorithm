//크기 순으로 정렬한 뒤
//앞쪽 두개와 뒷쪽 뒤개를 각각 곱한 뒤, 더 큰 값을 반환
//그러면 부호를 신경쓰지 않아도 된다
const solution=(numbers)=>{
    n=numbers.sort((a,b)=>a-b);
    last=n.length-1;
    let tail=n[0]*n[1];
    let head=n[last]*n[last-1];
    return (head>tail)?head:tail;
}

// Math.max를 이용한 조금 더 간결한 풀이
// function solution(numbers) {
//     numbers.sort((a, b) => a - b);
//     return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
// }
