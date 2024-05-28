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