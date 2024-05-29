//매핑 사용
const solution=(rsp)=>{
    const winMap={
        '5':'2',
        '2':'0',
        '0':'5'
    };
    return [...rsp].map(char => winMap[char]).join('');
}

// 2->9
// 0->5
// 5->2
