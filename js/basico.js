
function fechaHora(){

    const fecha = new Date();
    const anio = fecha.getFullYear();
    const mes = fecha.getMonth();
    const dia = fecha.getDate();

    document.querySelector('#fecha').innerHTML = `${dia}/${mes}/${anio}`

    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();

    document.querySelector('#hora').innerHTML = `${hora}:${minutos}:${segundos}`
}
fechaHora();
setInterval(fechaHora,1000);