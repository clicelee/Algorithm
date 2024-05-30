const solution=(my_string, letter)=>[...my_string].filter((value,index,arr)=> value!=letter).join('');
//더 좋은 풀이: my_string.split(letter).join('')
//string 을 바로 split할 수 있다
//또한 두번쨰 방법이 더 빠르다
