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
// //인덱스와 영어 문자를 대응시키고 인덱스를 배열에 넣는 방식
// 코드에서 i를 넣는 이유는, numbers[i]에 해당하는 단어가 나오면 그걸 숫자로 바꾸기 위해서이다. i는 zero부터 nine까지의 단어에 대응하는 숫자를 의미한다.

// 즉, split으로 단어를 기준으로 나누고, join(i)로 그 단어 대신 숫자 i로 이어주는 것이다. 그래서 "one"은 1로, "two"는 2로 바꾸는 것이다.

// 쉽게 말해, i는 그 단어가 몇 번째 숫자인지를 나타내서, 그걸 숫자로 치환하는 역할을 하는 것이다.
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}
