const 보정값 = 65536

function solution(str1, str2) {
    const [A,B] = [make다중집합(str1), make다중집합(str2)]
    const [교집합,합집합] = [make교집합(A,B), make합집합(A,B)]
    const [교집합길이,합집합길이] = [집합길이구하기(교집합),집합길이구하기(합집합)]
    if(교집합길이 === 0 && 합집합길이 === 0) return 보정값
    return Math.floor(보정값 * ((교집합길이 / 합집합길이)))
}

const make다중집합 = (str) =>{
    const map = [...str].reduce((acc,cur,i,list)=>{
        if(i===list.length-1) return acc
        const v = cur.toLowerCase()+list[i+1].toLowerCase()
        acc.set(v, (acc.get(v) || 0) + 1 )
        return acc;
    },new Map())
    for(let [key,value] of map) {
        const isOnlyAlphabet = [...key].every((v)=> ALPHABETS.includes(v))
        if(!isOnlyAlphabet){
            map.delete(key)
        }
    }
    return map
}

const make교집합 =(A,B)=>{
    const 교집합 = new Map()
    for(let [v,A갯수] of A) {
        const B갯수 = B.get(v)
        if(B갯수) {
            교집합.set(v, Math.min(A갯수, B갯수))
        }
    }
    return 교집합
}

const make합집합 =(A,B)=>{
    const arr = [...new Set([...A.keys(), ...B.keys()])]
    return arr.reduce((acc,cur)=>{
        acc.set(cur, Math.max(A.get(cur)|0, B.get(cur)|0))
        return acc
    },new Map())
}

const 집합길이구하기 = (집합) =>{
    return [...집합.values()].reduce((a,b)=>a+b,0)
}

const ALPHABETS = 'abcedfghijklmnopqrstuvwxyz'