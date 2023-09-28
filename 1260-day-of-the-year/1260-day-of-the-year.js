/**
 * @param {string} date
 * @return {number}
 */

//  1월: 31일
// 2월:28/29일
// 3월:31일
// 4월:30일
// 5월:31일
// 6월:30일
// 7월:31일
// 8월:31일
// 9월:30일
// 10월:31일
// 11월:30일
// 12월:31일

const DAYS_OF_MONTH_MAP = [null,31,28,31,30,31,30,31,31,30,31,30,31];
var dayOfYear = function(date) {
    function is윤년(n){
        if(n % 4==0 && n % 100 !==0) {
            return true;
        }
        if(n%4===0 && n % 100 === 0 && n % 400 === 0) {
            return true;
        }
        return false;
    }

    const [y,m,d] = date.split('-');
    let res = 0

    for(let i = m-1; i > 0; i--){
        if(is윤년(y) && i === 2) {
            res += DAYS_OF_MONTH_MAP[+i]+ 1;
        } else {
            res += +DAYS_OF_MONTH_MAP[+i];
        }
    }
    res += +d ;
    return res;
};