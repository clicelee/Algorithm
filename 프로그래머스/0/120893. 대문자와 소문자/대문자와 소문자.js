// (대문자인가)?yes-소문자로바꾸기:no-대문자로바꾸기
const solution=(str)=>{
    let answer=[];
    for (const i in str) answer[i]=isUpper(str[i])?str[i].toLowerCase():str[i].toUpperCase();
    return answer.join('');
}
const isUpper=(string)=> ((string===string.toUpperCase())?true:false)

//위 코드 성능이 매우 안 좋은것 같아 기분이 좋지 않음
// /* 더 좋은 풀이 */
//     var answer = '';
//     for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
//     return answer;
// /*
// 처음부터 answer을 문자열로 둔다. 그렇게 되면 return 할 때 join('')을 해주지 않아도 된다

// `for (let c of my_string)`
// >my_string 문자열의 각 문자를 하나씩 c 변수에 할당하며 반복한다
// >let c는 반복 변수로, 문자열 my_string의 각 문자를 가리킨다
// for of 문을 사용하게 되면 배열의 모든 요소를 순차적으로 둔다

// 그리고 answer +=c를 하여 문자열 자체에 그냥 바로 바로 추가해주는 것이 좋은것 같다.
// */
