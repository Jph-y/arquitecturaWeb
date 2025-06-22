let total = 0;

const prices = {
        Paraiso: 350.00,
        Rosen: 400.00,
        Cisne: 550.00,
        Drimer: 750.00,
        Forli: 300.00
    };

export function calculateSubtotal(amount) {
    total += amount;
    return total;
}

export const calculateIGV = subtotal => subtotal * 0.18;
export const calculateTotal = (subtotal, igv) => subtotal + igv;
export const setPrice = brand => prices[brand] || 0;
export function calculateAmount(quantity, cost) {
    return (quantity * cost);
}