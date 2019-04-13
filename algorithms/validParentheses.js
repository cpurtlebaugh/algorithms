'use strict';
// const parens = "";
// const parens = "(())((()())())"; // true
// const parens = ")(()))"; // false
// const parens = ")()()()(" // false;
function validParentheses(parens){
	let arr = parens.split("");
	let isValid = true;
	let one = [];
	let two = [];
	let even = "(";

	if(arr.length === 0) return isValid = true;
	if(arr[0] !== even || arr[arr.length-1] === even) return isValid = false;

	for(let i = 0; i < arr.length; i++){
		let val = arr[i];
		val === even ? one.push(val) : two.push(val);
	}
	return one.length !== two.length ? isValid = false : isValid = true; 
  }

// RUN SCRIPT
(async function (){
	console.log(validParentheses(parens))
})();
