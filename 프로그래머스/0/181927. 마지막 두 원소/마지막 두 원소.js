const solution = (n) =>{
    let l=n.length;
    let answer=(n[l-1]>n[l-2])?(n[l-1]-n[l-2]):2*(n[l-1]);
    n.push(answer);
    return n;
}

// 더 좋은 풀이
/* function solution(num_list) {
    const [a, b] = [...num_list].reverse();
    return [...num_list, a > b ? (a-b):a*2];
}
*/
