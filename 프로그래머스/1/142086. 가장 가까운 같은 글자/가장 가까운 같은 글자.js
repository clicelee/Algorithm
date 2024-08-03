const solution=(s) => {
    let answer = [];
    for (let i = 0; i < s.length; i++) {
        let found = false;
        for (let j = i - 1; j >= 0; j--) {
            if (s[i] === s[j]) {
                answer.push(i - j);
                found = true;
                break;
            }
        }
        if (!found) answer.push(-1);
    }
    return answer;
}
