//1. 문자열을 배열로 바꾸어 저장한다
//2. 원소를 하나씩 읽으면서 더한다
//3. 만약 z가 나오면 직전 값을 뺀다
const solution=(s)=>{
    newArray=[...s.split(' ')]; //1
    let sum=0;
    for(i in newArray){ 
        if(newArray[i]==="Z") sum-=Number(newArray[i-1]); //3
        else sum+=Number(newArray[i]); //2
    }
    return sum;
}

/* better solution*/
//스택을 사용하게 되면, z가 등장할때마다 그냥 pop만 구현하면 되므로 조금 더 효율적인 메모리 사용이 가능하다
// const solution = (s) => {
//     const elements = s.split(' ');
//     let sum = 0;
//     const stack = [];
//     for (const element of elements) {
//         if (element === "Z") {
//             if (stack.length > 0) {
//                 sum -= stack.pop();
//             }
//         } else {
//             const num = Number(element);
//             sum += num;
//             stack.push(num);
//         }
//     }
//     return sum;
// }
