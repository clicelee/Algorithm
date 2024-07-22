const solution = (numbers) => {
    let sum = 45;
    for(i of numbers) sum -= i;
    return sum;
}