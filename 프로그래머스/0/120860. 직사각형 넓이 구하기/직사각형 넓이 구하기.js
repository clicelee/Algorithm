const solution=(dots)=>Math.abs((dots.sort((a,b)=>a[0]-b[0])[3][1]-dots.sort((a,b)=>a[0]-b[0])[2][1])*(dots.sort((a,b)=>a[0]-b[0])[2][0]-dots.sort((a,b)=>a[0]-b[0])[0][0]))
