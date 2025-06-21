import { getNombre, getApellido, getNota1, getNota2, getNota3, getNota4, validarCampos, Toast } from "./utils.js";
import { Promedio } from "./classPromedio.js";
import { mostrarLista } from "./tblRegistro.js";

let aEstudiantes = []
let estudiantes



document.querySelector('#frmRegistro').addEventListener('submit', (e) => {
    e.preventDefault()

    if (!validarCampos()) {
        return;
    }

    const objPromedio = new Promedio(getNombre(), getApellido(), getNota1(), getNota2(), getNota3(), getNota4())

    var promedio = objPromedio.calcularPromedio();

    estudiantes = {
        nom_est: objPromedio.getNombre,
        ape_est: objPromedio.getApellido,
        n1_est: objPromedio.getNota1,
        n2_est: objPromedio.getNota2,
        n3_est: objPromedio.getNota3,
        n4_est: objPromedio.getNota4
    }

    aEstudiantes.push(estudiantes)

    mostrarLista(aEstudiantes, promedio)

    document.querySelector('#frmRegistro').reset();
    document.querySelector('#txtNombre').focus();


    Toast.fire({
        icon: "success",
        title: "Alumno registrado correctamente",
        text: `Nombre: ${objPromedio.getNombre}, Apellido: ${objPromedio.getApellido}, Promedio: ${promedio.toFixed(2)}`
    });

})







