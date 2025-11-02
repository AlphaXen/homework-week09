console.log(x); // undifined

let obj = {foo: 'hello'};
console.log(obj.foo); // hello

obj = null;
console.log(obj.foo); //Uncaught TypeError