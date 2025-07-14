// -------------------- carrito.js --------------------
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

/* ===== API pública ===== */
export function agregarAlCarrito(producto) {
  const yaExiste = carrito.find(item => item.id === producto.id);

  if (yaExiste) {
    yaExiste.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContador();
}

export function obtenerCarrito() {
  return carrito;
}

/* ===== UI ===== */
function actualizarContador() {
  const contador = document.getElementById("contador-carrito");
  const total = carrito.reduce((a, p) => a + p.cantidad, 0);

  if (total > 0) {
    contador.style.display = "inline-block";
    contador.textContent = total;
  } else {
    contador.style.display = "none";
  }
}


/* ===== listeners globales ===== */
const icono = document.getElementById("icono-carrito");
const dropdown = document.getElementById("dropdown-carrito");

/* cerrar al hacer click afuera */
document.addEventListener("click", e => {
  if (!icono.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = "none";
  }
});


/* ===== init ===== */
actualizarContador(); // pinta badge al cargar
// ----------------------------------------------------