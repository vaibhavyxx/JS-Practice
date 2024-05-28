//this will give us an error
//const user = 'Dave';

//this is an iife where you declare it locally
(function () {
    const user = 'Dave';
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');
    hello();
})();

//another way of doing an iife
(function (name) {
    console.log('Hello '+ name);
})('Shawn');