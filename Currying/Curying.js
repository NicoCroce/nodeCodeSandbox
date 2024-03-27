const URL = (_host) => (_path) => `${_host}${_path}`;

const Base = URL("http://new/api/");

console.log(Base("products"));
console.log(Base("sales"));
console.log(Base("auth"));


const BaseOld = URL("http://old/api/");
console.log(BaseOld("products"));
console.log(BaseOld("sales"));
console.log(BaseOld("auth"));