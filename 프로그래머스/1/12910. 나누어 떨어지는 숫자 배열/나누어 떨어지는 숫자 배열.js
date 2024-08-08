const solution=(arr, divisor) => {
    let answer=arr.sort((a,b)=>a-b).filter(e=>e%divisor===0);
    return answer.length!=0?answer:[-1];
}