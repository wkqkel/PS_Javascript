/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
   const edit = (str) => [...str].reduce((acc,cur)=> {
       console.log(acc)
      acc = cur === '#' ? acc.substring(0, acc.length -1) : acc + cur
      return acc;
   }, '') 
   return ( edit(t) === edit(s))
};