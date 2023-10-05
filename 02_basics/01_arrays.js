const marvel_heroes=["ironman","thor","wanda"]
const dc_heroes=["flash","batman","superman"]
const desi_heroes=["nagraj","shaktiman","junior-g"]
const all_heroes1=[...desi_heroes,...dc_heroes,...marvel_heroes]
const all_heroes2=marvel_heroes.concat(dc_heroes)
console.log(all_heroes1);
console.log(all_heroes2);

marvel_heroes.push(23)//pushes element at end of array;returns new length of array
marvel_heroes.pop() //removes element from end
dc_heroes.unshift("aquaman")//adds element at the start of array
dc_heroes.shift()//removes element from start
console.log(dc_heroes);
console.log(marvel_heroes);