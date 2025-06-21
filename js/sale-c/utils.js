
export const getMarca = () => document.querySelector('#selectMarca').value;
export const getCantidad = () => document.querySelector('#cantidad').value;

 export function validarDatos(marca, cantidad) {
    if (!marca || isNaN(cantidad) || cantidad <= 0) {
        alert('Debe seleccionar una marca válida y una cantidad mayor a cero');
        return false;
    }
    return true;
}

export const formatoMoneda = valor =>
    valor.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' });
