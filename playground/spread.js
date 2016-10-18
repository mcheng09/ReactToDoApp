// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Mike', 25];
var personTwo = ['Andy', 22];
// Hi Mike, you are 25
// Hi Andy, you are 25
function greeting(name, age) {
  console.log("Hi " + name + ", you are " + age)
}
greeting(...person);
greeting(...personTwo);

var names = ['Jen', 'Matt'];
var final = ['Ben'];

function hello() {
  var array = [...names, ...final]
  array.forEach(function(name) {
    console.log('Hi ' + name + '!');
  });
}

hello();
