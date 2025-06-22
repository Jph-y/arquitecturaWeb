
export const selectBrand =  document.querySelector('#selectBrand');
export const txtQuantity = document.querySelector('#txtQuantity');
export const form = document.querySelector('#frmSale');
export const tableContent = document.querySelector('#tblSale');

export function validateForm() {
    //console.log('Validando formulario', selectBrand, txtQuantity.value);
    if (!selectBrand.value || isNaN(txtQuantity.value) || txtQuantity.value <= 0) {
        alert('Debe seleccionar una marca válida y una cantidad mayor a cero');
        return false;
    }
    return true;
}

export const formatMoney = value =>
    value.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' });
