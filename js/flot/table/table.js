import {formatoMoneda} from '../Utils/utils.js';

export function renderizarTablaConInsertRow(productos, subtotal, igv, total) {
    const tabla = document.getElementById('tblVenta');
    tabla.innerHTML = ''; // Limpiar tabla previa
    // tabla.className = 'table table-bordered table-striped table-hover'; // Clases de Bootstrap para estilo
    // tabla.style.width = '100%'; // Ancho completo de la tabla
    // tabla.style.maxWidth = '800px'; // Ancho máximo de la tabla
    // tabla.style.margin = '0 auto'; // Centrar la tabla
    // tabla.style.textAlign = 'center'; // Alinear texto al centro
    // tabla.style.fontSize = '1.2em'; // Tamaño de fuente más grande
    // tabla.style.fontWeight = 'bold'; // Negrita para el texto
    // tabla.style.backgroundColor = '#f8f9fa'; // Color de fondo claro
    // tabla.style.border = '1px solid #dee2e6'; // Borde de la tabla
    // tabla.style.borderRadius = '0.25rem'; // Bordes redondeados
    // tabla.style.overflowX = 'auto'; // Permitir scroll horizontal si es necesario
    // tabla.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)'; // Sombra sutil
    // tabla.style.marginTop = '20px'; // Espacio superior
    // tabla.style.marginBottom = '20px'; // Espacio inferior
    // tabla.style.fontFamily = 'Arial, sans-serif'; // Fuente legible
    // tabla.style.color = '#212529'; // Color de texto oscuro
    // tabla.style.textAlign = 'center'; // Alinear texto al centro
    // tabla.style.borderCollapse = 'collapse'; // Colapsar bordes de la tabla
    // tabla.style.tableLayout = 'fixed'; // Fijar el ancho de las columnas
    // tabla.style.borderSpacing = '0'; // Eliminar espacio entre celdas
    // tabla.style.captionSide = 'top'; // Colocar el título de la tabla en la parte superior
   

    const thead = tabla.createTHead();
    thead.className = 'bg-primary text-white';
    const header = thead.insertRow();
    ['MARCA', 'CANTIDAD', 'PRECIO', 'DESCUENTO', 'IMPORTE'].forEach(text => {
        const th = document.createElement('th');
        th.className = 'text-center';
        th.textContent = text;
        header.appendChild(th);
    });

    const tbody = tabla.createTBody();
    productos.forEach(p => {
        const row = tbody.insertRow();
        row.className = 'text-center';
        //row.classList.add('text-center');
        row.insertCell().textContent = p.brand;
        row.insertCell().textContent = p.quantity;
        row.insertCell().textContent = formatoMoneda(p.price);
        row.insertCell().textContent = formatoMoneda(p.discount);
        row.insertCell().textContent = formatoMoneda(p.amount);
    });

    const tfoot = tabla.createTFoot();
    tfoot.className = 'fs-6';
    tfoot.style.fontSize = '1.2em';
    tfoot.style.fontWeight = 'bold';
    //tfoot.className = 'text-end bg-light';
    //tfoot.style.textAlign = 'end';

    const rowSubtotal = tfoot.insertRow();
    
    //rowSubtotal.className = 'text-center';
    //rowSubtotal.className = 'bg-primary text-white';
    rowSubtotal.insertCell().colSpan = 3;
    const cellTextSubtotal = rowSubtotal.insertCell();
    cellTextSubtotal.innerHTML = '<strong>SUBTOTAL</strong>';
    cellTextSubtotal.classList.add('text-end');
    cellTextSubtotal.style.textAlign = 'end'
    //cellTextSubtotal.style.textAlign = 'end';
    const cellSubtotal = rowSubtotal.insertCell();
    cellSubtotal.innerHTML = `${formatoMoneda(subtotal)}`;
    cellSubtotal.classList.add('bg-primary', 'text-white', 'text-center');
    //cellSubtotal.style.color = 'white';

    const rowIGV = tfoot.insertRow();
    
    rowIGV.insertCell().colSpan = 3;
    const cellTextIGV = rowIGV.insertCell();
    cellTextIGV.innerHTML = '<strong>IGV 18%</strong>';
    cellTextIGV.style.textAlign = 'end';
    //cellTextIGV.style.textAlign = 'end';
    const cellIGV = rowIGV.insertCell();
    cellIGV.innerHTML = `${formatoMoneda(igv)}`;
    cellIGV.classList.add('bg-primary', 'text-white', 'text-center');
    //cellIGV.style.color = 'white';

    const rowTotal = tfoot.insertRow();
    rowTotal.insertCell().colSpan = 3;
     const cellTextTotal = rowTotal.insertCell();
    cellTextTotal.innerHTML = '<strong>NETO</strong>';
    cellTextTotal.style.textAlign = 'end';
    //cellTextTotal.style.textAlign = 'end';
    const cellTotal = rowTotal.insertCell();
    cellTotal.innerHTML = `${formatoMoneda(total)}`;
    cellTotal.classList.add('bg-primary', 'text-white', 'text-center');
    //cellTotal.style.color = 'white';
}