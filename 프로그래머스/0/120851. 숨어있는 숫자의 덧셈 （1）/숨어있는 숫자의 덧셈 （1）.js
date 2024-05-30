const solution=(str)=>{
    let answer=0;
    for(v of str) if(isNumber(Number(v))===true) answer+=Number(v);
    return answer;
}
const isNumber=(value)=>{
    return typeof value === 'number' && !isNaN(value);
}

//Test case
// console.log(isNumber('4'));
// console.log(isNumber('hello'));
