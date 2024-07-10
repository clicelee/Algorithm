const solution = (numbers, direction) => (direction === 'left' ? (numbers.push(numbers.shift()), numbers) : (numbers.unshift(numbers.pop()), numbers));
