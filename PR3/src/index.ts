interface Producto {
  id: number;
  nombre: string;
  cantidad: number;
  precio: number;
  total: number;
}

let productos: Producto[] = [];
let productoId = 1;
const IVA = 0.21;

function calcularTotales() {
  const subtotal = productos.reduce((sum, prod) => sum + prod.total, 0);
  const impuestos = subtotal * IVA;
  const total = subtotal + impuestos;

  (document.getElementById("subtotal") as HTMLElement).textContent = subtotal.toFixed(2) + " €";
  (document.getElementById("impuestos") as HTMLElement).textContent = impuestos.toFixed(2) + " €";
  (document.getElementById("total") as HTMLElement).textContent = total.toFixed(2) + " €";
}

function actualizarFila(id: number) { 
  const producto = productos.find(p => p.id === id);
  if (!producto) return;

  const cantidadInput = document.getElementById(`cantidad-${id}`) as HTMLInputElement;
  const precioInput = document.getElementById(`precio-${id}`) as HTMLInputElement;
  
  producto.cantidad = parseInt(cantidadInput.value) || 1;
  producto.precio = parseFloat(precioInput.value) || 0;
  producto.total = producto.cantidad * producto.precio;

  document.getElementById(`total-${id}`)!.textContent = producto.total.toFixed(2) + " €";
  calcularTotales();
}

function eliminarFila(id: number) {
  productos = productos.filter(p => p.id !== id);
  document.getElementById(`row-${id}`)?.remove();
  calcularTotales();
}

function addRow() {
  const nombre = prompt("Introduce el nombre del producto:");
  if (!nombre) return;

  const nuevoProducto: Producto = {
    id: productoId++,
    nombre,
    cantidad: 1,
    precio: 0,
    total: 0,
  };
  productos.push(nuevoProducto);

  const productosBody = document.getElementById("productosBody") as HTMLElement;
  const row = document.createElement("tr");
  row.id = `row-${nuevoProducto.id}`;

  row.innerHTML = `
    <td>${nuevoProducto.nombre}</td>
    <td><input type="number" id="cantidad-${nuevoProducto.id}" value="${nuevoProducto.cantidad}" min="1" onchange="actualizarFila(${nuevoProducto.id})"></td>
    <td><input type="number" id="precio-${nuevoProducto.id}" value="${nuevoProducto.precio.toFixed(2)}" min="0" step="0.01" onchange="actualizarFila(${nuevoProducto.id})"></td>
    <td id="total-${nuevoProducto.id}">${nuevoProducto.total.toFixed(2)} €</td>
    <td><button onclick="eliminarFila(${nuevoProducto.id})">Eliminar</button></td>
  `;

  productosBody.appendChild(row);
  calcularTotales();
}

