const solution = (polynomial) => {
    polynomial = polynomial.replace(/\s+/g, ''); // 공백을 없앤다
    let splitIt = polynomial.split('+'); // +를 기준으로 배열에 나눈다
    let coefficientX = 0;
    let coefficientNumber = 0;

    for (let i of splitIt) {
        if (i.includes('x')) {
            if (i === 'x') {
                coefficientX++;
            } else {
                coefficientX += Number(i.replace('x', ''));
            }
        } else {
            coefficientNumber += Number(i);
        }
    }

    if (coefficientNumber === 0) {
        if (coefficientX === 0) {
            return "0";
        } else {
            return (coefficientX + "x").replace(/\b1x\b/g, 'x');
        }
    } else {
        if (coefficientX === 0) {
            return String(coefficientNumber);
        } else {
            return (coefficientX + "x + " + coefficientNumber).replace(/\b1x\b/g, 'x');
        }
    }
}
console.log(solution("3x + 7 + x")); // "4x + 7"
console.log(solution("x + x + x")); // "3x"
console.log(solution("2x + 3 + 4x + 5")); // "6x + 8"
console.log(solution("10x + 20 + x")); // "11x + 20"
console.log(solution("0 + 3x + 0 + 4")); // "3x + 4"
console.log(solution("0 + 0 + 0")); // "0"
console.log(solution("x + 0")); // "x"
console.log(solution("0 + 2x")); // "2x"
console.log(solution("1x + 2")); // "1x + 2"