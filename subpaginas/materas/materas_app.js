import { mostrar_productos } from '../productos.js';

const productos = [
  { id: 16, nombre: "Matera de Cuero", precio: 500, imagen: "../../src/materas/matera.png"},
  { id: 17, nombre: "Matera de Cuero con cierre", precio: 1000, imagen: "../../src/materas/matera_cerrada.png"},
  { id: 18, nombre: "Matera Blanca", precio: 1500, imagen: "../../src/materas/matera_blanca.png"},
 
];

mostrar_productos(productos);