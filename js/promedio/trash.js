const nombre = getNombre()
const apellido = getApellido()
const nota1 = getNota1()
const nota2 = getNota2()
const nota3 = getNota3()
const nota4 = getNota4()

if (!nombre || !apellido || isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
    alert('Por favor, complete todos los campos correctamente.')
    return false
}
if (nota1 < 0 || nota1 > 20 || nota2 < 0 || nota2 > 20 || nota3 < 0 || nota3 > 20 || nota4 < 0 || nota4 > 20) {
    alert('Las notas deben estar entre 0 y 20.')
    return false
}
if (nombre.length < 3 || apellido.length < 3) {
    alert('El nombre y el apellido deben tener al menos 3 caracteres.')
    return false
}
if (!/^[a-zA-Z]+$/.test(nombre) || !/^[a-zA-Z]+$/.test(apellido)) {
    alert('El nombre y el apellido solo deben contener letras.')
    return false
}
if (nombre.length > 20 || apellido.length > 20) {
    alert('El nombre y el apellido no pueden tener más de 20 caracteres.')
    return false
}
if (nota1 % 1 !== 0 || nota2 % 1 !== 0 || nota3 % 1 !== 0 || nota4 % 1 !== 0) {
    alert('Las notas deben ser números enteros.')
    return false
}

if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
    alert('Las notas no pueden ser negativas.')
    return false
}
if (nota1 > 20 || nota2 > 20 || nota3 > 20 || nota4 > 20) {
    alert('Las notas no pueden ser mayores a 20.')
    return false
}

export const validarCampos = () => {
    const nombre = getNombre()
    const apellido = getApellido()
    const nota1 = Number(document.querySelector('#txtNota1').value)
    const nota2 = Number(document.querySelector('#txtNota2').value)
    const nota3 = Number(document.querySelector('#txtNota3').value)
    const nota4 = Number(document.querySelector('#txtNota4').value)

    if (!nombre || !apellido || isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        alert('Por favor, complete todos los campos correctamente.')
        return false
    }

    const notas = [nota1, nota2, nota3, nota4]
    const notasValidas = notas.every(n => n >= 0 && n <= 20)

    if (!notasValidas) {
        alert('Las notas deben estar entre 0 y 20.')
        return false
    }

    return true
}
