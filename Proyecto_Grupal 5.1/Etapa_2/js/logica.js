

function Validadacion (){

    var username = document.getElementById('username').value;
    var password = document.getElementById('Password').value;

    if (username === 'Cosa' && password === 'Cosa') {
        // alert('Entra  al  inicio  se sesion  ');
        location.replace('./index.html');
    } else {
        alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
        document.getElementById('username').value = '';
        document.getElementById('Password').value = '';
        document.getElementById('username').focus();
    }
} ; 




let carrito = [];
let total = 0;

function agregarAlCarrito(productoNombre, productoPrecio, cantidadId) {
    const cantidadInput = document.getElementById(cantidadId);
    let cantidad = parseInt(cantidadInput.value);

    const productoExistente = carrito.find(item => item.nombre === productoNombre);

    if (productoExistente) {
        // Si el producto ya está en el carrito, actualiza la cantidad
        productoExistente.cantidad = cantidad;
        productoExistente.total = cantidad * productoPrecio;
    } else {
        // Si el producto no está en el carrito, agrégalo
        let producto = {
            nombre: productoNombre,
            precio: productoPrecio,
            cantidad: cantidad,
            total: cantidad * productoPrecio
        };
        carrito.push(producto);
    }

    total = calcularTotalCarrito();
    actualizarCarritoUI();
    mostrarCarrito(); // Mostrar el panel del carrito después de agregar un producto
}

function calcularTotalCarrito() {
    return carrito.reduce((total, item) => total + item.total, 0);
}

function incrementarCantidad(cantidadId) {
    const cantidadInput = document.getElementById(cantidadId);
    let cantidad = parseInt(cantidadInput.value);
    cantidad++;
    cantidadInput.value = cantidad;
}

function decrementarCantidad(cantidadId) {
    const cantidadInput = document.getElementById(cantidadId);
    let cantidad = parseInt(cantidadInput.value);
    if (cantidad > 0) {
        cantidad--;
        cantidadInput.value = cantidad;
    }
}

function actualizarCarritoUI() {
    const carritoLista = document.getElementById('carrito-lista');
    const totalElement = document.getElementById('total');
    
    carritoLista.innerHTML = '';
    carrito.forEach(producto => {
        const item = document.createElement('li');
        item.textContent = `${producto.nombre} - Cantidad: ${producto.cantidad} - $${producto.total.toFixed(2)}`;
        carritoLista.appendChild(item);
    });

    totalElement.textContent = total.toFixed(2);
}

function mostrarCarrito() {
    const carritoPanel = document.getElementById('carrito-panel');
    carritoPanel.classList.add('show');
}

function Despacho() {
    location.replace('./payments.html');
}


function PagoExitoso() {
    location.replace('PagoExitoso.html');
}