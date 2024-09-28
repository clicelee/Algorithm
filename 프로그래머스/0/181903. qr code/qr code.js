const solution=(q, r, c)=> [...c].filter((e,i)=>(i%q)==r).join('')

// 매개변수를 사용하지 않는다는 뜻에서 .filter((_, i) => 와 같이 언더스코어 _ 로 쓸 수 있다.
