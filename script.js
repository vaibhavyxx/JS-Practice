const library = [
    {
        title:'Harry Potter',
        author:'JK Rowling',
        status:{
            own:true,
            reading:'no',
            read:false
        }
    },
    {
        title:'Marcel Comics',
        author:'Stan Lee',
        status:{
            own:true,
            reading:'no',
            read:false
        }
    },
    {
        title:'Wired Dec 23',
        author:'ABC',
        status:{
            own:true,
            reading:'yes',
            read:false
        }
    }
]
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
//step2
//library[0].title = 
const{title:firstBook } = library[0];
//step 4
const obj = JSON.stringify(library);


//Object literals
/*let x;
const person= {
    name:'john dow',
    age:30,
    isAdmin:true,
    address:{
        street:'43 greenleaf ct',
        apt : '5052 gibson',
        pincode: 14623,
        city :'Rochester',
        state: 'NY'
    }
}
console.log(person.name);

//destructuring
const todos = {
    id:1, 
    name:'buy milk',
    user:{
        name:'Joe'
    }};
    //used it for local storgae
const str = JSON.stringify(todos);
const obj = JSON.parse(str);

//another way of making literals
//using constructor
/*const obj1 ={a:1, b:2};
const obj2 = {c:3, d:4};
const obj3 = {...obj1,...obj2};
x =obj3
const obj4 = Object.assign({},obj1, obj2);

const todos =[
    {id:1, name:'buy milk'},
    {id:2, name:'pick up'}
]
x= todos;
x = Object.entries(todos);

console.log(x);
/*const person= {
    name:'john dow',
    age:30,
    isAdmin:true,
    address:{
        street:'43 greenleaf ct',
        apt : '5052 gibson',
        pincode: 14623,
        city :'Rochester',
        state: 'NY'
    }
}
x =person.address.state;
delete person.age;
person.name="ashley";
person.hasChildren= true;
person.greet = function(){
    console.log("hi,i am"+ this.name);
}

//NOT A GOOD WAY OF WRITING
const person2 ={
    'first name':'alley',
    'last name': 'jones'
}
console.log(person2['first name'])
//console.log(person.greet());
//challenge 1
/*const arr = [1,2,3,4,5];
arr.push(6);
console.log(arr.reverse());

//challenge 2
const arr1 = [1,2,3,4,5];
const arr2 =[5,6,7,8,9,10];
let x = arr2.slice(1,5);
const arr3 = arr1.concat(x);
console.log(arr3);

//const arr =[34,50,49,10];
/*const fruits = ['apple', 'banana', 'pear'];
const berries = ['strawberries', 'rasberry', 'blueberry'];
fruits.push(berries);
const allFruits = [fruits, berries];
//x = fruits[3][1];
x = fruits.concat(berries);

x = [...fruits, ...berries];
//flatten fruits
x = fruits.flat();
x= Array.isArray('hello');
//x= fruits.isArray('i');
console.log(x);
//spread (...)

//arr.push('a');
//console.log(arr);
/*arr.pop();
console.log(arr);
arr.unshift(99);
console.log(arr);
arr.shift();
console.log(arr);
arr.reverse();
console.log(arr);
console.log(arr.includes(20));

//arrays and objects
/*
//arr literals
const color=["red", 'blue', 'orage'];

//constructor
const number = new Array(1, 3, 5,6 );
let x = number[0]+ number[2];
let mix = ['red', 5, 90.4, true];
x = mix[0] +mix[3];
mix.length=0;
mix[mix.length]= "berry";
console.log(x);
//DATE
//Month starts from 0 to 11
/*let x;
let d = new Date(1989,1,22);
//d = new Date('10/12/2011 12:30')
d= Date.now();          //exact timestamp
d=d.valueOf();
//d = new Date(1708810673366);
//closest to setting time to another timezone
//US works but with en-IN, it does not work. Ask prof
//d = new Date(new Date().toLocaleString('en-US',{timeZone:'Asia/Kolkata'}))
//d= Math.floor(Date.now()/1000); //to avoid millisec
x = Intl.DateTimeFormat('default', {month:'long'}).format(d);
//x=`${d.getDate()-d.getMonth()}-${d.getFullYear()}`;
console.log(x);
*/

//.length
/*const num = new Number(30.89800);
x = num.toString().length;
x = num.toPrecision(4);
x= num.toExponential(2);
x= num.toLocaleString('ar-EG');     //LOCAL numbers
x= Number.MAX_SAFE_INTEGER;
console.log(x);

/*x=5*'5';        //changes this into a number
x= Number(null);
x= 5+true;
x= 5+ undefined;
console.log(x, typeof x);

//MATH
/*let x;
x= 4-4;
x='hello';
x+=2;
console.log(x);

//TYPECASTING
/*let amount =0;
//amount = parseInt(amount);
//amount = +amount;
//amount = Number(amount);
//amount = amount.toString();
//amount =String(amount);

//change string to decimal
//amount = Boolean(amount);
console.log(amount, typeof amount);
console.log('foo');*/