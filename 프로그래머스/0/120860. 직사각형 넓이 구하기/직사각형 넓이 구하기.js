const solution=(dots)=>Math.abs((dots.sort((a,b)=>a[0]-b[0])[3][1]-dots.sort((a,b)=>a[0]-b[0])[2][1])*(dots.sort((a,b)=>a[0]-b[0])[2][0]-dots.sort((a,b)=>a[0]-b[0])[0][0]))

//x좌표를 기준으로 정렬하였다, 그리고 두개씩 묶어 x좌표 y좌표 차이를 구한 다음 곱하고, 그 값에 절댓값 Math.abs 사용
