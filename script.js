/* GUIA DE TRABAJO NUMERO 3 */

/* (1) Crear un arreglo llamado productos que contenga al menos 5 objetos literales con las propiedades: id, nombre, precio y stock.

       -  Agregar un nuevo producto usando push().
       - Eliminar el último producto con pop().
       - Mostrar el listado final en consola.

*/


/*const productos = [];

const producto_uno = {
    id: 100,
    nombre: "Don Satur",
    precio: 1500,
    stock: 100
}

const producto_dos = {
    id: 102,
    nombre: "Sonrisas",
    precio: 1700,
    stock: 120
}

const producto_tres = {
    id: 140,
    nombre: "Mana",
    precio: 1000,
    stock: 200
}

const producto_cuatro = {
    id: 110,
    nombre: "Vainillas",
    precio: 1200,
    stock: 70
}

const producto_cinco = {
    id: 240,
    nombre: "Pepas",
    precio: 2000,
    stock: 160
}


productos.push(producto_uno);
productos.push(producto_dos);
productos.push(producto_tres);
productos.push(producto_cuatro);
productos.push(producto_cinco);*/

const productos = [
    { id: 100, nombre: "Don Satur", precio: 1500, stock: 100 },
    { id: 102, nombre: "Sonrisas", precio: 1700, stock: 2 },
    { id: 140, nombre: "Mana", precio: 1000, stock: 200 },          /// FORMA MAS COMPACTA Y CONVENCIONAL ///
    { id: 110, nombre: "Vainillas", precio: 1200, stock: 7 },
    { id: 240, nombre: "Pepas", precio: 2000, stock: 160 }
];


console.log(productos); 

/* * -  Agregar un nuevo producto usando push(). * */

var producto_seis = {
    id: 400,
    nombre: "Rocklet",
    precio: 3000,
    stock: 20
}

productos.push(producto_seis);
console.log("Hemos agregado correctamente el sexto elemento!");

/* - Eliminar el último producto con pop(). */

productos.pop();
console.log("Hemos eliminado correctamente el ultimo elemento!");
console.log(productos);



/* (2) Usar filter() con una función anónima para obtener los productos cuyo stock sea mayor a 10. 
Luego, guardar el resultado en un nuevo arreglo productosEnStock y mostrarlo.  */
/*
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);*/
// Expected output: Array ["exuberant", "destruction", "present"]

const productosEnStock = productos.filter((producto => producto.stock > 10));
console.log(productosEnStock);

/* ...((producto => prducto.stock > 10)); ----- Se considera a "producto" como una variable que utilizo en la AF para almaenar cada objeto. */



/* (3) Usar find() con una función callback para encontrar un producto por su nombre. 
    Si lo encuentra, mostrarlo en la consola. Si no, mostrar el mensaje "Producto no encontrado". 

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12*/

const found = productos.find((producto => producto.nombre == "Pepas"));
console.log("Producto encontrado!: ", found);



/* (4) Usar reduce() con una arrow function para calcular el precio total de todos los productos. 
       Luego, realizar una función anónima que calcule el promedio de precios*/

const total = productos.reduce((acc, producto) => acc + producto.precio, 0); 
console.log("Precio en total: ", total); 

/* Dentro del 'reduce', "producto" es el valor actual del precio del objeto que el callback ingreso.*/

/*