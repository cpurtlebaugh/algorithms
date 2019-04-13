'use strict';
// const nums = [1,3,10,9,8];
// const target = 10;
const nums = [2, 7, 11, 15];
const target = 9

function twoSumA(nums, target){
	const hashMap = new Map();
	let results = [];
	for(let i=0; i < nums.length; i++){
		let diff = target - nums[i];
		if(hashMap.has(diff)){
			results.push(...[hashMap.get(diff, i), i]);
		} else {
			hashMap.set(nums[i], i)
		}
	}
	return results;
};

function twoSumB(nums, target){
	const map = new Map;
	let results = []
	let i = 0;
	
	do {
		let diff = target - nums[i];
		if(map.has(diff)){
			results.push(...[map.get(target - nums[i], i), i]);
		} else {
			map.set(nums[i], i);
		}
		i++
	} while(results.length < 2);

	return results
};

// RUN SCRIPT
// babel-node algorithms/twoSum.js
(async function (){
	console.log(twoSumA(nums, target))
	// console.log(twoSumB(nums, target))
})();
