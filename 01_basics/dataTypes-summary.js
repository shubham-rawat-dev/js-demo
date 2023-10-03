//const bigNumber=123n
//console.log(typeof bigNumber);
const myObj={
    name:"Shubham",
    age:23,
    myFunction:function abc()
    {
        console.log("my function");
    },
}
// const heroes=["shaktiman","superman"]
// const myfunc=function(){console.log("myFunc");}
// console.log(typeof myObj);


//########################

//Stack memory(primitive)  Heap Memory (reference)
let myName="shubham"
let myAnotherName=myName
myAnotherName="rishi"
console.log(myName);
console.log(myAnotherName);


let myObj1={
    email:"test@api.com",
    age:23,
}

let myObj2=myObj1
console.log(myObj1);
myObj2.age=22
console.log(myObj1);