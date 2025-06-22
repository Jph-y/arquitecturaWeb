import { getName, getLastName, getScore1, getScore2, getScore3, getScore4, validarCampos, Toast } from "./utils.js";
import { Average } from "./average.js";
import { renderTable } from "./table.js";

const students = []

document.querySelector('#frmRegister').addEventListener('submit', (e) => {
    e.preventDefault()

    if (!validarCampos()) {
        return;
    }

    const average = new Average(getName(), getLastName(), getScore1(), getScore2(), getScore3(), getScore4())

    var averageScore = average.calculateAverage();

    const student = {
        name_est: average.getName,
        last_est: average.getLastName,
        score1_est: average.getScore1,
        score2_est: average.getScore2,
        score3_est: average.getScore3,
        score4_est: average.getScore4
    }

    students.push(student)

    renderTable(students, averageScore)

    document.querySelector('#frmRegister').reset();
    document.querySelector('#txtName').focus();


    Toast.fire({
        icon: "success",
        title: "Alumno registrado correctamente",
        text: `Nombre: ${average.getName}, Apellido: ${average.getLastName}, Promedio: ${averageScore.toFixed(2)}`
    });

})







