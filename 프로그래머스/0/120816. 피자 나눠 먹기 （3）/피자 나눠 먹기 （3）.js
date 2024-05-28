const solution=(slice, n)=> ~~(n/slice)+((~~n%slice)===0?0:1);

// 7조각-> 10명=> 2판
// 4조각-> 12명=> 3판
// (명수/조각)
// if(나머지 있음) 몫+1
// if(나머지 없음) 몫
// 몫+나머지===0?0:1

/* 더 좋은 풀이 
올림 사용 */
// const solution=(slice, n)=>Math.ceil(n / slice)
