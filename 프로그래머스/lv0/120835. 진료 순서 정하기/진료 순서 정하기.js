function solution(emergency) {
    // const orderedList = JSON.parse(JSON.stringify(emergency)).sort((a,b)=> b-a)
    // const orderedList = [...emergency].sort((a,b)=> b-a)
    const orderedList = emergency.slice().sort((a,b)=> b-a)
    return emergency.map(item=> orderedList.indexOf(item)+1)
}