
class LZW {
    dic = [];
    입력 = '';
    res = [];
    
    constructor(입력){
        this.dic = ['_', ...ALPHABETS] // 사전초기화
        this.입력 = 입력 // 입력 초기화
        while(this.입력){ // 입력에서 처리하지않은 다음글자가 있다면
             // 현재입력과 일치하는 가장 긴 문자열 w찾고 색인번호 출력
             let 색인번호 = this.findW() 
             const W = this.dic[색인번호]
             this.입력 = this.입력.slice(W.length) // 입력에서 w를 제거
             const C = this.입력[0]
             const 추가단어 = W+C 
             this.dic.push(추가단어) 
             this.res.push(색인번호)
        }
    }
    findW(입력){
        for(let i=this.입력.length; i>0;i--){
            const str = this.입력.slice(0,i);
            const idx = this.dic.indexOf(str);
            const isW = idx > -1 
            if(isW){
                const 색인번호 = idx
                return 색인번호
            }
        }
    }
}

function solution(msg) {
    const aa = new LZW(msg)
    return aa.res
}

const ALPHABETS = Array.from({length: 26}, (v,i)=> String.fromCharCode(65+i))
