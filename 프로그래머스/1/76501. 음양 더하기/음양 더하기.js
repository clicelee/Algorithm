function solution(absolutes, signs) {
    let answer=0;
    for(i in signs)
        (signs[i]===true)?(answer+=absolutes[i]):(answer-=absolutes[i]);
    return answer;
}