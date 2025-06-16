let total = 0.0;
const productos = [];

document.querySelector('#frmVenta').addEventListener('submit', (e) => {
    e.preventDefault();

    const marca = getMarca();
    const cantidad = parseInt(getCantidad());

    if (!validarDatos(marca, cantidad)) return;

    const precio = asignarPrecio(marca);
    const descuento = calcularDescuento(marca, precio);
    const importe = calcularImporte(precio, descuento, cantidad);

    const producto = {
        brand: marca,
        quantity: cantidad,
        price: precio,
        discount: descuento,
        amount: importe
    };

    productos.push(producto);

    renderizarTablaConEliminar();
});

function renderizarTablaConEliminar() {
    const tabla = document.getElementById('tblVenta');
    tabla.innerHTML = '';

    const thead = tabla.createTHead();
    const header = thead.insertRow();
    ['MARCA', 'CANTIDAD', 'PRECIO', 'DESCUENTO', 'IMPORTE', 'ACCIONES'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        header.appendChild(th);
    });

    const tbody = tabla.createTBody();
    productos.forEach((p, index) => {
        const row = tbody.insertRow();
        row.insertCell().textContent = p.brand;
        row.insertCell().textContent = p.quantity;
        row.insertCell().textContent = p.price.toFixed(2);
        row.insertCell().textContent = p.discount.toFixed(2);
        row.insertCell().textContent = p.amount.toFixed(2);

        const cellAccion = row.insertCell();
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.className = 'btn btn-danger btn-sm';
        btnEliminar.addEventListener('click', () => {
            eliminarProducto(index);
        });
        cellAccion.appendChild(btnEliminar);
    });

    actualizarTotales();
}

function eliminarProducto(index) {
    total -= productos[index].amount;
    productos.splice(index, 1);
    renderizarTablaConEliminar();
}

function actualizarTotales() {
    const subtotal = productos.reduce((acc, p) => acc + p.amount, 0);
    const igv = calcularIGV(subtotal);
    const totalNeto = calcularTotal(subtotal, igv);

    const tabla = document.getElementById('tblVenta');
    const tfoot = tabla.createTFoot();

    const rowSubtotal = tfoot.insertRow();
    rowSubtotal.insertCell().colSpan = 4;
    rowSubtotal.insertCell().innerHTML = '<strong>SUBTOTAL</strong>';
    rowSubtotal.insertCell().innerHTML = `<span class="bg-success p-2 text-white">S/ ${subtotal.toFixed(2)}</span>`;

    const rowIGV = tfoot.insertRow();
    rowIGV.insertCell().colSpan = 4;
    rowIGV.insertCell().innerHTML = '<strong>IGV 18%</strong>';
    rowIGV.insertCell().innerHTML = `<span class="bg-success p-2 text-white">S/ ${igv.toFixed(2)}</span>`;

    const rowTotal = tfoot.insertRow();
    rowTotal.insertCell().colSpan = 4;
    rowTotal.insertCell().innerHTML = '<strong>NETO</strong>';
    rowTotal.insertCell().innerHTML = `<span class="bg-success p-2 text-white">S/ ${totalNeto.toFixed(2)}</span>`;

    document.querySelector('#subtotal').textContent = formatoMoneda(subtotal);
    document.querySelector('#igv').textContent = formatoMoneda(igv);
    document.querySelector('#total').textContent = formatoMoneda(totalNeto);
}

// Lógica de negocio
function calcularSubtotal(importe) {
    total += importe;
    return total;
}

const calcularIGV = subtotal => subtotal * 0.18;
const calcularTotal = (subtotal, igv) => subtotal - igv;
const calcularImporte = (precio, descuento, cantidad) => (precio - descuento) * cantidad;

function calcularDescuento(marca, precio) {
    const descuentos = {
        Paraiso: 0.05,
        Rosen: 0.10,
        Cisne: 0.10,
        Drimer: 0.15,
        Forli: 0.05
    };
    return precio * (descuentos[marca] || 0);
}

function asignarPrecio(marca) {
    const precios = {
        Paraiso: 350.00,
        Rosen: 400.00,
        Cisne: 550.00,
        Drimer: 750.00,
        Forli: 300.00
    };
    return precios[marca] || 0;
}

// Utilitarios
const getMarca = () => document.querySelector('#selectMarca').value;
const getCantidad = () => document.querySelector('#cantidad').value;

function validarDatos(marca, cantidad) {
    if (!marca || isNaN(cantidad) || cantidad <= 0) {
        alert('Debe seleccionar una marca válida y una cantidad mayor a cero');
        return false;
    }
    return true;
}

const formatoMoneda = valor =>
    valor.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' });