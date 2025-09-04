/* GUIA DE TRABAJO NUMERO 3 */

/* (1) Crear un arreglo llamado productos que contenga al menos 5 objetos literales con las propiedades: id, nombre, precio y stock.

       -  Agregar un nuevo producto usando push().
       - Eliminar el último producto con pop().
       - Mostrar el listado final en consola.

*/


const productos = [];

var producto_uno = {
    id: 100,
    nombre: "Don Satur",
    precio: 1500,
    stock: 100
}

var producto_dos = {
    id: 102,
    nombre: "Sonrisas",
    precio: 1700,
    stock: 120
}

var producto_tres = {
    id: 140,
    nombre: "Mana",
    precio: 1000,
    stock: 200
}

var producto_cuatro = {
    id: 110,
    nombre: "Vainillas",
    precio: 1200,
    stock: 70
}

var producto_cinco = {
    id: 240,
    nombre: "Pepas",
    precio: 2000,
    stock: 160
}


productos.push(producto_uno);
productos.push(producto_dos);
productos.push(producto_tres);
productos.push(producto_cuatro);
productos.push(producto_cinco);

console.log(productos); 

var producto_seis = {
    id: 400,
    nombre: "Rocklet",
    precio: 3000,
    stock: 20
}

productos.push(producto_seis);

console.log(productos);