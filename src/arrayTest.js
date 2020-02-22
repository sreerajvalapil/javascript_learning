var myArray = [1,2,"sree"] ;
myArray.push(12) ;
myArray.forEach(value =>  {
    console.log(value) ;
}) ;
myArray.pop();
myArray.forEach(value =>  {
    console.log(value) ;
})
var newArray = myArray.map(value => value+"hai") ;
console.log("................New result................... ")
newArray.forEach(value =>  {
    console.log(value) ;
}) ;

newArray.shift();

console.log("................After Shifting ................... ")
newArray.forEach(value =>  {
    console.log(value) ;
}) ;

newArray.unshift("Sreyaan eating food") ;

console.log("................After  Un Shifting ................... ")
newArray.forEach(value =>  {
    console.log(value) ;
}) ;
