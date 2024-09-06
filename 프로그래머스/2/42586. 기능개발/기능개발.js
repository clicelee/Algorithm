 const solution = (progresses, speeds) => {
    let days=progresses.map((v,i)=>{
        let task=100-v; //남은 테스크 양
        return Math.ceil(task/speeds[i]);
    }); 
    console.log(days);
     
    let standard=days[0];
    let answer=[];
    let counter=1;
    for(let i=1; i<days.length; i++){
        if(standard>=days[i]){
            counter++;
        }
        else{
            answer.push(counter);
            counter=1;
            standard=days[i];

        }
    }
    answer.push(counter); //마지막 count 넣기
    return answer;
}