function solution(skill, skill_trees) {
  const filterRequiredPrior = tree => [...tree].filter(v=>skill.includes(v));
  const isRightOrdered = tree => [...tree].every((v,i)=>skill[i] === v);
  return skill_trees.map(filterRequiredPrior).filter(isRightOrdered).length;
}