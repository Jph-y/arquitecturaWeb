import { getNombre, getApellido, getNota1, getNota2, getNota3, getNota4 } from "./utils.js";
import { Promedio } from "./classPromedio.js";

let aEstudiantes = []
let estudiantes

document.querySelector('#frmRegistro').addEventListener('submit', (e) => {
    e.preventDefault()

    const objPromedio = new Promedio(getNombre(), getApellido(), getNota1(), getNota2(), getNota3(), getNota4())

    var promedio = objPromedio.calcularPromedio();
    alert(promedio)

    estudiantes = {
        nom_est: objPromedio.getNombre,
        ape_est: objPromedio.getApellido,
        n1_est: objPromedio.getNota1,
        n2_est: objPromedio.getNota2,
        n3_est: objPromedio.getNota3,
        n4_est: objPromedio.getNota4
    }

    aEstudiantes.push(estudiantes)

    mostrarLista(aEstudiantes,promedio)
})

function mostrarLista(aEstudiantes,promedio) {
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





