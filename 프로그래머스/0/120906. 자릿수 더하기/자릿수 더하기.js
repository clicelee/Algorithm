const solution=(n)=>{
    return (n.toString().split('').map(Number)).reduce((a,b)=>a+b,0);
}


