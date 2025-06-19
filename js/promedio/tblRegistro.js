
export function mostrarLista(aEstudiantes,promedio) {
    let modeloTabla = '';
    modeloTabla += '<table class="table table-hover">';
    modeloTabla += '<thead>';
    modeloTabla += '<tr>';
    modeloTabla += '<th>Nombre</th>';
    modeloTabla += '<th>Apellido</th>';
    modeloTabla += '<th>Nota 1</th>';
    modeloTabla += '<th>Nota 2</th>';
    modeloTabla += '<th>Nota 3</th>';
    modeloTabla += '<th>Nota 4</th>';
    modeloTabla += '<th>Promedio</th>';
    modeloTabla += '</tr>';
    modeloTabla += '</thead>';
    aEstudiantes.forEach(est => {
        modeloTabla += '<tbody>';
        modeloTabla += '<tr>';
        modeloTabla += '<td>' + est.nom_est + '</td>';
        modeloTabla += '<td>' + est.ape_est + '</td>';
        modeloTabla += '<td>' + est.n1_est + '</td>';
        modeloTabla += '<td>' + est.n2_est + '</td>';
        modeloTabla += '<td>' + est.n3_est + '</td>';
        modeloTabla += '<td>' + est.n4_est + '</td>';
        modeloTabla += '<td>' + promedio + '</td>';
        modeloTabla += '</tr>';
        modeloTabla += '</tbody>';
    });
    modeloTabla += '</table>';

    document.querySelector('#tblRegistro').innerHTML = modeloTabla
}