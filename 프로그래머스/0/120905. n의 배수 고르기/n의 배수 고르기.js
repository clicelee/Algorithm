//새로운 배열 반환: map 사용하면 좋겠다
//그렇게 생각했지만, 모든 요소가 아니라 특정한 '조건'에 따라 반환하는 경우에는 `filter`를 사용하는 것이 더 적합하다.
// filter() 함수는 배열의 각 요소를 대상으로 주어진 함수(콜백 함수)를 호출하고, 그 결과가 true인 요소만 모아서 새로운 배열을 반환한다
const solution=(n, array)=> array.filter(num=>num%n===0);
// const newArray = array.filter(callback(element[, index[, array]])[, thisArg]);
