const solution = (arr) =>{
    let temp=null;
    let answer=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i]!==temp){
            answer.push(arr[i]);
            temp=arr[i];
        }
    }
    return answer;
}