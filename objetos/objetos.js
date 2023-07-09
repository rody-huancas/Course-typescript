// let hero = {
//   name: "Thor",
//   age: 1500,
// };
// este objeto hero, será de tipo Hero que hemos definido anterior
var hero = {
    name: "Thor",
    age: 1500,
};
// function createHero(name: string, age: number): Hero {
function createHero(hero) {
    var name = hero.name, age = hero.age;
    //   si retornamos por ejm un id: "123", tomaría error, porque no tiene el formato definido en HeroId, a diferencia del crypto.randomUUID() que si te entrega ese formato
    return { id: crypto.randomUUID(), name: name, age: age, isActive: true };
}
var thor = createHero({ name: "Thor", age: 1500 });
console.log(thor);
// const color: HexadecimalColor = "0033ff"; //-> genera un error ya que en la plantilla decimos que tiene que llevar almuadilla
var color2 = "#0033ff"; // con el formato definido
// definiendo una variable sería
var prueba; // la variable prueba puede ser un numero o un string
prueba = "pruebita";
// prueba = true; //error, porque hemos dicho que puede ser solo number o string
console.log(prueba);
