const obj = {num: 2};
const obj1 = {num: 5};

// call method
const addToThis = function(a, b, c) {
  return this.num + a + b + c;
}

console.log(addToThis.call(obj, 1, 2, 3)); // 1st argument should be the object
console.log(addToThis.call(obj1, 1, 2, 3)); // 1st argument should be the object

// apply method
const arr = [1, 2, 3];
console.log(addToThis.apply(obj, arr));
console.log(addToThis.apply(obj1, arr));

// bind method
const bound = addToThis.bind(obj); // Return the function of addToThis
console.log(bound(1, 2, 3));