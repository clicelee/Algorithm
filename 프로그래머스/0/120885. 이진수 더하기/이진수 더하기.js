const solution=(bin1, bin2) => {
    return decimalToBinary(binaryToDecimal(bin1) + binaryToDecimal(bin2));
}
// 이진수를 십진수로 변환하는 함수
const binaryToDecimal = (binary) => {
    let decimal = 0;
    let length = binary.length;
    for (let i = 0; i < length; i++) {
        if (binary[length - 1 - i] === '1') {
            decimal += Math.pow(2, i);
        }
    }
    return decimal;
}

// 십진수를 이진수로 변환하는 함수
const decimalToBinary = (decimal) => {
    if (decimal === 0) return '0';
    let binary = '';
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary;
}
/* other solution */
function solution(bin1, bin2) {
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2)
}
// `parseInt(bin1,2) bin1을 2진수로 읽어들이고, 10진수로 변환하여라
