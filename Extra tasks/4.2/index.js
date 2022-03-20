const sub = function (a, b) {
  if (arguments.length === 1) {
    return function (b) {
      return b - a;
    };
  }
  else return a - b;
}
const add = function (a, b) {
  if (arguments.length === 1) {
    return function (b) {
      return b + a;
    };

  }
  else return a + b;
}
const mul = function (a, b) {
  if (arguments.length === 1) {
    return function (b) {
      return b * a;
    };

  }
  else return a * b;
}
const div = function (a, b) {
  if (arguments.length === 1) {
    return function (b) {
      return b / a;
    };

  }
  else return a / b;
}
const pipe = function (...fs) {
  return function (b) {
    return fs.reduce((res, f) => f(res), b);
  }
}
let a = add(1, 2); // 3
let b = mul(a, 10); // 30
let sub1 = sub(1); // sub1 отнимает от любого числа единицу
let c = sub1(b); // 29
let d = mul(sub(a, 1))(c); // 58
let doSmth = pipe(add(d), sub(c), mul(b), div(a));
let result = doSmth(0);// (((0 + 58) - 29) * 30) / 3 = 290
let x = pipe(add(1), mul(2))(3); // 8
console.log(`${result}, ${x}`)
