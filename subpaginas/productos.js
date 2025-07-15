import { agregarAlCarrito } from '../../carrito.js';
export function mostrar_productos(productos) {
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
}
