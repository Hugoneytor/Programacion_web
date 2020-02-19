// var obj = {
//     greet : 'Hello',
//     uno : function(){
//         console.log("Hola xD");
//     }
// }

// console.log(obj.greet);
// console.log(obj['greet']);
// var prop = 'uno';

// obj['greet'];


var a = [];

a.push(function(){
    console.log('Hola mundo 1');
});

a.push(function(){
    console.log('Hola mundo 2');
});
a.push(function(){
    console.log('Hola mundo 3');
});

a.forEach(function(xd){
    xd();
});

