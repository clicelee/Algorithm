const solution=(num_list, n)=>{
    return Array(num_list.length / n).fill().map((_, i) =>
        num_list.slice(i*n, (i+1)*n)
    );
}