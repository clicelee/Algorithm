const solution = (emergency) => {
    let answer = [ ];
    let draftArray = [...emergency];
    draftArray.sort((a,b) => b-a).unshift("🎲")
    console.log(draftArray);
    for(i of emergency) answer.push(draftArray.indexOf(i));
    return answer;
}