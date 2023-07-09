// let hero = {
//   name: "Thor",
//   age: 1500,
// };

// no se le puede asignar una nueva propidad directa del objeto
// hero.power = 100

//--------------------------------------
// TEMPLATE UNION TYPES
type HeroId = `${string}-${string}-${string}-${string}-${string}`;

// type alias => siempre van en pascalCase
type Hero = {
  // readonly => solo será de lectura, para que no se
  //   readonly id?: string;
  //   id?: number;
  readonly id?: HeroId; //-> el id tiene que tendría que tener el mismo formato que el HeroId ya definido
  name: string;
  age: number;
  isActive?: true; //tenemos que pasarle el "?", lo cual quiere decir que es opcional, en el que diremos, si la propiedad está, será un boolean, y sino, no lo toma en cuenta
};

// este objeto hero, será de tipo Hero que hemos definido anterior
let hero: Hero = {
  name: "Thor",
  age: 1500,
};

// function createHero(name: string, age: number): Hero {
function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  //   si retornamos por ejm un id: "123", tomaría error, porque no tiene el formato definido en HeroId, a diferencia del crypto.randomUUID() que si te entrega ese formato
  return { id: crypto.randomUUID(), name, age, isActive: true };
}

const thor = createHero({ name: "Thor", age: 1500 });
console.log(thor);

// un ejemplo practico sería para guardar colores, por ejemplo pasar colores con almuadilla "#" o sin almuadilla, ahí es un ejemplo donde se puede agregar  el template union types
type HexadecimalColor = `#${string}`;

// const color: HexadecimalColor = "0033ff"; //-> genera un error ya que en la plantilla decimos que tiene que llevar almuadilla

const color2: HexadecimalColor = "#0033ff"; // con el formato definido

// ----------------------
// UNION TYPES

// es como si este typo será unca cadena con el valor local o => "|" o planetary o galactic o universal
type HeroPowerScale = "local" | "planetary" | "galactic" | "universal";

// definiendo una variable sería
let prueba: number | string; // la variable prueba puede ser un numero o un string

prueba = "pruebita";
// prueba = true; //error, porque hemos dicho que puede ser solo number o string

console.log(prueba);
