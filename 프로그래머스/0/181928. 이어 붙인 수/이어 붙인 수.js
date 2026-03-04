function solution(num_list) {
    let answer = 0;
    const arrayLength=num_list.length
    let odd_number=[];
    let even_number=[];
    
    for(i=0; i<arrayLength; i++)
        if(num_list[i]%2!=0) 
            odd_number.push(num_list[i]);
    for(i=0; i<arrayLength; i++)
        if(num_list[i]%2==0) 
            even_number.push(num_list[i]);
    
    answer=Number(odd_number.join(''))+Number(even_number.join(''));
    return answer;
}