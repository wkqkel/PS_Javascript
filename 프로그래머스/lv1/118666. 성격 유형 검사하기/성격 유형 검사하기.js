function solution(survey, choices) {
    // 첫번쨰원소는  3~1 0 1~3
    // const MAP = [null, 3, 2, 1, 0 ,1, 2, 3]
    // const MAP = {1:3, 2:2,3:1, 4: 0 ,5:1,6:2,7:3}
    const obj = {}
    const PERSONALITY_TYPES = ['RT','CF', 'JM', 'AN']
    for(let i = 0; i< survey.length; i++) {
        const choicedPersonality = survey[i][+(choices[i]-4 > 0)]
        obj[choicedPersonality] = (obj[choicedPersonality] || 0) + Math.abs(4- choices[i])
    }
    return PERSONALITY_TYPES.map(v => (obj[v[0]] | 0) >= (obj[v[1]] | 0) ? v[0]: v[1]).join('')
}
