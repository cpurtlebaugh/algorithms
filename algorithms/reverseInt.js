'use strict';
// Given a 32-bit signed integer, reverse digits of an integer.

const reverse = ((x) => {
    if(x === 0) { return 0 }
    let maxInt = Math.pow(2, 31) - 1;
    let reversedArr = x.toString().split('').reverse();
    let newArr = [];

    for(let i = 0; i < reversedArr.length; i++){
      if(!reversedArr[i] == 0 || !reversedArr[i] == '-') {
        newArr.push(reversedArr[i]);
      } 
    }

    let joined = newArr.join('');
    let result = parseInt(joined);
    
    if(result > maxInt) {
      result = 0;
    }
    if(Math.sign(x) === -1){
      result = - + result;
    } 

    return result;
});


// babel-node algorithms/reverseInt.js
(() => {
  console.log(reverse(-432),// keeps -
  reverse(-65090), // keeps -
  reverse(120), // drops 0
  reverse(901000),
  reverse(1534236469), // out of 32 bit int bound
  reverse(-2147483648))// out of 32 bit int bound
})();
 