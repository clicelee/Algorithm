const solution = (nums) => {
    let numsSet = [...new Set(nums)];
    let kinds = numsSet.length;
    let N = nums.length / 2;
    return Math.min(kinds, N);
}

