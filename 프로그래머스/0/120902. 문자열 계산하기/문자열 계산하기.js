const solution=(my_string) => {
    let a=my_string.split(' ')
    let answer=Number(a[0]);
    for(let i=1; i<a.length; i+=2)
        (a[i]=='+')?(answer+=Number(a[i+1])):(answer-=Number(a[i+1]));
    return answer;
}