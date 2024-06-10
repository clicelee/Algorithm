const solution=(my_string)=>{
    let numbers = my_string.match(/\d+/g)|| []; //['1','2','34'] 문자를 원소로 가지는 배열이다
    return (numbers.map(Number).reduce((a,b)=>a+b,0)); //.map(Number)로 변환, 이후 reduce 함수로 더하기
}

