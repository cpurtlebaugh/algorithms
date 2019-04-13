'use strict';
// The maximum sum subarray problem consists in finding the 
// maximum sum of a contiguous subsequence in an array or 
// list of integers.

const testArr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
function getMaxSubSum(testArr) {
	let maxSum = 0;
	let partialSum = 0;

	testArr.forEach((item) => {
		partialSum += item;
		maxSum = Math.max(maxSum, partialSum);
		if(partialSum < 0) partialSum = 0;
	});
  
	return maxSum;
};

// RUN SCRIPT
// babel-node algorithms/maxSubSum.js
(async function (){
	console.log(getMaxSubSum(testArr));
})();
