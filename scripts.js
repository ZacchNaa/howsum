/**
 * ========================
 * How Sum
 * Write a function `howSum(targetSum, numbers)` that takes in a targetSum and
 * an array of numbers as args
 *
 * the function should return an array containing any combination of
 * elements that add up to exactly the targetSum. if there is no
 * combination that adds up to the targetSum
 * them return null
 *
 * if there are multiple combinations possible, you may return any single one
 * =====================
 */
// low performance
const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers);
    if (remainderResult !== null) {
      return [...remainderResult, num];
    }
  }

  return null;
};

// high performance
const howSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSumMemo(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
};

console.log(howSum(7, [3, 2]));
console.log(howSum(7, [8, 9]));
console.log(howSum(7, [2, 4]));

console.log(howSumMemo(7, [3, 2]));
console.log(howSumMemo(7, [8, 9]));
console.log(howSumMemo(700, [2, 4]));
