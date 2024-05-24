const solution=(hp)=>{
    five_ant=~~(hp/5);
    three_ant=~~((hp%5)/3);
    one_ant=hp-(5*five_ant+3*three_ant);
    return five_ant+three_ant+one_ant;
}