export function calcularSubtotal(productos) {
    return productos.reduce((acc, p) => acc + p.amount, 0);
}

export const calcularIGV = subtotal => subtotal * 0.18;
export const calcularTotal = (subtotal, igv) => subtotal - igv;
export const calcularImporte = (precio, descuento, cantidad) => (precio - descuento) * cantidad;

export function calcularDescuento(marca, precio) {
    const descuentos = {
        Paraiso: 0.05,
        Rosen: 0.10,
        Cisne: 0.10,
        Drimer: 0.15,
        Forli: 0.05
    };
    return precio * (descuentos[marca] || 0);
}

export function asignarPrecio(marca) {
    const precios = {
        Paraiso: 350.00,
        Rosen: 400.00,
        Cisne: 550.00,
        Drimer: 750.00,
        Forli: 300.00
    };
    return precios[marca] || 0;
}
