let a=prompt("Enter number 1")
let b=prompt("Enter number 2")
let sum=parseInt(a)+parseInt(b)
if(isNaN(a) && isNaN(b)){
    throw SyntaxError("This is not int")
}
// console.log(" The sum is",sum)

function catchme(){
    let x=1
    try {
        console.log(" The sum is",sum*x);
        return true
    } catch (error) {
        console.log("Error has occured");
        return false
  }
  finally{
    console.log("Everythig is Done")
  }
}

catchme();