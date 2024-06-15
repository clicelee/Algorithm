const englishAndNumber={
    zero:0, one:1, two:2, three:3, four:4, five:5,
    six:6, seven:7, eight:8, nine:9
}
 
const solution=(numbers)=>{
    arrayedNumber=numbers.split(/(zero|one|two|three|four|five|six|seven|eight|nine)/).filter(Boolean);
    let answer=[];
    for(let i of arrayedNumber) answer.push(englishAndNumber[i]);
    return parseInt(answer.join(''));
}

//Replace를 이용해 바로 바꾸는 편이 더 효율적인듯
//참고: https://clice.tistory.com/entry/JS-영어가-싫어요-프로그래머스-120894
