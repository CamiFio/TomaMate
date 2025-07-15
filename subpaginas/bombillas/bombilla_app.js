import { mostrar_productos } from '../productos.js';

const productos = [
  { id: 5, nombre: "Bombilla de Alpaca", precio: 1999, imagen: "../../src/bombillas/bombilla.png"},
  { id: 6, nombre: "Bombilla de Acero Inoxidable", precio: 1000, imagen: "../../src/bombillas/bombilla_acero_inoxidable.png"},
  { id: 7, nombre: "Bombilla Mateo", precio: 1500, imagen: "../../src/bombillas/bombilla mateo.png"},
  { id: 8, nombre: "Bombilla de Color", precio: 3000, imagen: "../../src/bombillas/bombilla_color.png"},
];

mostrar_productos(productos);
