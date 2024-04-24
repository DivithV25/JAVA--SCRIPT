let a=[2,4,6,8,10]
let newarr=[];
for(let i =0 ;i < a.length;i++){
  const element =a[i];
  newarr.push(element**2)
  
}
for(let j =0 ;j < newarr.length;j++){
    console.log(newarr[j]);
  }
  
const greaterThanSeven = (e) =>{
   if(e>7){
    return true
   }
  return false

}
console.log(newarr.filter(greaterThanSeven));
let arr2=[1,2,3,4,5,6]
const red = (a,b) =>{
    return a*b
}
console.log(arr2.reduce(red))

