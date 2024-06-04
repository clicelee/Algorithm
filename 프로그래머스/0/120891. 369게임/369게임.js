//정규표현식!
const solution=(order)=> order.toString().replace(/[^369]/g, '').length;

//틀려서 고생한 풀이
//replace()은 배열이나 문자열에서 사용가능하다
//order은 숫자이기 때문에 꼭 toString()을 사용하여 문자열로 바꿔줘야 한다
// order.replace(/[^369]/g,'');
// return order.length;

/* better solution */
//matchAll 사용
//얘 또한 배열, 문자열에서 사용 가능하기에 toString 써주기
//answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
