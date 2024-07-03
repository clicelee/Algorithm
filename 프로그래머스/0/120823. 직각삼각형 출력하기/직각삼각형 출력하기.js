const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for(let i = 1; i <= Number(input[0]); i++){
        let star = "";
        for(let j = 1; j <= i; j++)
            star += "*";
        console.log(star);
            
    }
});

/* better solution */
// 1. solution함수로 따로 뺴준다
// 2. repeat 사용
// rl.on('line', function (line) {
//     input = line.split(' ');
// }).on('close', function () {
//     solution(Number(input[0])); //soulution 함수로 따로 뺸 부분
// });

// function solution(n) {
//     for(let i = 1; i < n + 1; i++) {
//         console.log('*'.repeat(i)); //repeat 메서드 사용
//     }
// }
