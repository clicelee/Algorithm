//구조분해할당
const solution=(my_string, num1, num2)=>{
    let array=[...my_string];
    [array[num1], array[num2]] =[array[num2], array[num1]];
    return array.join('');
}
/*Better solution */
//즉시 실행함수 IIFE를 활용하면 한줄로도 줄일 수 있다
// const solution = (my_string, num1, num2) => (s => ([s[num1], s[num2]] = [s[num2], s[num1]], s.join('')))([...my_string]);
