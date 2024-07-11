const solution=(cipher, code) => [...cipher].filter((number,index)=>(index + 1) % code === 0).join('')

