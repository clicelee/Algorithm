const solution=(angle)=>{
    if(angle<=90) 
        return angle==90?2:1;
    else 
        return angle==180? 4:3;
}