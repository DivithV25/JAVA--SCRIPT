console.log("strings");
let a="java"
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])

console.log(a.length)

//tempalate literals
let realname="java"
let role="programming language"
console.log(`${realname} is a ${role}`)

//escape sequence
console.log("hello\"world")

//changing upper and lower case
let x="script"
let y="java";
console.log(y.toUpperCase())
console.log(y.toLowerCase())
console.log(y.length)
console.log(y.slice(1,3))
console.log(y.replace("ja","JA"))
console.log(y.concat( x," is the best"))

//string is immutable