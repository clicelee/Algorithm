const solution = (n) =>{
    let l=n.length;
    let answer=(n[l-1]>n[l-2])?(n[l-1]-n[l-2]):2*(n[l-1]);
    n.push(answer);
    return n;
}