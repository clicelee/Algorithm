const solution=(n)=>[...n.toString()].reverse().map(Number);

/* best solution */
function solution(n) {
    let arr = []; // arr 배열 초기화
    do {
        arr.push(n % 10); 
        // n의 마지막 자릿수를 arr에 추가 1234 -> 4
        n = Math.floor(n / 10); 
        // n의 마지막 자릿수를 제거 n/10: 123.4
        //Math.floor(): 123
    } while (n > 0);
    return arr;
]
