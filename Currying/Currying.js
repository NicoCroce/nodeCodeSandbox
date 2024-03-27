console.log("👉 Plain")
console.log(`http://old/api/products`);
console.log(`http://old/api/products`);
console.log(`http://old/api/products`);
console.log("\n")

console.log("👉 Another way to write the code using constant");
const _BaseOld = "http://old/api/";
console.log(`${_BaseOld}products`);
console.log(`${_BaseOld}products`);
console.log(`${_BaseOld}products`);
console.log("\n")


console.log("👉 Using functions");
const convert = (path) => `https://new/api/${path}`;
console.log(convert("products"));
console.log(convert("sales"));
console.log(convert("auth"));
console.log("🔴 If you need to change the host, you cannot use the same function.\n")



console.log("👉 Using currying");
const URL = (_host) => (_path) => `${_host}${_path}`;

const Base = URL("https://new/api/");
console.log(Base("products"));
console.log(Base("sales"));
console.log(Base("auth"));


const BaseOld = URL("http://old/api/");
console.log(BaseOld("products"));
console.log(BaseOld("sales"));
console.log(BaseOld("auth"));