const solution=(s)=> s.split(' ').map(word=>[...word].map((i,index)=>index%2===0?i.toUpperCase():i.toLowerCase()).join('')).join(' ');