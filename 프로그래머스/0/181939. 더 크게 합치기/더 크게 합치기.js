const solution=(a, b) => Math.max(Number([...(a+''+b)].join('')),Number([...(b+''+a)].join('')))

/*기존 코드*/
// const solution=(a, b) => Number([...(a+''+b)].join(''))>Number([...(b+''+a)].join(''))?(Number([...(a+''+b)].join(''))):Number([...(b+''+a)].join(''));

/* better solution */
//Math.max와 템플릿 리터럴을 이용하면 된다.
function solution(a, b) {
    return Math.max(Number(${a}${b}), Number(${b}${a}))
}
