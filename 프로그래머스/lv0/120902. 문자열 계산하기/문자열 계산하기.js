function solution(my_string) {
  const arr = my_string.split(' ')
  let acc = 0
  for (let idx in arr){
      const x = arr[idx]
      if(!isNaN(+x)) acc += arr[idx-1]==='-' ? -x : +x
  }
  return acc
}