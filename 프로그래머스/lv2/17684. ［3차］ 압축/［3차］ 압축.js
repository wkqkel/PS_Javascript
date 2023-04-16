function solution(msg){
    let answer=[];
    let count = 0;
    
    if(msg.length===1){
       return [array.indexOf(msg)]
    } 
    for(let i = 0; i < msg.length; i++){
        let minSplittedWord = msg[count];
        while(array.indexOf(minSplittedWord)>-1){
           minSplittedWord = minSplittedWord + msg[count+1] 
           count += 1;
        }
        if(!minSplittedWord) continue;
        if(count === msg.length){
          let lastMinSplittedWord = minSplittedWord.split("undefined")[0]
          array.push(lastMinSplittedWord)
          answer.push(array.indexOf(lastMinSplittedWord));
        } else {
          array.push(minSplittedWord);
          let _minSplittedWord = minSplittedWord.slice(0, minSplittedWord.length - 1)
          answer.push(array.indexOf(_minSplittedWord));
        }
     }
 return answer;
}

const array =["*","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
