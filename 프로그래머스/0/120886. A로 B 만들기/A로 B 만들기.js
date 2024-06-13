//sort 한 다음 비교
//맨 처음에 If 문 써서 길이 다르면 바로 탈락하게 하면 좋을듯
const solution=(before, after)=>{
    if(before.length!=after.length) return 0;
    else if(JSON.stringify([...before].sort())===JSON.stringify([...after].sort())) return 1;
    else return 0;
}
