/* map 함수로 더 개선된 코드*/
const solution=(num_list, n)=>{
    return Array(num_list.length / n).fill().map((_, i) =>
        num_list.slice(i*n, (i+1)*n)
    );
}

/* 처음 작성했던 코드 */
// function solution(num_list, n) {
//     let result = [];
//     for(let i = 0; i < num_list.length/n; i++)
//         result[i]=num_list.slice(i*n,i*n+n);
//     return result;
// }
