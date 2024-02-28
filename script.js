//DATE
//Month starts from 0 to 11
let x;
let d = new Date(1989,1,22);
//d = new Date('10/12/2011 12:30')
d= Date.now();          //exact timestamp
d=d.valueOf();
d = new Date(1708810673366);
//closest to setting time to another timezone
//US works but with en-IN, it does not work. Ask prof
d = new Date(new Date().toLocaleString('en-US',{timeZone:'Asia/Kolkata'}))
//d= Math.floor(Date.now()/1000); //to avoid millisec
x = d.getHours();
//x=`${d.getDate()-d.getMonth()}-${d.getFullYear()}`;
console.log(x);


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