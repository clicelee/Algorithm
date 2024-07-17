function solution(dots) {
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
    if((y1-y2)/(x1-x2)===(y3-y4)/(x3-x4)||(y1-y3)/(x1-x3)===(y2-y4)/(x2-x4)) //기울기 나오는 경우 2가지를 비교한 뒤, 한번이라도 같으면 ture
        return 1;
    else return 0;
}

