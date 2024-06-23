const solution = (n) => {
  const isComposite = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        count++;
      }
      if (count > 2) {
        return true;
      }
    }
    return false;
  }

  let compositeCount = 0;
  for (let i = 4; i <= n; i++) {
    if (isComposite(i)) {
      compositeCount++;
    }
  }
  return compositeCount;
}
