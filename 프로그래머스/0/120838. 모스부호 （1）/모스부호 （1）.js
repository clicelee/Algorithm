const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    };

const solution=(letter)=>{
    arrayedLetter=letter.split(' ');
    let answer=[];
    for(let i of arrayedLetter) answer.push(morse[i]);
    return answer.join('');
}

/* better solution */
// map이나 push 를 이용하는 것 보다, reduce로 답에 계속 더해나가는 방식이 더 편리하다
/*
function solution(letter) {
    return letter.split(' ').reduce((prev, curr) => prev + morse[curr], '')
}
*/
