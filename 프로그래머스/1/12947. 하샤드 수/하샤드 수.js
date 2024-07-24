const solution=(x)=> x%(String(x).split('').map(Number).reduce((a,b)=>a+b,0))===0?true:false
