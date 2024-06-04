//중복된 값을 허용하지 않는 Set 객체를 쓰면 좋겠다
const solution=(string)=>{
    var answer = new Set();
    for(i of string) answer.add(i);
    return [...answer].join('');
}
//Set은 객체이기 때문에 배열 메소드를 쓸 때는 스프레드 연산자로 (객체->배열) 변환을 해준다

/* better solution */
//바로 Set 객체 사용
//return [...new Set(my_string)].join('');
