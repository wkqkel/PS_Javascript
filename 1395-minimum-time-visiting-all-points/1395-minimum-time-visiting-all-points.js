/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let res = 0;
    let cur = points[0]
    for(let i=1;i<points.length; i++) {
        res += Math.max(Math.abs(cur[0] - points[i][0]), Math.abs(cur[1]- points[i][1]))
        cur = points[i];
    } 
    return res
    // function movePoint(cur,goal){
    //     if(cur === goal) return 0;
    //     if(cur < goal) return 1;
    //     return -1;
    // }

};