const solution=(goodGrade, count, apples) => {
    let answer=0;
    let sortedApple=apples.sort((a,b)=>b-a); //내림차순
    for(let i=0; i<=sortedApple.length-count; i=i+count){
        let set=sortedApple.slice(i,i+count);
        answer+=Math.min(...set)*count
    }
    return answer;
}