// 2. Buatlah fungsi dengan input array of number dan number untuk menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi
// Input : ([100, 200, 300, 400], 2)				Expected Output : 700 		// didapatkan dari 300 + 400
// Input : ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)		Expected Output : 39 		// didapatkan dari 4 + 2 + 10 + 23
// Input : ([-3, 4, 0, -2, 6, -1], 2)				Expected Output : 5 		// didapatkan dari 6 + -1

export function findMaxSubarraySum(arr: number[], size: number): number | null {
  if (size > arr.length) {
    return null;
  }

  let currentSum = 0;
  for (let i = 0; i < size; i++) {
    currentSum += arr[i];
  }

  let maxSum = currentSum;

  for (let i = size; i < arr.length; i++) {
    currentSum = currentSum - arr[i - size] + arr[i];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Test cases
console.log(findMaxSubarraySum([100, 200, 300, 400], 2)); // Expected output is 700
console.log(findMaxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // Expected output is 39
console.log(findMaxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // Expected output is 5
