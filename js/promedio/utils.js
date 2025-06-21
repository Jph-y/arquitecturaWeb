export const getNombre = () => document.querySelector('#txtNombre').value
export const getApellido = () => document.querySelector('#txtApellido').value
export const getNota1 = () => Number(document.querySelector('#txtNota1').value)
export const getNota2 = () => Number(document.querySelector('#txtNota2').value)
export const getNota3 = () => Number(document.querySelector('#txtNota3').value)
export const getNota4 = () => Number(document.querySelector('#txtNota4').value)

export const validarCampos = () => {
    const nombre = getNombre()
    const apellido = getApellido()

    const nota1Str = document.querySelector('#txtNota1').value
    const nota2Str = document.querySelector('#txtNota2').value
    const nota3Str = document.querySelector('#txtNota3').value
    const nota4Str = document.querySelector('#txtNota4').value

    if (!nombre || !apellido || !nota1Str || !nota2Str || !nota3Str || !nota4Str) {
        alert('Por favor, complete todos los campos correctamente.')
        return false
    }

    const nota1 = Number(nota1Str)
    const nota2 = Number(nota2Str)
    const nota3 = Number(nota3Str)
    const nota4 = Number(nota4Str)

    const notas = [nota1, nota2, nota3, nota4]
    const notasValidas = notas.every(n => !isNaN(n) && n >= 0 && n <= 20)

    if (!notasValidas) {
        alert('Las notas deben ser números entre 0 y 20.')
        return false
    }

    return true
}

export const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});


export const limpiarCampos = () => {
    document.querySelector('#txtNombre').value = ''
    document.querySelector('#txtApellido').value = ''
    document.querySelector('#txtNota1').value = ''
    document.querySelector('#txtNota2').value = ''
    document.querySelector('#txtNota3').value = ''
    document.querySelector('#txtNota4').value = ''
}