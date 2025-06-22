
export const selectBrand =  document.querySelector('#selectBrand');
export const txtQuantity = document.querySelector('#txtQuantity');
export const form = document.querySelector('#frmSale');
export const tableContent = document.querySelector('#tblSale');

export function validateForm(brand, quantity) {
    if (!brand || isNaN(quantity) || quantity <= 0) {
        alert('Debe seleccionar una marca válida y una cantidad mayor a cero');
        return false;
    }
    return true;
}

export const formatMoney = value =>
    value.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' });
