var a = {
  name: 'NameA',
  getName() {
    return this.name;
  },
};
var b = { name: 'nameB' }; //... todo smthb.getName(); // = "nameB"

console.log(a.getName());

console.log(a.getName.call(b));

// destructuring
for (var i = 0; i < 10; i++) {
  fn(i);
}
function fn(...args) {
  console.log(args);
}
