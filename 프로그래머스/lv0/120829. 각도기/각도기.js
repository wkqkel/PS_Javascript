function solution(angle) {
    // return angle <= 90 
    // ? Math.ceil(angle * 2 / 180 + 0.01)
    // : Math.floor(angle * 2 / 180) + 2
    // 170 => 340 / 180 => 1.6 => 3
    // 140 => 280 / 180 => 1.24 => 3
    // 91 => 182 / 180 => 1.02 => 3
    // 90 => 180 / 180 => 1 => 2
    // 70 => 140 / 180 => 0.8 =>  1
    // 30 => 60 / 180 => 0.2 => 1
    
    return [0, 90 , 91 , 180].filter(x => angle >=x).length
}