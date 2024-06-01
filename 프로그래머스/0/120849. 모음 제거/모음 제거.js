//배열(문자열)을 순회하면서 특정 조건으로 판별해야 한다->filter
const solution=(my_string)=>{
    let newString=my_string.split('');
    return newString.filter(n=>(n!=='a')&&(n!=='e')&&(n!=='i')&&(n!=='o')&&(n!=='u')).join('');
}