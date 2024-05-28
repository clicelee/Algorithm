//내림차순으로 배열한 뒤, index=0, index=1 끼리 곱하기
const solution=(numbers)=>{
    let descending=numbers.sort((a, b)=>(b-a));
    return descending[0]*descending[1];
}