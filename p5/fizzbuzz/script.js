//fizzbuzz challenge
//log numbers from 1 to 100
//for multiples of 3 print 'fizz'
//for multipes of 5 print 'buzz'

for(let i=1; i <=100; i++){
    if(i % 3==0){
        word = 'fizz';
    }
    else if(i % 5 ==0)
        word += 'buzz';
    else{
        word = i
    }
   // console.log(word);
}

//for of vs for in
//for of iterates through property names
//for in iterates through element valuesa

let arr = [3, 5, 6];

console.log("for in loop")
for(let i in arr){
    console.log(i);
}

console.log('for of loop')
for(let i of arr){
    console.log(i);
}

