function solution(today, terms, privacies) {
    today = new Date(today)
    terms = Object.fromEntries(terms.map(v=> v.split(' '))) // 배열을 객체로
    const res = []
    const filtered =privacies.forEach((v,i)=> {
       const type = v.split(' ')[1];
       const collectionDate = new Date(v.split(' ')[0]);
       const experationDate = new Date(collectionDate.setMonth(collectionDate.getMonth() + +terms[type]))
       if(experationDate <= today) res.push(i+1)
    })
    return res
}