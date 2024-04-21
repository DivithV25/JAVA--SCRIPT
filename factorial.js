let a=5;
function fact(number){
let arr = Array.from(Array(number+1).keys())
// let arr=[1,2,3,4,5] 
let c =arr.slice(1,).reduce((a,b)=>a*b)
return c;
}
console.log(fact(a))   