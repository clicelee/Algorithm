const solution = (numlist, n) => {
    let arr = numlist.map(num => ({
        value: num,
        distance: Math.abs(num - n)
    }));
    arr.sort((a, b) => {
    if (a.distance === b.distance) {
      return b.value - a.value; // 거리가 같으면 더 큰 숫자가 앞에 오도록
    } else {
      return a.distance - b.distance; // 거리가 다르면 거리가 가까운 순으로
    }
    });
    return arr.map(item => item.value);
}