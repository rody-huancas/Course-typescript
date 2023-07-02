// en los parametros especificar de que tipo será
function saludar(name) {
    console.log("Hola ".concat(name));
}
saludar("Rody");
// pasar un objeto
function saludar2(_a) {
    var name = _a.name, age = _a.age;
    console.log("Hola ".concat(name, ", tiene  ").concat(age));
}
saludar2({ name: "Rody", age: 23 });
// otra forma de pasar el objeto
function saludar3(persona) {
    var name = persona.name, age = persona.age;
    console.log("Hola ".concat(name, ", tiene  ").concat(age));
}
saludar3({ name: "Juan", age: 50 });
// funcion con retorno
// esto devuelve un number, ya que así lo definimos en el objeto
function saludar4(_a) {
    var name = _a.name, age = _a.age;
    console.log("Hola ".concat(name, ", tiene  ").concat(age));
    return age;
}
var username;
username = saludar4({ name: "luis", age: 18 });
console.log(username);
// también se le puede decir a la funcion que tipo de dato tiene que retornar, agregando después de los () el tipo de dato
function saludar5(_a) {
    var name = _a.name, age = _a.age;
    console.log("Hola ".concat(name, ", tiene  ").concat(age));
    return name;
}
var nombre = saludar5({ name: "Pedro", age: 35 });
console.log(nombre);
// usar funciones como parametro, ese parametro lo tipamos de tipo string, y también indicamos que será de tipo void, ya que no retornará nada, pero en el caso que retorne, se la cambiaría ese void por el tipo de dato que retornará
var sayHiFromFunction = function (fn) {
    return fn("Rody"); // retorna la funcion ejecutandose y pasando como parametro una cadena
};
sayHiFromFunction(function (name) {
    console.log("Hola ".concat(name));
});
// Tipar un arrow function
var sumar = function (a, b) {
    return a + b;
};
console.log(sumar(4, 2));
// otra forma de tipar un arrow function
var restar = function (a, b) {
    return a - b;
};
console.log(restar(7, 3));
