const solution=(x)=> x%(String(x).split('').map(Number).reduce((a,b)=>a+b,0))===0?true:false
//삼항 연산자 안 쓰는 법... other solution by clice
const solution=(x)=> x%(String(x).split('').map(Number).reduce((a,b)=>a+b,0))===0
