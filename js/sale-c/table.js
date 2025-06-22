import {  formatMoney,tableContent } from './utils.js';

export function renderTable(products, subtotal, igv, total) {
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

    for (const p of products) {
        table += `
            <tr>
                <td>${p.brand}</td>
                <td>${p.quantity}</td>
                <td>${formatMoney(p.price)}</td>
                <td>${formatMoney(p.amount)}</td>

            </tr>`;
    }

    table += `
        </tbody>
        <tfoot>
            <tr>
                <td colspan="2"></td><td><strong>SUBTOTAL</strong></td>
                <td class="bg-success p-2 text-white">S/ ${formatMoney(subtotal)}</td>
            </tr>
            <tr>
                <td colspan="2"></td><td><strong>IGV 18%</strong></td>
                <td class="bg-success p-2 text-white">S/ ${formatMoney(igv)}</td>
            </tr>
            <tr>
                <td colspan="2"></td><td><strong>NETO</strong></td>
                <td class="bg-success p-2 text-white">S/ ${formatMoney(total)}</td>
            </tr>
        </tfoot>
    </table>`;

    tableContent.innerHTML = table;
}