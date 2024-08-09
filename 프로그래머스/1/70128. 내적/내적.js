const solution = (a, b) => Array.from({ length:a.length }, (_, index) => index).reduce((arr,cur)=> arr+a[cur]*b[cur],0)

/* 풀이 */
const solution = (a, b) => {
    let array = Array.from({ length:a.length }, (_, index) => index);
    return array.reduce((arr,cur)=> arr+a[cur]*b[cur],0)
}

/* better solution */
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}
