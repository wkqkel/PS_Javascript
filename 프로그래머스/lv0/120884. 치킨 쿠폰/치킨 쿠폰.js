function solution(chicken) {
    let coupons = chicken;
    let service = 0;
    while(Math.floor(coupons / 10)) {
        let order = Math.floor(coupons / 10)
        service += order;
        coupons = coupons % 10 + order
    }
    return service
}