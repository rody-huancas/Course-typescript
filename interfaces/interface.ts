// Interface => es una forma de definir la estructura de un objeto
/*
Proporciona una manera de describir los tipos de propiedades y métodos que debe tener un objeto, pero no proporciona una implementación real de esos métodos.
*/

interface Heroe {
  id: string;
  name: string;
  age: number;
  saludar: () => void;
}

const heroe: Heroe = {
  id: "1",
  name: "Cap. America",
  age: 70,
  saludar: () => {
    console.log(`Hola`);
  },
};

//----------------------------------------------------------------
// interface anidada
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  quantity: number;
}

// heredar de producto
interface Zapatilla extends Producto {
  talla: number;
}

interface CarritoDeCompras {
  totalPrice: number;
  //   productos: Producto[]; // <- array de los productos
  productos: Zapatilla[];
}

const carrito: CarritoDeCompras = {
  totalPrice: 340,
  productos: [
    {
      id: 1,
      nombre: "Producto 1",
      precio: 100,
      quantity: 1,
      talla: 40,
    },
    {
      id: 2,
      nombre: "Producto 2",
      precio: 120,
      quantity: 2,
      talla: 40,
    },
  ],
};

console.log(carrito);
