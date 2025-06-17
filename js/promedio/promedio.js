import { getNombre, getApellido, getNota1, getNota2, getNota3, getNota4 } from "./utils.js";

let aEstudiantes = []
let estudiantes;


document.querySelector('#frmRegistro').addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = getNombre();
    const apellido = getApellido();
    const nota1 = getNota1();
    const nota2 = getNota2();
    const nota3 = getNota3();
    const nota4 = getNota4();

    
    alert(nota4)
})

function procesar() {

}



