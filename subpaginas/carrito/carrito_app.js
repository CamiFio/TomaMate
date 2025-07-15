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
      <div class="producto-nombre"><strong>${producto.nombre}</strong></div>
      <div class="botonera">
        <button class="btn-menos" data-index="${index}">−</button>
        <span class="cantidad">${producto.cantidad}</span>
        <button class="btn-mas" data-index="${index}">+</button>
      </div>
      <button class="btn-eliminar" data-index="${index}">Eliminar</button>
    </div>
  </div>
  <div class="producto-precio">
    $${(producto.precio * producto.cantidad).toLocaleString()}
  </div>
`;

    container.appendChild(row);
  });
  // Eventos
  container.querySelectorAll(".btn-menos").forEach((btn) =>
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      carrito[index].cantidad--;
      if (carrito[index].cantidad <= 0) carrito.splice(index, 1);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      actualizarCarrito();
    }),
  );

  container.querySelectorAll(".btn-mas").forEach((btn) =>
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      carrito[index].cantidad++;
      localStorage.setItem("carrito", JSON.stringify(carrito));
      actualizarCarrito();
    }),
  );

  container.querySelectorAll(".btn-eliminar").forEach((btn) =>
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      carrito.splice(index, 1);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      actualizarCarrito();
    }),
  );
  actualizarResumen(carrito);
}

const container_resumen = document.getElementById("resumen-compra");
let resumenRow = null;

function actualizarResumen(carrito) {
  const total_cantidad = carrito.reduce((a, p) => a + p.cantidad, 0);
  const subtotal_precio = carrito.reduce(
    (a, p) => a + p.cantidad * p.precio,
    0,
  );

  if (!resumenRow) {
    resumenRow = document.createElement("div");
    container_resumen.appendChild(resumenRow);
  }

  resumenRow.innerHTML = `
    <h4>Resumen de compra</h4>
    <div class="linea">
      <span>Productos (<span id="cantidad-productos">${total_cantidad}</span>)</span>
      <span id="subtotal">$${subtotal_precio.toLocaleString()}</span>
    </div>
    <div class="linea">
      <span>Envío</span>
      <span id="envio"><em>A convenir</em></span>
    </div>
    <hr>
    <div class="linea total">
      <span>Total</span>
      <span id="total">$${subtotal_precio.toLocaleString()}</span>
    </div>
    <button class="btn-continuar" ${total_cantidad === 0 ? "disabled" : ""}>Continuar compra</button>
  `;
}

actualizarCarrito();
actualizarResumen(carrito);
