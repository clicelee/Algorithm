function solution(absolutes, signs) {
    let answer=0;
    for(i in signs)
        (signs[i]===true)?(answer+=absolutes[i]):(answer-=absolutes[i]);
    return answer;
}
/* better solution */
//고차함수 reduce 사용하기
const solution =(absolutes, signs) => absolutes.reduce((sum, num, i) => sum + num * (signs[i] ? 1 : -1), 0);
