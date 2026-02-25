/**
 * Given an integer array numbers, return all triplets [numbers[i], numbers[j], numbers[k]] 
 * such that i, j, and k are distinct indices and their values sum to 0. Ensure that the solution 
 * set contains no duplicate triplets.
 */
export default function tripletSum(numbers: number[]): number[][] {
  const ans: number[][] = [];

  // Sort the input array for efficient two-pointer search
  numbers.sort((a, b) => a - b);

  for (let i = 0; i < numbers.length - 2; i++) {
    // Skip duplicates: only consider unique starting elements (i)
    if (i > 0 && numbers[i] === numbers[i - 1]) continue;

    // Two-pointer approach for remaining elements (j & k)
    let j = i + 1;
    let k = numbers.length - 1;

    while (j < k) {
      const sum = numbers[i] + numbers[j] + numbers[k];

      if (sum === 0) {
        // Found a triplet, add it to the answer
        ans.push([numbers[i], numbers[j], numbers[k]]);

        // Move pointers to skip duplicates
        do {
          j++;
        } while (j < k && numbers[j] === numbers[j - 1]);
        do {
          k--;
        } while (j < k && numbers[k] === numbers[k + 1]);
      } else if (sum < 0) {
        // Move j forward to search for a larger positive number
        j++;
      } else {
        // Move k backward to search for a smaller negative number
        k--;
      }
    }
  }

  return ans;
}
