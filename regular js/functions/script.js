function sayHello(){
    console.log('Hello World');
}

//sayHello();

//default param and its value
function registerUser(user ='Bot'){
    return user + ' is registered';
}
//console.log(registerUser());

//...takes in array values
function sum(...numbers){
    //return numbers;
    let total =0;
    for(const num of numbers){
        total += num;
    }
    return total;
}
//console.log(sum(1,2,3));

//objects as params
function loginUser(user = {id:0, name:'Guest'}){
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
    id:1,
    name:'John',
};
//console.log(loginUser());

function first(){
    const x =100;

    function second(){
        const y = 200;
     //   console.log(x+y);
    }
    second();
}
//first();

if(true){
    const x =100;
    if(x ==100){
        const y = 200;
        console.log(x+y);
    }
}

//function declaration
function addDollarSign(value){
    return '$' +value;
}
console.log(addDollarSign(100));

//function expression
const addPlusSign = function (value){
    return '+' + value;
}
console.log(addPlusSign(200));

//arrow functions - use return keyword
const add = (a,b) => {return a+b;}
console.log(add(1,2));

const double = a => a*2;
console.log(double(10));

