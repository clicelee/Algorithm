//처음에는 같은 방향만 모아서 한번에 더하려고 했지만, 그렇게 되면 맵을 벗어나는 방향키를 무시하지 못한다.그래서 하나 하나 다 생각해줘야 한다
let horizontalArm;
let verticalArm;


const solution=(keyinput, board)=>{
    let position={x:0, y:0};
    horizontalArm={minus:-(board[0]-1)/2,plus:(board[0]-1)/2}; //수평 팔의 길이
    verticalArm={minus:-(board[1]-1)/2,plus:(board[1]-1)/2}; //수직 팔의 길이
    console.log("좌표평면: ",horizontalArm,  verticalArm);
    for (let i of keyinput){
            checkAndMove(position, i); //수평 팔의 길이
        console.log(position);
    }
    return [position.x, position.y];
};

//좌표평면과 방향을 확인하고 이동해주는 함수
const checkAndMove=(pos, direction)=>{ //현재 위치, 이동 방향을 파라미터로 받음
    // if (direction == "left" || direction == "right") {
    //     if (horizontalArm.minus < pos.x && pos.x < horizontalArm.plus) { // 현재 위치가 좌표평면의 -+ 안에 있다면
    //         (direction == "left") ? pos.x-- : pos.x++; // 방향이 left라면 좌표를 감소시키고, 아니라면 증가시킴
    //     }
    // } else {
    //     if (verticalArm.minus < pos.y && pos.y < verticalArm.plus) { // 현재 위치가 좌표평면의 -+ 안에 있다면
    //         (direction == "down") ? pos.y-- : pos.y++; // 방향이 down이라면 좌표를 감소시키고, 아니라면 증가시킴
    //     }
    // }
    
    if((direction=="left"&&horizontalArm.minus==pos.x)||
        (direction=="right"&&horizontalArm.plus==pos.x)||
        (direction=="down"&&verticalArm.minus==pos.y)||
        (direction=="up"&&verticalArm.plus==pos.y))
        console.log("Cannot Move");
    else if(direction=="left"||direction=="right")
        direction == "left"? pos.x-- : pos.x++; 
    else
        direction == "down"? pos.y-- : pos.y++;
    
};