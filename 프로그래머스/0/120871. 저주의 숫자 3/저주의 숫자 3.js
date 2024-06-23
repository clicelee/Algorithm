const isBadNumber=(n)=> n%3===0||n.toString().includes('3'); //저주의 숫자 판별기
const solution=(n)=>{
    let count=0;
    let number=0;
    while(count<n){
        number++;
        if(isBadNumber(number)===false) count++;
    }
    return number;
}

/* 시행착오 */
//1직전까지 3의 배수의 개수를 구하고 더한다
//2직전까지 3이 들어간 수를 구하고 더한다
//3직전까지 3의 배수이자 3이 들어간 수를 뺀다(1,2에서 겹치니까)
// function createIntegerArray(n){
//     let array=[];
//     let 개수=0;
//     for (let i=1; i <= n; i++){
//         if(i%3===0) { //3의 배수인지
//             let count=0;
//             개수++;
//             array.push(i);
//         }
//         if(n.split('').hasOwnProperty(3)){ //3이 들어가는지
//             array.push(i);
//             count++;
//         }
//         if(count==1)
//     }
    
//     return array;
// }
    
// const solution=(n)=>{
//     console.log("3의 배수의 개수: ", ~~(n/3));
//     createIntegerArray(n);
// }



/* other solution */
function solution(n) {
  return [...Array(n * 3)]
    .map((_, i) => i + 1)
    .filter((num) => num % 3 !== 0 && !num.toString().includes("3"))[n - 1];
}
