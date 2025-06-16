import { getMarca, getCantidad, validarDatos} from '../Utils/utils.js';
import { calcularDescuento, calcularSubtotal, asignarPrecio, calcularIGV, calcularTotal, calcularImporte } from '../BL/bl.js';
import { renderizarTablaConInsertRow } from '../table/table.js';
//let total = 0.0;
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

    const subtotal = calcularSubtotal(productos);
    const igv = calcularIGV(subtotal);
    const totalNeto = calcularTotal(subtotal, igv);

    renderizarTablaConInsertRow(productos, subtotal, igv, totalNeto);
});

