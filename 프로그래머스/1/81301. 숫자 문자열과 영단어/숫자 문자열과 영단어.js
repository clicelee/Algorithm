const solution = (s)=>{
    const result = s.replace(/one|two|three|four|five|six|seven|eight|nine|zero/g, (matched) => {
      switch (matched) {
        case 'one':
          return '1';
        case 'two':
          return '2';
        case 'three':
          return '3';
        case 'four':
          return '4';
        case 'five':
          return '5';
        case 'six':
          return '6';
        case 'seven':
          return '7';
        case 'eight':
          return '8';
        case 'nine':
          return '9';
        case 'zero':
          return '0';
        default:
          return matched;
      }
    });
    return Number(result);
}

/*better solution */
//인덱스와 영어 문자를 대응시키고 인덱스를 배열에 넣는 방식
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}
