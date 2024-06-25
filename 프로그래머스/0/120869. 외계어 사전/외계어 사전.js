// function solution(spell, dic) {
//     var answer = 0;
//     for(i of dic){
//         console.log(i);
//         console.log(spell.includes(i.toString()));
//     }
//         return answer;
// }
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

