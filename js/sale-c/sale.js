import { Mattress } from './class.js';
import { selectBrand, txtQuantity, validateForm,form } from './utils.js';
import { setPrice, calculateSubtotal, calculateIGV, calculateAmount, calculateTotal } from './bl.js';
import { renderTable } from './table.js';

const products = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const mattress = new Mattress(selectBrand.value, txtQuantity.value)
    const cost = setPrice(mattress.getBrand);
    const amount = calculateAmount(mattress.getQuantity, cost);

    const product = {
        brand: mattress.getBrand,
        quantity: mattress.getQuantity,
        price: cost,
        amount: amount
    };

    products.push(product);

    const subtotal = calculateSubtotal(amount);
    const igv = calculateIGV(subtotal);
    const total = calculateTotal(subtotal, igv);

    renderTable(products, subtotal, igv, total);
});













