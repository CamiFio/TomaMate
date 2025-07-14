let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const container = document.getElementById("carrito-products");

function actualizarCarrito() {
  container.innerHTML = "";

  carrito.forEach((producto, index) => {
    const row = document.createElement("div");
    row.className = "carrito-row";

    row.innerHTML = `
      <div class="carrito-info">
        <img src="${producto.imagen}" alt="${producto.nombre}" class="carrito-img">
        <div class="carrito-detalle">
          <div class="producto-nombre">${producto.nombre}</div>
          <div class="botonera">
            <button class="btn-menos" data-index="${index}">−</button>
            <span class="cantidad">${producto.cantidad}</span>
            <button class="btn-mas" data-index="${index}">+</button>
          </div>
        </div>
      </div>
      <div class="producto-precio">
        $${(producto.precio * producto.cantidad).toLocaleString()}
      </div>
    `;

    container.appendChild(row);
  });

  // Eventos
  container.querySelectorAll(".btn-menos").forEach(btn =>
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      carrito[index].cantidad--;
      if (carrito[index].cantidad <= 0) carrito.splice(index, 1);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      actualizarCarrito();
    })
  );

  container.querySelectorAll(".btn-mas").forEach(btn =>
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      carrito[index].cantidad++;
      localStorage.setItem("carrito", JSON.stringify(carrito));
      actualizarCarrito();
    })
  );
}



actualizarCarrito();