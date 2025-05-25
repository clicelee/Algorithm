let solution=(a, b, c) => {
    if(2*a-b==c) return 27*(a**6);
    if((a!=b)&&(a!=c)&&(b!=c)) return a+b+c;
    else return (a+b+c)*(a**2+b**2+c**2);
}