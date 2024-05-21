const solution=(n,t)=>{
    t=~~t; //시간 t를 정수로 정리
    return n*(2**(t));
}

// 더 좋은 풀이
// 비트 연산
// function solution(n, t) {
//   return n << t;
// }
