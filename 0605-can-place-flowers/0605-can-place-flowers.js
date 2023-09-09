/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    // let count = n;
    // flowerbed = flowerbed.join('').replace(/000/gi, ()=>{
    //     count--
    //     return '010'
    // }).split('');

    // flowerbed.join('').replace(/000/gi, ()=>{
    //     count--
    //     return '010'
    // });

    // return count === 0

    if(flowerbed.join('') === '0') {
        return true
    }

    let res = n;
    if(flowerbed.slice(0,2).join('') == '00'){
        flowerbed.splice(0, 2, 1,0)
        res--
    };
    
    if(flowerbed.slice(-2).join('') == '00'){
        flowerbed.splice(-2, 2, 0,1)
        res--
    }

    for(let i = 0; i<flowerbed.length; i++){
        if(flowerbed.slice(i, i+3).join('') === '000') {
            flowerbed.splice(i, 3, 0,1,0)
            i--
            res--
        };
    }
   
    return res <= 0
};