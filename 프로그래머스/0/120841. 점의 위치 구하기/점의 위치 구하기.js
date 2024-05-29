const solution=(dot)=>{
    const multi=dot[0]*dot[1]; 
    //두 좌표의 곱이 양수면 1,3사분면이고 양수면 2,4사분면이다. 이후 x좌표에 따라 사분면을 구분한다
    if(multi>0) return dot[0]>0?1:3;
    else if(multi<0) return dot[0]>0?4:2;
    else return "error";
}