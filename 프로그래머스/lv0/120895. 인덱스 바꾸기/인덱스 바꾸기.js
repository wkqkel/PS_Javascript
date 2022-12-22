function solution(my_string, num1, num2) {
    // const arr = [...my_string]
    // array.splice(num1, 1, my_string[num2])
    // array.splice(num2, 1, my_string[num1])
    // return array.join('')

    // Cannot access 'arr' before initialization 
    // 할당 뒤에 ;가 없으면 에러.
    const arr = [...my_string]; 
    [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
    return arr.join("");
}