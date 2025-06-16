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

    const subtotal = calcularSubtotal(importe);
    const igv = calcularIGV(subtotal);
    const totalNeto = calcularTotal(subtotal, igv);

    renderizarTabla(productos, subtotal, igv, totalNeto);

    document.querySelector('#subtotal').textContent = formatoMoneda(subtotal);
    document.querySelector('#igv').textContent = formatoMoneda(igv);
    document.querySelector('#total').textContent = formatoMoneda(totalNeto);
});

function renderizarTabla(productos, subtotal, igv, total) {
    let html = `
    <table class="table table-hover">
        <thead>
            <tr>
                <th>MARCA</th>
                <th>CANTIDAD</th>
                <th>PRECIO</th>
                <th>DESCUENTO</th>
                <th>IMPORTE</th>
            </tr>
        </thead>
        <tbody>`;

    for (const p of productos) {
        html += `
            <tr>
                <td>${p.brand}</td>
                <td>${p.quantity}</td>
                <td>${p.price.toFixed(2)}</td>
                <td>${p.discount.toFixed(2)}</td>
                <td>${p.amount.toFixed(2)}</td>
            </tr>`;
    }

    html += `
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3"></td><td><strong>SUBTOTAL</strong></td>
                <td class="bg-success p-2 text-white">S/ ${subtotal.toFixed(2)}</td>
            </tr>
            <tr>
                <td colspan="3"></td><td><strong>IGV 18%</strong></td>
                <td class="bg-success p-2 text-white">S/ ${igv.toFixed(2)}</td>
            </tr>
            <tr>
                <td colspan="3"></td><td><strong>NETO</strong></td>
                <td class="bg-success p-2 text-white">S/ ${total.toFixed(2)}</td>
            </tr>
        </tfoot>
    </table>`;

    document.getElementById('tblVenta').innerHTML = html;
}

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


