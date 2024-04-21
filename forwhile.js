console.log("for and while loop")

let a=1;

for(let i=0;i<20;i++){
    console.log(a+i);
}
let obj ={
 name :" java",
 role :"programming language",
 company : "microsoft",
}

for(let key in obj)
{
    let element=obj[key];
    console.log(key,element);
}


for(let c of "java"){
   console.log(c); 
}

let j=1;
while(j<5){
    console.log(j);
    j++;
}
