//구조분해할당
const solution=(my_string, num1, num2)=>{
    let array=[...my_string];
    [array[num1], array[num2]] =[array[num2], array[num1]];
    return array.join('');
}