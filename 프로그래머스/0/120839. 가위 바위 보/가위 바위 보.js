// //구조분해할당으로 [0,1,2순위] 순서를 나타내면 이기고 지고를 판단하기 편할것 같다
// const solution=(rsp)=>{
//     let rockWin, scissorWin, paperWin;
//     [rockWin, scissorWin, paperWin]=[5,0,2];
//     return (rsp);
// }

// // 2->9
// // 0->5
// // 5->2

//그냥 값이 대응되는게 있으면 매핑 하는게 좋습니다.
//제출 코드:
const solution=(rsp)=>{
    const winMap = {
        '2': '0', // 가위(2) -> 바위(0)
        '0': '5', // 바위(0) -> 보(5)
        '5': '2'  // 보(5) -> 가위(2)
    };
    return [...rsp].map(char => winMap[char]).join('');
}

//스프레드 연산자라서, 객체가 문자열 객체로 반환된다
// 그래서 객체 값을 적을때 대응되는 값을 '문자열'로 적어주었다
