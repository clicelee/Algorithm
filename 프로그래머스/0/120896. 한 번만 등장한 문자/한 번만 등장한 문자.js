const solution=(s)=>{
    let map=new Map();
    for(let i of s){
        if(map.has(i)) map.set(i, map.get(i)+1);
        else map.set(i,1);
    }
    let oneAppearVlaue=[];
    for(let [key, value] of map.entries())
        if(value===1) oneAppearVlaue.push(key);
    return oneAppearVlaue.sort().join('');
}


/* better solution */
//와 어떻게 이런 멋진 코드를 생각 할 수가 있을까? 정규표현식과 고차함수에 익숙해지자
// new RegExp(c, 'g'): 이는 문자 c에 대한 전역 정규 표현식을 만듭니다. 예를 들어, c가 'a'라면, 정규 표현식 /a/g를 만듭니다.
// s.match(new RegExp(c, 'g')): 이는 문자열 s에서 문자 c와 일치하는 모든 부분을 찾습니다. 결과는 배열로 반환됩니다.
var solution=s=>[...s].filter(c=>s.match(new RegExp(c,'g')).length==1).sort().join('')
