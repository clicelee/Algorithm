const solution = (emergency) => {
    let answer = [ ];
    let draftArray = [...emergency];
    draftArray.sort((a,b) => b-a).unshift("🎲")
    console.log(draftArray);
    for(i of emergency) answer.push(draftArray.indexOf(i));
    return answer;
}
//map 함수를 사용하면 더 간결하게 정리할 수 있다
emergency.map(item => sortedArray.indexOf(item) + 1);
