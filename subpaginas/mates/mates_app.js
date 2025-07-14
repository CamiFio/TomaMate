import { agregarAlCarrito } from '../../carrito.js';

const productos = [
  { id: 1, nombre: "Mate de Madera", precio: 1999, imagen: "../../src/mates/mate.png" },
  { id: 2, nombre: "Mate de Cerámica", precio: 2000, imagen: "../../src/mates/ceramica.png" },
  { id: 3, nombre: "Mate de Acero Inoxidable", precio: 2500, imagen: "../../src/mates/acero inoxidable.png" },
  { id: 4, nombre: "Mate Enlozado chico", precio: 1500, imagen: "../../src/mates/enlozado.png" }
];

const container = document.getElementById("productos-container");

productos.forEach(producto => {
  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-md-4";

  col.innerHTML = `
    <div class="card h-100">
      <img src="${producto.imagen}" class="card-img-top product-img" alt="${producto.nombre}">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">$${producto.precio}</p>
        <button type="button" class="btn btn-primary btn-compra">Agregar al carrito</button>
      </div>
    </div>
  `;

  // Ahora buscamos el botón dentro del div 'col' que acabamos de crear
  const botonAgregar = col.querySelector('button.btn-compra');

  // Agregamos el event listener al botón para agregar el producto correspondiente
  botonAgregar.addEventListener('click', () => {
    agregarAlCarrito(producto);
  });

  // Finalmente agregamos el 'col' al container del DOM
  container.appendChild(col);
});
