function solution(skill, skill_trees) {
  const filterOnlyRequired = tree => [...tree].filter(v=>skill.includes(v));
  const filteredSkillTrees = skill_trees.map(filterOnlyRequired);
  const isRightOrdered = tree => [...tree].every((v,i)=>skill[i] === v);
  return filteredSkillTrees.filter(isRightOrdered).length;
}