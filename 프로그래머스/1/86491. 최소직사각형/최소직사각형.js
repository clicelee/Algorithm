const solution=(sizes)=> {
    const findMax = (array, index) => {
        let max = array[0][index];
        for (let i = 1; i < array.length; i++) {
            if (array[i][index] > max) { 
                max = array[i][index];
            }
        }
        return max;
    };
    // 각 사이즈 배열에서 첫 번째 요소가 더 크면 위치를 바꾸는 로직
    let adjustedSizes = sizes.map(size => {
        return size[0] > size[1] ? [size[1], size[0]] : size;
    });
    // 가로와 세로의 최대값을 찾아서 출력
    let maxWidth = findMax(adjustedSizes, 0);
    let maxHeight = findMax(adjustedSizes, 1);
    // 최종 지갑 크기
    return maxWidth * maxHeight;
}


/* better solution */
function solution(sizes) {
    const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
    return hor * ver;
}
