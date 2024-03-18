console.log("Hello World!");
//Write a program with three variables, each with the following value:
//The first variable contains your name
//The second variable contains your age
//The third variable contains your occupation
//Then print the variables using the console.log() method.
const myName =  "Ian";
const age = 27;
const occupation = "Software Engineer";
//age = 29; this will cause an error because you cannot change a const dtype value
console.log("My name is "+myName+" and I am "+age+" years old.");
console.log("I am also a "+occupation);
console.log(age);
console.log(`My name is ${myName} and I am a ${occupation}`);
console.log(typeof age);
console.log(typeof myName);

let arr_1 = ["red","blue","green"];
//adding black after the last index of the array
arr_1.push("black");
console.log(arr_1);
//removing the value 'red' and swapping the position of blue and green
arr_1.shift("red");
arr_1[1] = "green";
arr_1[2] = "blue";
console.log(arr_1);
//adding yellow to the first index of the array
arr_1.unshift("Yellow");
console.log(arr_1);

//if, else, else if statements(control flow)
let balance = 2999;
if (balance >= 5000){
  console.log("You have enough money for a vacation");
}
else if(balance >= 3000){
  console.log("You have enough money for a stay-cation");
}
else{
  console.log("You need to save up some more.");
}

//Using the  switch..case statement
let age_1 = 18;
switch (age_1){
  case 10:
    console.log("You are ten years old.");
    break;
  case 20:
    console.log("You are twenty years old");
    break;
  default:
    console.log("Age is neither 10 nor 20.");
}