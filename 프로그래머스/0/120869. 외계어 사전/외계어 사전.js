/* 제출 풀이*/
const solution=(spell, dic)=>{
    var sortedSpell=spell.slice().sort().join('');
    for (let word of dic){
        var sortedWord=word.split('').sort().join('');
        if (sortedSpell===sortedWord){
            console.log(word);
            return 1;
        }
    }
    return 2;
}


/* better solution */
function solution(p, d) {
    return d.some(s => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}



/* 시도했던 방법*/


// function solution(spell, dic) {
//     var answer = 0;
//     for(i of dic){
//         console.log(i);
//         console.log(spell.include(i.toString()));
//     }
//         return answer;
// }

//dic을 쪼개고 하나씩 검사를 한다

