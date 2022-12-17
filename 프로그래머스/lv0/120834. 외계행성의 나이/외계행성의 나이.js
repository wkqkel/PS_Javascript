function solution(age) {
    return [...(age + '')].map(letter => alphabet[letter]).join('')
}

const alphabet = ['a','b','c','d','e','f','g','h','i','j']