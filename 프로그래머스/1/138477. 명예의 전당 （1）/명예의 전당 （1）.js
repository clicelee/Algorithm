const solution=(k, score)=>{
    // let hall=score.slice(0,k); //first Hall of Fame
    // let result = Array(k).fill(Math.min(...hall)); // k만큼 Math.min(...hall) 값을 반복
    let hall = []; // 명예의 전당 목록
    let result = []; // 최하위 점수 결과
    for(let i=0; i<score.length; i++){
        hall.push(score[i])
        hall=hall.sort((a,b)=>(b-a)).slice(0,k);
        result.push(Math.min(...hall));
    }
    return result;
}

