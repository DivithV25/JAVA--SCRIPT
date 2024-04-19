console.log("Conditional statements")
let a =19;
if(a>18){
 console.log("you can vote")
}
else{
console.log("you cannot vote")

}

// operators
let c=7;
let b=6;
console.log(c+b);
console.log(c-b);
console.log(c*b);
console.log(c**b);
console.log(c/b);
console.log(c%b);
console.log(c++);
console.log(c--);

//comparision operators
//this operator verifies the data types
if("3"===3){
    console.log("data type is same")
}
else{
    console.log("data type is different")
}

//if else adder
let age = 0;
if(age>18){
    console.log("you can vote");
}
else if(age==0){
  console.log("this cannot be true");
}
else{
  console.log("you cannot vote")
}
//ternary operator
let num1=20;
let num2=10;
let  num3= (num1>num2)?num1-num2:num2-num1;
console.log(num3);