//toLowerCase는 문자열에만 적용되고 배열에는 적용되지 않는다
const solution=(my_string)=>{
    let array=[...my_string.toLowerCase()] 
    return array.sort().join('');
}