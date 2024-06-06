const solution=(num,k)=>{
    let array=[...num.toString()];
    // console.log("array:",array);
    // console.log("i 값 k");
    for(i in array){
        // console.log(i,array[i],k);
        if(array[i]==k){
            return Number(i)+1; //중요, for in 문에서 i는 문자열이기 때문에 연산을 하려면 Number 함수로 숫자변환을 해줘야 한다
        }
    }
       return -1;
}
/* 기존 코드 */
// function solution(num, k) {
//     let array=[...num.toString()];
//     for(let i of array){
//         console.log(i);
//         // if(i===k) console.log(i+1);
//         // else
//             return -1;   
//     }
// }

