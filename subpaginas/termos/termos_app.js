import { mostrar_productos } from '../productos.js';

const productos = [
    { id: 19, nombre: "Termo Stanley 1.2L", precio: 5000, imagen: "../../src/termos/termo.png" },
    { id: 20, nombre: "Termo de Acero Inoxidable 1L", precio: 1000, imagen: "../../src/termos/termo_acero.png" },
    { id: 21, nombre: "Termo Grabado Personalizado", precio: 1500, imagen: "../../src/termos/termo_grabado.png" },
];

mostrar_productos(productos);