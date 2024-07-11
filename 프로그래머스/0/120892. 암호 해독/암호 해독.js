const solution=(cipher, code) => [...cipher].filter((number,index)=>(index + 1) % code === 0).join('')
//몇주전에는 이렇게 for 문으로 삽질하다가 못 풀었는데, 오늘 문제를 다시 보고 filter가 바로 생각났다

// for(i=0;i+code*1-1<cipher.length; i++) 
//     answer[i]=(cipher[i+code*i-1]);
// return answer;
