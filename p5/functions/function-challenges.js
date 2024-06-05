//challenge 1 to make a get celsius method that changes
//temp into fahrenheit 
const getCelsius = f => 5 *( f -32)/9;
console.log(getCelsius(100));

//so, to use an array you call the three dots in the min and max
const minMax = number =>{
    return `min: ${ Math.min(...number)}, max: ${Math.max(...number)}`
}
console.log(minMax([1,2,3,4,5]));

//continue at challenge 3 pls
(function (length, width) {
    const area = (length, width) => console.log(`The area of rectange with a length of ${length} and a width of ${width} is ${length * width}`)
    area(10, 5);
})();

//ternary operator
function getFee(isMember){
    return isMember ? '$2.00' : '$10.00';   //after ? has true then false values
}
console.log(getFee(false));