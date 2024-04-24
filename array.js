let arr = [1,2,4,6]

console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
//array are mutable
console.log(arr.join(" and "))
console.log(arr.pop())
console.log(arr.push(100))
console.log(arr.push("java"))
console.log(arr.shift())
console.log(arr.unshift("jack"))
console.log(arr.length)
// console.log(arr.sort())
let num = [1,2,3,4,5]
num.slice(1,3)
for(let index=0;index<arr.length;index++){
    const element = arr[index];
    console.log(element)
}

let arr1 = [1,2,4,6]
arr1.forEach((value,index,arr1)=>{
    console.log(value,index,arr1)
})

let obj={
  "a":"1",
  "b":"2",
  "c":"3"
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
        }
}