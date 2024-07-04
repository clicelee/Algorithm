const solution = (chicken) => {
    let coupon = chicken
    let serviceChicken = 0;
    while(coupon >= 10){
        serviceChicken += ~~(coupon/10);
        coupon = coupon%10 + ~~(coupon/10);
    }
    return serviceChicken;
}


// 내가 놓친 실수
// while(coupon>=10){
//     serviceChicken+=~~(coupon/10);
//     coupon=coupon%10+serviceChicken;
// }
//여기서 coupon에 serviceChicken을 누적하여 더하니까 while문을 돌수록 누적되어 무한루프에 걸렸다


/* better solution */ 
//wow 
// 치킨 10개를 사면 쿠폰 1개를 받는다
// 그러면 9개를 사면 쿠폰 1개를 받는다
const solution=(chicken) => parseInt((chicken-1) / 9);
