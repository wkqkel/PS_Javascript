function calculator(num1, operator, num2) {
    switch(operator) {
        case '+' : return num1 + num2
        case '-' : return num1 - num2
        case '*' : return num1 * num2
        case '/' : return num1 / num2
    }
}


function solution(quiz) {
    const ans = []
    for (let x of quiz){
      const [expression, right] =  x.split('=');
      const [num1, operator ,num2] = expression.split(' ')
      if(calculator(+num1, operator, +num2)=== +right) {
          ans.push('O');
          continue;
      } 
      ans.push('X')
    }
    return ans
}