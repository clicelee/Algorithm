const solution=(s) => {
    let smallAnswer=[];
    let bigAnswer=[];
    for ( i of [...s]){
        if(i === i.toUpperCase()) bigAnswer.push(i);
        else smallAnswer.push(i);
    }
    return smallAnswer.sort((a, b) => b.localeCompare(a)).join('') + bigAnswer.sort((a, b) => b.localeCompare(a)).join('')
}

/* better solution */
// function solution(s) {
//   return s
//     .split("")
//     .sort()
//     .reverse()
//     .join("");
// }
