import { mostrar_productos } from "../productos.js";

const productos = [
  {
    id: 13,
    nombre: "Yerba Mate TomaMate",
    precio: 500,
    imagen: "../../src/yerbas/yerba.png",
  },
  {
    id: 14,
    nombre: "Yerba Mate Canarias",
    precio: 1000,
    imagen: "../../src/yerbas/yerba_canarias.png",
  },
  {
    id: 15,
    nombre: "Yerba Mate Organica",
    precio: 1500,
    imagen: "../../src/yerbas/yerba_organica.png",
  },
];

mostrar_productos(productos);
