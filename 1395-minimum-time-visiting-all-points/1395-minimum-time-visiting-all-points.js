/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let res = 0;
    for(let i=0; i<points.length-1; i++) {
        const [curX,curY] = points[i]
        const [nextX, nextY] = points[i+1]
        res += Math.max(Math.abs(curX - nextX), Math.abs(curY- nextY))
    } 
    return res
};