import { mostrar_productos } from '../productos.js';

const productos = [
  { id: 9, nombre: "Grabado Mate de Calabaza Personalizado", precio: 3000, imagen: "../../src/grabados/Grabado.png"},
  { id: 10, nombre: "Grabado Mate de Cuero Personalizado", precio: 2500, imagen: "../../src/grabados/grabado_cuero.png"},
  { id: 11, nombre: "Grabado Mate de Madera Personalizado", precio: 2100, imagen: "../../src/grabados/grabado_madera.png"},
  { id: 12, nombre: "Grabado Mate de Algarrobo Personalizado", precio: 4000, imagen: "../../src/grabados/grabado_virola_algarrobo.png"},
];

mostrar_productos(productos);
