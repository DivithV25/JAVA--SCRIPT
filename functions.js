console.log("Functions")
function greeting(name) {
    console.log("Heloo " + name);
    console.log("Welcome " + name);
}

greeting("Divith");

function add(a, b) {
    return a + b;
}
result = add(3, 4);
console.log("The sum of the two numbers is:", result);
// arrow function
const func1 = (x) => {
    console.log("i am a arrow function", x)
}
let capture = func1(34);

func1(43);
// arrow function is used to capture the value returned by the function 