const str=new String("shubham")
console.log(str.length);
console.log(str.substring(7,5))
console.log(str.slice(4,2));
console.log(str.charAt(3))
console.log(str.includes("am"))
console.log(str.concat(" Rawat"));
console.log(str.replace("ub","aa"));
/*substring vs slice
1- with -ve values slice counts from backward
whereas substring consider them as 0
2- with start index>end index substring swaps the arguments whereas slice returns empty string 



*/


const name="shubham"
const age=23
const salary=45890.556
console.log(`My name is ${name} and age is ${age} with salary ${salary.toFixed(2)}`);


