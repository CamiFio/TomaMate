import { mostrar_productos } from "../productos.js";

const productos = [
  {
    id: 1,
    nombre: "Mate de Madera",
    precio: 1999,
    imagen: "../../src/mates/mate.png",
  },
  {
    id: 2,
    nombre: "Mate de Cerámica",
    precio: 2000,
    imagen: "../../src/mates/ceramica.png",
  },
  {
    id: 3,
    nombre: "Mate de Acero Inoxidable",
    precio: 2500,
    imagen: "../../src/mates/acero inoxidable.png",
  },
  {
    id: 4,
    nombre: "Mate Enlozado chico",
    precio: 1500,
    imagen: "../../src/mates/enlozado.png",
  },
];

mostrar_productos(productos);
