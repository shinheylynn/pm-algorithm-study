const getPermutations = (arr) => {
  if (arr.length === 0) return [[]];
  return arr.flatMap((v, i) =>
    getPermutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map((p) => [
      v,
      ...p,
    ])
  );
};

const calculateDungeons = (fatigues, fatigue) => {
  let count = 0;

  for (const [required, consumption] of fatigues) {
    if (fatigue < required) {
      return count;
    }

    count += 1;
    fatigue -= consumption;
  }

  return count;
};

function solution(k, dungeons) {
  const permutations = getPermutations(dungeons);

  const possibleDungeons = permutations.map((fatigues) =>
    calculateDungeons(fatigues, k)
  );

  return Math.max(...possibleDungeons);
}
