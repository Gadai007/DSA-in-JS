//https://www.youtube.com/watch?v=ljRHG5yPBBo

const combinationSum = (candidates, target) => {
  const result = [];
  candidates.sort((a, b) => a - b);

  const dfs = (i, candidates, target, slate) => {
    if (target < 0) return;

    if (target === 0) {
      result.push(slate.slice());
      return;
    }

    for (let j = i; j < candidates.length; j++) {
      slate.push(candidates[j]);
      dfs(j, candidates, target - candidates[j], slate);
      slate.pop(candidates[j]);
    }
  };

  dfs(0, candidates, target, []);
  return result;
};

console.log(combinationSum([2,3,5], 8));
