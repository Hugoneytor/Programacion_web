// function statement
function greet(){
    console.log(`hi`);
}

greet();

// functions are first-class
function logGreeting(fn){
    fn();
}


logGreeting(greet);


// let logGreeting = fn =>{
//     fn();
// }
// logGreeting(greet);

// let logGreeting = (()=>{
//     console.log('hi');
// });

// logGreeting(()=>{
//     console.log(`Hi`);
// });


//NOTAS:
//function expression

// arrow functions
//string literals
//first - lass functions
//function expressions on the fly
//refactor
//codereview

//modules (private) - module patterns > expor > function, obj, const, nada
//require
//exports
