
export function renderTable(students,averageScore) {
    let tableModel = '';
    tableModel += '<table class="table table-hover">';
    tableModel += '<thead>';
    tableModel += '<tr>';
    tableModel += '<th>Nombre</th>';
    tableModel += '<th>Apellido</th>';
    tableModel += '<th>Nota 1</th>';
    tableModel += '<th>Nota 2</th>';
    tableModel += '<th>Nota 3</th>';
    tableModel += '<th>Nota 4</th>';
    tableModel += '<th>Promedio</th>';
    tableModel += '</tr>';
    tableModel += '</thead>';
    students.forEach(est => {
        tableModel += '<tbody>';
        tableModel += '<tr>';
        tableModel += '<td>' + est.name_est + '</td>';
        tableModel += '<td>' + est.last_est + '</td>';
        tableModel += '<td>' + est.score1_est + '</td>';
        tableModel += '<td>' + est.score2_est + '</td>';
        tableModel += '<td>' + est.score3_est + '</td>';
        tableModel += '<td>' + est.score4_est + '</td>';
        tableModel += '<td>' + averageScore + '</td>';
        tableModel += '</tr>';
        tableModel += '</tbody>';
    });
    tableModel += '</table>';

    document.querySelector('#tblRegister').innerHTML = tableModel
}