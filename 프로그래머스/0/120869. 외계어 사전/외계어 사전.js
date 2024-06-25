function solution(spell, dic) {
    var answer = 0;
    for(i of dic){
        console.log(i);
        console.log(spell.include(i.toString()));
    }
        return answer;
}

//dic을 쪼개고 하나씩 검사를 한다

