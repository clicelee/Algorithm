const solution=(my_string)=> my_string.split('').map(Number).filter(n=>(isNaN(n)==false)).sort((a,b)=>a-b);

/* 한줄로 만들기 위한 시행착오들
function solution(my_string) {
    // let changeToNumber = my_string.match(/\d+/g) //12392
    let changeToArray=[...my_string]; //h i 1 2 3 9 2
    
    
    (changeToArray.map(Number)).sort((a,b)=>a-b); 
    return changeToArray.join('').split('');
}

*/
