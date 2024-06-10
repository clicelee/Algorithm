const solution=(my_string)=>{
    let numbers = my_string.match(/\d+/g)|| []; //['1','2','34'] 문자를 원소로 가지는 배열이다
    return (numbers.map(Number).reduce((a,b)=>a+b,0)); //.map(Number)로 변환, 이후 reduce 함수로 더하기
}
//처음으로 런타임 에러가 났다
//숫자가 없는 경우 Null 을 반환하지 않도록 || [] 을 작성해주어야 한다
//이번 기회로 앞으로 런타임 에러가 나지 않게 조심하자

/* 시행착오들 */
    // array=[...my_string].filter(n=>((typeof n)=='number'));
    // array=[...my_string];
    // console.log(array);
    // newArray=array.map(Number);
    // return newArray.filter(\d);
