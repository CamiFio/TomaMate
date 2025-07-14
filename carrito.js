let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
export function agregarAlCarrito(producto) {
  // Busco si el producto ya está en el carrito
  const productoEnCarrito = carrito.find(item => item.id === producto.id);

  if (productoEnCarrito) {
    // Si está, aumento la cantidad
    productoEnCarrito.cantidad += 1;
  } else {
    // Si no está, agrego con cantidad 1
    carrito.push({...producto, cantidad: 1});
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  let total = carrito.reduce((acum, item) => acum + item.cantidad, 0);
  actualizarContador(total)
  console.log("agregando.. {}", producto);
  console.log("elementos actuales: {}", carrito);
}

let total = carrito.reduce((acum, item) => acum + item.cantidad, 0);
actualizarContador(total)

export function obtenerCarrito() {
  return carrito;
}

function actualizarContador(cantidad) {
  const contador = document.getElementById("contador-carrito");
  
  if (cantidad > 0) {
    contador.style.display = "inline-block";
    contador.textContent = cantidad; // o "" si solo querés el círculo azul
  } else {
    contador.style.display = "none";
  }
}

document.getElementById("icono-carrito").addEventListener("click", () => {
  const dropdown = document.getElementById("dropdown-carrito");
  const carritoActual = obtenerCarrito();

  // Toggle
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
    return;
  }

  dropdown.innerHTML = "";

  if (carritoActual.length === 0) {
    dropdown.innerHTML = "<p>El carrito está vacío</p>";
  } else {
    carritoActual.forEach((producto, index) => {
      const item = document.createElement("div");
      item.className = "item-carrito";

      item.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div class="item-info">
          <strong>${producto.nombre}</strong><br>
          <div class="item-controles">
            <button class="boton-cantidad" onclick="modificarCantidad(${index}, -1)">-</button>
            <span>${producto.cantidad}</span>
            <button class="boton-cantidad" onclick="modificarCantidad(${index}, 1)">+</button>
          </div>
        </div>
      `;

      dropdown.appendChild(item);
    });
  }

  dropdown.style.display = "block";
});

function modificarCantidad(index, delta) {
  const producto = carrito[index];

  producto.cantidad += delta;
  if (producto.cantidad <= 0) {
    carrito.splice(index, 1); // lo elimina
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContador(carrito.reduce((a, p) => a + p.cantidad, 0));
  
  // Refrescar visual del dropdown
  document.getElementById("icono-carrito").click(); // cerrar
  document.getElementById("icono-carrito").click(); // volver a abrir
}


document.addEventListener("click", (e) => {
  const carritoIcon = document.getElementById("icono-carrito");
  const dropdown = document.getElementById("dropdown-carrito");

  if (!carritoIcon.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = "none";
  }
});


function limpiarCarrito() {
  carrito.length = 0; // vacía el array
  localStorage.removeItem("carrito"); // o localStorage.setItem("carrito", "[]");
  actualizarContador(0);

  const dropdown = document.getElementById("dropdown-carrito");
  dropdown.style.display = "none";
}
limpiarCarrito()