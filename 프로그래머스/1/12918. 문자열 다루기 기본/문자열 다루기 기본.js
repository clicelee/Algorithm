const solution = (s) => (s.length === 4 || s.length === 6) && [...s].every(c => !isNaN(c))
/*better solution */
//정규표현식 이용
// function solution(s){
//     var regex = /^\d{6}$|^\d{4}$/;

//   return regex.test(s);
// }
