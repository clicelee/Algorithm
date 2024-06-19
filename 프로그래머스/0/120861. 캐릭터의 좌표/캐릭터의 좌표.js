let horizontalArm;
let verticalArm;

const solution=(keyinput, board)=>{
    let position={x:0, y:0};
    horizontalArm={minus:-(board[0]-1)/2,plus:(board[0]-1)/2}; //수평 팔의 길이
    verticalArm={minus:-(board[1]-1)/2,plus:(board[1]-1)/2}; //수직 팔의 길이
    
    for (let i of keyinput) checkAndMove(position, i); //수평 팔의 길이
    return [position.x, position.y];
};

//좌표평면과 방향을 확인하고 이동해주는 함수
const checkAndMove=(pos, direction)=>{ //현재 위치, 이동 방향을 파라미터로 받음    
    if((direction=="left"&&horizontalArm.minus==pos.x)||
        (direction=="right"&&horizontalArm.plus==pos.x)||
        (direction=="down"&&verticalArm.minus==pos.y)||
        (direction=="up"&&verticalArm.plus==pos.y))
        console.log("Cannot Move");
    
    else if(direction=="left"||direction=="right") direction == "left"? pos.x-- : pos.x++; 
    
    else direction == "down"? pos.y-- : pos.y++;
};


 /* better solution */
// 스위치를 이용한다
// function solution(keyinput, board) {
//     let res = [0,0];
//     for (let p of keyinput) {
//         switch(p){
//             case 'left': if (-res[0] < board[0]/2-1) res[0]--; break;
//             case 'right': if (res[0] < board[0]/2-1) res[0]++; break;
//             case 'up': if (res[1] < board[1]/2-1) res[1]++; break;
//             case 'down': if (-res[1] < board[1]/2-1) res[1]--; break;
//         }
//     }
//     return res;
// }
