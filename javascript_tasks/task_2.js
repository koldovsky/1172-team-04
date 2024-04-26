// Task 1 DNA to RNA Conversion
// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
// Serhii Zamorii: https://www.codewars.com/kata/reviews/55563a4e01231d19e00001e6/groups/639d7f42d379e90001a85e04
// Khrystyna Vehera: https://www.codewars.com/kata/reviews/55563a4e01231d19e00001e6/groups/63a2f5d487d8f000017f59b6
function DNAtoRNA(dna) {
    return dna.replaceAll('T','U');
  }
// Task 2 Convert a string to an array
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
// Serhii Zamorii: https://www.codewars.com/kata/reviews/57e7742fe9068ed9f4000017/groups/57e82ddbf11c64130c000236
// Khrystyna Vehera: https://www.codewars.com/kata/reviews/57e7742fe9068ed9f4000017/groups/57e82ddbf11c64130c000236
function stringToArray(string) {
    return string.split(' ');
  }
// Task 3 Find Maximum and Minimum Values of a List
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
// Serhii Zamorii: https://www.codewars.com/kata/reviews/577aec3cb9498e1aed00009a/groups/5ee6cb66e40f8f00013308c5
// Khrystyna Vehera: https://www.codewars.com/kata/reviews/577aec3cb9498e1aed00009a/groups/577d8fbb0a8eb243da000084
var min = function(list) {
    return list.sort((a, b) => a-b)[0];
}

var max = function(list) {
    return list.sort((a, b) => b-a)[0];
}
// Task 4 Smallest value of an array
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
// Serhii Zamorii: https://www.codewars.com/kata/reviews/544a5616dd73509376000092/groups/66240a6989a88b00016ada16
// Khrystyna Vehera: https://www.codewars.com/kata/reviews/544a5616dd73509376000092/groups/5fe8c17b217ad5000161a38f
function min( array, outer ) {
    return outer === 'index' ? array.indexOf(Math.min(...array)) : Math.min(...array)
}
    // Additional optional tasks:

// Task 5 A wolf in sheep's clothing
// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
// Serhii Zamorii: https://www.codewars.com/kata/reviews/5c8bfbbf3b8ec2000116c7cb/groups/5f95dab23677540001f0dfe2
// Khrystyna Vehera: https://www.codewars.com/kata/reviews/5c8bfbbf3b8ec2000116c7cb/groups/6625585fc451bf000146bca6
function warnTheSheep(queue) {
  const wolfIndex = queue.indexOf('wolf');
  return wolfIndex === queue.length - 1 ? 
    'Pls go away and stop eating my sheep' :
    Oi! Sheep number ${queue.length - wolfIndex - 1}! You are about to be eaten by a wolf!;
}

// Task 6 Beginner - Lost Without a Map
// https://www.codewars.com/kata/beginner-lost-without-a-map
// Serhii Zamorii: https://www.codewars.com/kata/reviews/57f7818f2e3d8ca2a0000080/groups/57f8040a7b992e04840001a8
// Khrystyna Vehera: https://www.codewars.com/kata/reviews/57f7818f2e3d8ca2a0000080/groups/57f8040a7b992e04840001a8
function maps(x) {
    return x.map(n => n * 2);
  }
// Task 7 Find the first non-consecutive number
// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
// Serhii Zamorii: https://www.codewars.com/kata/reviews/58f8a3fd6f3e351305001710/groups/58fa8007e400bfa16e000a4f
function firstNonConsecutive (arr) {
    for(let i = 0; i < arr.length-1; i++){
      if (arr[i+1]-arr[i] !== 1) {
        return arr[i+1];
      }
    }
    return null;
  }