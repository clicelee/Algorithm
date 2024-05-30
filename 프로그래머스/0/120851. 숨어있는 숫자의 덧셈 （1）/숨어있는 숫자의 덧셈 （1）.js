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

//이전 문제: 프로그래머스/0/120893. 대문자와 소문자 에서 배운 for of 문을 사용해보았다
//for of 문에서 원소는 '문자'로 취급되기 때문에, 숫자로서 검증을 할 때는 Number()을 사용해야 한다.<< ⭐️ 이 부분에서 시간 많이 썼다


//다시 생각을 해보니     
//return [...my_string].reduce((acc,cur)=>Number(cur) ? +acc + +cur : acc, 0) 
//이 코드가 더 좋은것 같다
//스프레드 연산자, reduce 함수 체크
