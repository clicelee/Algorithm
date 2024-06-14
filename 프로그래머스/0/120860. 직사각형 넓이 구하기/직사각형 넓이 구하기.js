const solution=(dots)=>Math.abs((dots.sort((a,b)=>a[0]-b[0])[3][1]-dots.sort((a,b)=>a[0]-b[0])[2][1])*(dots.sort((a,b)=>a[0]-b[0])[2][0]-dots.sort((a,b)=>a[0]-b[0])[0][0]))

//x좌표를 기준으로 정렬하였다, 그리고 두개씩 묶어 x좌표 y좌표 차이를 구한 다음 곱하고, 그 값에 절댓값 Math.abs 사용


/* other solution */
/*
function solution(dots) {
    let x = [], // x 좌표를 저장할 배열
        y = []; // y 좌표를 저장할 배열

    // dots 배열의 각 점을 반복하며 x와 y 좌표를 분리해서 저장
    for (let pos of dots) {
        x.push(pos[0]); // 현재 점의 x 좌표를 x 배열에 추가
        y.push(pos[1]); // 현재 점의 y 좌표를 y 배열에 추가
    }

    // x 배열의 최대값과 최소값의 차이를 계산하여 직사각형의 너비를 구함
    // y 배열의 최대값과 최소값의 차이를 계산하여 직사각형의 높이를 구함
    return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}
*/
