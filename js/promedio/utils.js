export const getName = () => document.querySelector('#txtName').value
export const getLastName = () => document.querySelector('#txtLastName').value
export const getScore1 = () => Number(document.querySelector('#txtScore1').value)
export const getScore2 = () => Number(document.querySelector('#txtScore2').value)
export const getScore3 = () => Number(document.querySelector('#txtScore3').value)
export const getScore4 = () => Number(document.querySelector('#txtScore4').value)

export const validarCampos = () => {
    const name = getName()
    const lastName = getLastName()

    const score1Str = document.querySelector('#txtScore1').value
    const score2Str = document.querySelector('#txtScore2').value
    const score3Str = document.querySelector('#txtScore3').value
    const score4Str = document.querySelector('#txtScore4').value

    if (!name || !lastName || !score1Str || !score2Str || !score3Str || !score4Str) {
        alert('Por favor, complete todos los campos correctamente.')
        return false
    }

    const score1 = Number(score1Str)
    const score2 = Number(score2Str)
    const score3 = Number(score3Str)
    const score4 = Number(score4Str)

    const scores = [score1, score2, score3, score4]
    const scoresValid = scores.every(n => !isNaN(n) && n >= 0 && n <= 20)

    if (!scoresValid) {
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
    document.querySelector('#txtName').value = ''
    document.querySelector('#txtLastName').value = ''
    document.querySelector('#txtScore1').value = ''
    document.querySelector('#txtScore2').value = ''
    document.querySelector('#txtScore3').value = ''
    document.querySelector('#txtScore4').value = ''
}