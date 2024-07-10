const solution = (numbers, direction) => (direction === 'left' ? (numbers.push(numbers.shift()), numbers) : (numbers.unshift(numbers.pop()), numbers));
//단순히 한 줄로 억지로 압축시키는 것이 아니라,적당한 메소드를 찾는 것이 중요하다
var solution=(n,d)=>d[0]=='r'?[n[n.length-1],...n.slice(0,-1)]:[...n.slice(1),n[0]] 
// 화살표 함수 선언

// var solution = (n, d) => ...: n과 d를 매개변수로 받는 화살표 함수를 정의합니다.
// n: 정수 배열
// d: 문자열로서 'right' 또는 'left'의 방향을 나타냅니다.
// 삼항 연산자

// d[0] == 'r' ? ... : ...: d의 첫 번째 문자가 'r'인지 검사합니다. 'right'인 경우 true, 'left'인 경우 false가 됩니다.
// 오른쪽으로 한 칸 회전 (d[0] == 'r'일 때)

// [n[n.length - 1], ...n.slice(0, -1)]
// n[n.length - 1]: 배열 n의 마지막 요소를 가져옵니다.
// n.slice(0, -1): 배열 n에서 마지막 요소를 제외한 나머지 요소들을 가져옵니다.
// [n[n.length - 1], ...n.slice(0, -1)]: 마지막 요소를 배열의 첫 번째 위치에 놓고, 나머지 요소들을 이어붙여 새 배열을 만듭니다.
// 왼쪽으로 한 칸 회전 (d[0] != 'r'일 때)

// [...n.slice(1), n[0]]
// n.slice(1): 배열 n의 첫 번째 요소를 제외한 나머지 요소들을 가져옵니다.
// n[0]: 배열 n의 첫 번째 요소를 가져옵니다.
// [...n.slice(1), n[0]]: 첫 번째 요소를 배열의 마지막 위치에 놓고, 나머지 요소들을 이어붙여 새 배열을 만듭니다.
