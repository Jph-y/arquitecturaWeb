let total = 0;

const IGV_RATE = 0.18;

const prices = {
        Paraiso: 350.00,
        Rosen: 400.00,
        Cisne: 550.00,
        Drimer: 750.00,
        Forli: 300.00
    };

export const calculateSubtotal = amount => total += amount;
export const calculateIGV = subtotal => subtotal * IGV_RATE;
export const calculateTotal = (subtotal, igv) => subtotal + igv;
export const setPrice = brand => prices[brand] || 0;
export const calculateAmount = (quantity, cost) => (quantity * cost);