// Establece la fecha de inicio
const fechaInicio = new Date('2022-01-25T00:00:00');

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById('contador').innerText = `${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

// Actualiza el contador cada segundo
setInterval(actualizarContador, 1000);