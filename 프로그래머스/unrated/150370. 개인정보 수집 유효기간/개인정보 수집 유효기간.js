function solution(today, terms, privacies) {
    today = new Date(today)
    terms = Object.fromEntries(terms.map(v=> v.split(' '))) // 배열을 객체로
    const res = []
    const filtered =privacies.forEach((v,i)=> {
       const [date, type] = v.split(' ');
       let experationDate = new Date(date)
       new Date(experationDate.setMonth(experationDate.getMonth() + +terms[type]))
       if(experationDate <= today) res.push(i+1)
    })
    return res
};