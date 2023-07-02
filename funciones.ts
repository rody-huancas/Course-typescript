// en los parametros especificar de que tipo será
function saludar(name: string) {
  console.log(`Hola ${name}`);
}

saludar("Rody");

// pasar un objeto
function saludar2({ name, age }: { name: string; age: number }) {
  console.log(`Hola ${name}, tiene  ${age}`);
}
saludar2({ name: "Rody", age: 23 });

// otra forma de pasar el objeto
function saludar3(persona: { name: string; age: number }) {
  const { name, age } = persona;
  console.log(`Hola ${name}, tiene  ${age}`);
}

saludar3({ name: "Juan", age: 50 });

// funcion con retorno
// esto devuelve un number, ya que así lo definimos en el objeto
function saludar4({ name, age }: { name: string; age: number }) {
  console.log(`Hola ${name}, tiene  ${age}`);
  return age;
}

let username: number;
username = saludar4({ name: "luis", age: 18 });
console.log(username);

// también se le puede decir a la funcion que tipo de dato tiene que retornar, agregando después de los () el tipo de dato
function saludar5({ name, age }: { name: string; age: number }): string {
  console.log(`Hola ${name}, tiene  ${age}`);
  return name;
}

let nombre: string = saludar5({ name: "Pedro", age: 35 });
console.log(nombre);

// usar funciones como parametro, ese parametro lo tipamos de tipo string, y también indicamos que será de tipo void, ya que no retornará nada, pero en el caso que retorne, se la cambiaría ese void por el tipo de dato que retornará
const sayHiFromFunction = (fn: (name: string) => void) => {
  return fn("Rody"); // retorna la funcion ejecutandose y pasando como parametro una cadena
};

sayHiFromFunction((name: string) => {
  console.log(`Hola ${name}`);
});

// Tipar un arrow function
const sumar = (a: number, b: number) => {
  return a + b;
};

console.log(sumar(4, 2));

// otra forma de tipar un arrow function
const restar: (a: number, b: number) => number = (a, b) => {
  return a - b;
};

console.log(restar(7, 3));
