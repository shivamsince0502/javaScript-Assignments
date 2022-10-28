// What is the difference between a generator and a function?
/*
ES6 introduces a new concept called Generator (or Generator function). It gives you a new way to work with iterators and functions. The ES6 generator is a new type of function that can be paused in the middle or many times in the middle and resumed later. In the standard function, control remains with the called function until it returns, but the generator function in ES6 allows the caller function to control the execution of a called function.
*/

// What is the syntax of a generator?
/*
Syntax: Generator functions have a similar syntax to regular functions. As the only difference, the generator function is denoted by an asterisk (*) after the function keyword.
*/

// Are function generators iterable in JavaScript?
/*
Is a generator function iterable?
Generators are functions having an yield keyword. Any function which has “yield” in it is a generator. Calling a generator function creates an iterable. Since it is an iterable so it can be used with iter() and with a for loop.
*/

function* fun(k, l) {
  yield k + l;
  yield k * l;
}
let obj = fun(5, 6);
console.log(obj.next());
console.log(obj.next());


var i = 0;
function* infGen() {
  ++i;
  yield i;
}
let ob = infGen();
for(let i = 0; i < 7; i++)
  console.log(ob.next());

  function* gen() {
    while (true) {
      try {
        yield 42;
      } catch (e) {
        console.log('Error caught!');
      }
    }
  }
  
  const g = gen();
  g.next();
  // { value: 42, done: false }
  g.throw(new Error('Something went wrong'));
  // "Error caught!"
  // { value: 42, done: false }
