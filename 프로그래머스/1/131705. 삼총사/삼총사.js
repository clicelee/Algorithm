const solution=(number) => {
    let answer = 0;
    for(let i=0; i<number.length -2; i++)
        for(let j=i+1; j<number.length-1; j++)
            for(let k=j+1; k<number.length; k++) //왜 여기를 let k=i+2로 하면 틀릴까..? -> 2번째 for문에서 j 값이 계속 증가하기 때문에, k는 j에 맞춰 움직여야 한다.
                if((number[i]+number[j]+number[k])===0) answer++;
    return answer;
}
