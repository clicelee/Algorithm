const solution = (array, commands) => commands.map(i=>array.slice(i[0]-1,i[1]).sort((a,b)=>a-b)[i[2]-1]);