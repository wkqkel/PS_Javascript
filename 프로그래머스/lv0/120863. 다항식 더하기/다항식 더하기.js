function solution(polynomial) {
    const arr = polynomial.split(' + ')
    const xCoefficient = arr
    .filter(v => v.includes('x'))
    .reduce((acc,cur)=> acc+ (+cur.slice(0, cur.length-1)||1),0);
    const x = xCoefficient ? xCoefficient===1? 'x' : xCoefficient + 'x' : '';
    const numCoefficient = arr
                  .filter(v => !v.includes('x'))
                  .reduce((acc,cur)=> acc+ +cur,0);
    const num = numCoefficient ? numCoefficient + '' : ''
    return  x && num ? x + ' + ' + num : x || num
}