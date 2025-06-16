export const precios = {
    'Indurama': 750.00,
    'Bosh': 600.00,
    'Samsung': 550.00,
    'Electrolux': 700.00,
    'Oster': 650.00,

}

export const descuentos = {
    Indurama: 0.05,
    Bosh: 0.08,
    Samsung: 0.09,
    Electrolux: 0.02,
    Oster: 0.07
};

export const IGV_RATE = 0.18;

export const calcularDescuento = (marca, precio) => precio * (descuentos[marca] || 0);
export const calcularImporte = (precio,descuento,cantidad) => (precio - descuento) * cantidad;
export const calcularSubtotal = (productos) => productos.reduce((count,p) => count + p.amount,0)
export const calcularIGV = (subtotal) => subtotal * IGV_RATE;
export const calcularTotal = (subtotal,igv) => subtotal - igv;

export const formatoMoneda = new Intl.NumberFormat('es-PE', {
  style: 'currency',
  currency: 'PEN'
});
//antiguo

let total = 0.0;

let productos = []
let producto = {}

document.querySelector('#frmVenta').addEventListener('submit', (e) => {
    e.preventDefault();

    const marca = getMarca();
    const cantidad = getCantidad();

    //console.log(marca + cantidad)
    if (!validarDatos(marca, cantidad)) {
        return;
    }

    const precio = asignarPrecio(marca);
    const descuento = calcularDescuento(marca, precio);
    const importe = calcularImporte(precio, descuento, cantidad);

    producto = {
        brand: marca,
        quantity: cantidad,
        price: precio,
        discount: descuento,
        amount: importe
    }

    productos.push(producto)

    const subtotal = calcularSubtotal(importe);
    const igv = calcularIGV(subtotal);
    const calTotal = calcularTotal(subtotal, igv);

    let modeloTabla = '';
    modeloTabla += '<table class="table table-hover">';
    modeloTabla += '<thead>';
    modeloTabla += '<tr>';
    modeloTabla += '<th>MARCA</th>';
    modeloTabla += '<th>CANTIDAD</th>';
    modeloTabla += '<th>PRECIO</th>';
    modeloTabla += '<th>DESCUENTO</th>';
    modeloTabla += '<th>IMPORTE</th>';

    modeloTabla += '</tr>';
    modeloTabla += '</thead>';
    productos.forEach(v => {
        modeloTabla += '<tbody>';
        modeloTabla += '<tr>';
        modeloTabla += '<td>' + v.brand + '</td>';
        modeloTabla += '<td>' + v.quantity + '</td>';
        modeloTabla += '<td>' + v.price.toFixed(2) + '</td>';
        modeloTabla += '<td>' + v.discount.toFixed(2) + '</td>';
        modeloTabla += '<td>' + v.amount.toFixed(2) + '</td>';
        modeloTabla += '</tr>';
        modeloTabla += '</tbody>';
    });
     modeloTabla += '<tr>';
        modeloTabla += '<td></td>';
        modeloTabla += '<td></td>';
        modeloTabla += '<td></td>';
        modeloTabla += '<td> <strong>SUBTOTAL</strong> </td>';
        modeloTabla += '<td class="bg-success p-2 text-white"> S/ '+subtotal.toFixed(2)+'</td>';
        modeloTabla += '</tr>';
         modeloTabla += '<tr>';
        modeloTabla += '<td></td>';
        modeloTabla += '<td></td>';
        modeloTabla += '<td></td>';
        modeloTabla += '<td> <strong>IGV 18%</strong> </td>';
        modeloTabla += '<td class="bg-success p-2 text-white"> S/ '+igv.toFixed(2)+'</td>';
        modeloTabla += '</tr>';
         modeloTabla += '<tr>';
        modeloTabla += '<td></td>';
        modeloTabla += '<td></td>';
        modeloTabla += '<td></td>';
        modeloTabla += '<td> <strong>NETO </strong></td>';
        modeloTabla += '<td class="bg-success p-2 text-white"> S/ '+calTotal.toFixed(2)+'</td>';
        modeloTabla += '</tr>';
    modeloTabla += '</table>';
    document.getElementById('tblVenta').innerHTML = modeloTabla;

    document.querySelector('#subtotal').innerHTML = formatoMoneda(subtotal);
    document.querySelector('#igv').innerHTML = formatoMoneda(igv);
    document.querySelector('#total').innerHTML = formatoMoneda(calTotal);
})

function calcularSubtotal(importe) {
    return total += importe;
}

function calcularIGV(subtotal) {
    return subtotal * 0.18;
}

function calcularTotal(subtotal, igv) {
    return subtotal - igv;
}

function calcularImporte(precio, descuento, cantidad) {
    return (precio - descuento) * cantidad;
}

function calcularDescuento(marca, precio) {
    switch (marca) {
        case 'Paraiso': return precio * 5 / 100;
        case 'Rosen': return precio * 10 / 100;
        case 'Cisne': return precio * 10 / 100;
        case 'Drimer': return precio * 15 / 100;
        case 'Forli': return precio * 5 / 100;
    }
}

function getMarca() {
    return document.querySelector('#selectMarca').value;
}

function getCantidad() {
    return document.querySelector('#cantidad').value;
}

function validarDatos(marca, cantidad) {
    if (!marca || !cantidad) {
        alert('Debe seleccionar una marca y una cantidad');
        return false;
    }
    if (cantidad <= 0) {
        alert('La cantidad debe ser mayor a cero');
        return false;
    }
    return true;
}

function formatoMoneda(valor) {
    return valor.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' });
}

function asignarPrecio(marca) {
    switch (marca) {
        case 'Paraiso': return 350.00;
        case 'Rosen': return 400.00;
        case 'Cisne': return 550.00;
        case 'Drimer': return 750.00;
        case 'Forli': return 300;
    }
}

