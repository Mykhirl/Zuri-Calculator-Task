alert( "welcome to my calculator page");
var first = prompt("enter your first number");
var operation = prompt( "what operation do you want to carry out?" + 
"eg. +_/*")
var second = prompt("enter second number")
var product = Number(first) * Number(second)
var minus = Number(first) - Number(second)
var sum = Number(first) + Number(second)
var divide = Number(first) / Number(second)
if(operation === "+"){
    alert(sum);
}
else if(operation === "-"){
    alert(minus);
}
else if(operation === "*"){
    alert(product);
}
else if(operation === "/"){
    alert(divide);
}