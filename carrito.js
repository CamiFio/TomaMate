let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

export function agregarAlCarrito(producto) {
  const yaExiste = carrito.find((item) => item.id === producto.id);

  if (yaExiste) {
    yaExiste.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContador();
  mostrarPopup();
}

export function obtenerCarrito() {
  return carrito;
}

export function actualizarContador() {
  const contador = document.getElementById("contador-carrito");
  const total = carrito.reduce((a, p) => a + p.cantidad, 0);

  if (total > 0) {
    contador.style.display = "inline-block";
    contador.textContent = total;
  } else {
    contador.style.display = "none";
  }
}

export function mostrarPopup(mensaje = "Producto añadido al carrito") {
  const container = document.getElementById("popup-container");

  const toast = document.createElement("div");
  toast.className = "popup";
  toast.textContent = mensaje;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

export function limpiarCarrito() {
  localStorage.setItem("carrito", JSON.stringify([]));
  actualizarContador();
}

actualizarContador(); 

