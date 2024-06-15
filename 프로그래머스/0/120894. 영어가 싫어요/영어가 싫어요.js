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
