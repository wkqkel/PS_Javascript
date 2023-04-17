function solution(skill, skill_trees) {
  const filteredSkillTrees = skill_trees.map(tree=>[...tree].filter(v=>skill.includes(v)).join(''));
  return filteredSkillTrees.filter(tree=>([...tree].every((v,i)=>skill[i] === v))).length
  

}