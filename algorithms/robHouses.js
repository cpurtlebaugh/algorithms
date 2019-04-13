'use strict'
const input = [2,7,9,3,1];
// const input = [10,2,9,3,1]; output: 12
function robHouses(input){
	return input.reduce((total, amount, index) => {
		console.log("test: ", index % 2 === 0)
		console.log("accumulator: ", total);
		console.log("current value: ", amount);
		console.log("index: ", index)
		if(index % 2 === 0){
			return total + amount
		} else {
			return total;
		}
	});
};

// RUN SCRIPT
// babel-node robHouses.js
(async function (){
	console.log(robHouses(input))
})();
