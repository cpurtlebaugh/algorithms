'use strict';
// An Arithmetic Progression is defined as one in which there is a constant difference
// between the consecutive terms of a given series of numbers. You are provided with 
// consecutive elements of an Arithmetic Progression. There is however one hitch: 
// exactly one term from the original series is missing from the set of numbers which 
// have been given to you. The rest of the given series is the same as the original AP. 
// Find the missing term.
// You have to write the function findMissing(list), list will always be at least 3 
// numbers. The missing term will never be the first or last one.

const missing = [1, 3, 5, 9, 11] // output: 7
// const missing = [1, 3, 4]; // output: 2
// const missing = [ -3, 2, 12, 17, 22 ]; // output: 7
// const missing = [ 0, -1, -3, -4, -5, -6 ]; // output: -2

function findMissing(missing){
	let value = 0;
	let startDiff = (missing[1] - missing[0]);
	let endDiff = (missing[missing.length - 1] - missing[missing.length - 2]);

	if(startDiff !== endDiff) startDiff = missing[2] - missing[1];

	for(let i = 0; i < missing.length - 1; i++){
		if(missing[i+1] - missing[i] !== startDiff ){
			value = missing[i] + startDiff
		}
	};
	return value;
}

// RUN SCRIPT
// babel-node algorithms/findMissing.js
(async function (){
	console.log(findMissing(missing))
})();
