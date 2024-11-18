function solution(n, arr1, arr2) {
    let answer=[];
    for (let i = 0; i < n; i++) {
        var binary1 = arr1[i].toString(2).padStart(n, '0'); // n 길이로 맞춤
        var binary2 = arr2[i].toString(2).padStart(n, '0'); // n 길이로 맞춤
        let line=[];
        for(let j=0; j<n; j++)
            if(binary1[j]==1||binary2[j]==1)
                line.push("#");
            else               
                line.push(" ")
        answer.push(line.join(''));
    }
            return answer;
}

