import { Colchon } from './class.js';
import { getMarca, getCantidad, validarDatos } from './utils.js';
import { asignarPrecio, calcularSubtotal, calcularIGV, calcularTotal, calcularImporte } from './bl.js';
import { renderizarTabla } from './table.js';

const productos = [];

document.querySelector('#frmVenta').addEventListener('submit', (e) => {
    e.preventDefault();

    const marca = getMarca();
    const cantidad = parseInt(getCantidad());

    if (!validarDatos(marca, cantidad)) return;

    const costo = asignarPrecio(marca);

    const colchon = new Colchon(marca, cantidad)

    const importe = calcularImporte(cantidad,costo)

    const producto = {
        brand: colchon.getMarca,
        quantity: colchon.getCantidad,
        price: costo,
        amount: importe
    };

    productos.push(producto);

    const subtotal = calcularSubtotal(importe);
    const igv = calcularIGV(subtotal);
    const totalNeto = calcularTotal(subtotal, igv);

    renderizarTabla(productos, subtotal, igv, totalNeto);
});













