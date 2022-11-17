/**
 How does async/await help with performance and scalability?
 => They can make your application handle more users. Most multi-user applications, such as web sites, use a thread for each user session. ...
You can process multiple I/O bound methods in parallel. ...
You can make your interface more responsive to the user.

Is it possible to use async/await with promise chains? If yes,
how can this be achieved?

=>  You can use any of the two syntaxes you might prefer to use. The await keyword pauses the execution of the async function and waits for the passed Promise 's resolution, and then resumes the async function's execution and returns the resolved value. The await keyword is only valid inside async functions.

3). Give 3 real world examples where async/await has been used?
=> Take a shower.
Eat breakfast.
Get dressed.
Put on makeup.
Check the news.

4 => 3

5 => 1
Error: some error
    at c:\Users\Asus\Desktop\Practice\webDev\JavaScript Learning\assignments.js:26:10
    at new Promise (<anonymous>)
    at Object.<anonymous> (c:\Users\Asus\Desktop\Practice\webDev\JavaScript Learning\assignments.js:25:9)
    at Module._compile (node:internal/modules/cjs/loader:1103:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1155:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47


6 => 3
2
1
Go!

7=> 15

Is it possible to nest async functions in JavaScript? Explain with
examples.

=> it is possible to do perform next async functions

What is the best way to avoid deadlocks when using
async/await?
=> Fix 1: Avoid 1,4. Instead of blocking the UI thread, use var data = await GetDataAsync() , which allows the UI thread to keep running.
Fix 2: Avoid 2,3. Queue the continuation of the await to a different thread that is not blocked, e.g. use var data = Task. Run(GetDataAsync).


In which scenarios would you use synchronous code instead of
asynchronous code?
=> In synchronous operations tasks are performed one at a time and only when one is completed, the following is unblocked. In other words, you need to wait for a task to finish to move to the next one. In asynchronous operations, on the other hand, you can move to another task before the previous one finishes.09


 */

