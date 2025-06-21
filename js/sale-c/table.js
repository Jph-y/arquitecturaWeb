import {  formatoMoneda } from './utils.js';

export function renderizarTabla(productos, subtotal, igv, total) {
    let table = `
    <table class="table table-dark table-striped">
        <thead >
            <tr>
                <th>MARCA</th>
                <th>CANTIDAD</th>
                <th>PRECIO</th>
                
                <th>IMPORTE</th>
            </tr>
        </thead>
        <tbody>`;

    for (const p of productos) {
        table += `
            <tr>
                <td>${p.brand}</td>
                <td>${p.quantity}</td>
                <td>${formatoMoneda(p.price)}</td>
                <td>${formatoMoneda(p.amount)}</td>
                
            </tr>`;
    }

    table += `
        </tbody>
        <tfoot>
            <tr>
                <td colspan="2"></td><td><strong>SUBTOTAL</strong></td>
                <td class="bg-success p-2 text-white">S/ ${formatoMoneda(subtotal)}</td>
            </tr>
            <tr>
                <td colspan="2"></td><td><strong>IGV 18%</strong></td>
                <td class="bg-success p-2 text-white">S/ ${formatoMoneda(igv)}</td>
            </tr>
            <tr>
                <td colspan="2"></td><td><strong>NETO</strong></td>
                <td class="bg-success p-2 text-white">S/ ${formatoMoneda(total)}</td>
            </tr>
        </tfoot>
    </table>`;

    document.getElementById('tblVenta').innerHTML = table;
}