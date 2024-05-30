// (대문자인가)?yes-소문자로바꾸기:no-대문자로바꾸기
const solution=(str)=>{
    let answer=[];
    for (const i in str) answer[i]=isUpper(str[i])?str[i].toLowerCase():str[i].toUpperCase();
    return answer.join('');
}
const isUpper=(string)=> ((string===string.toUpperCase())?true:false)

