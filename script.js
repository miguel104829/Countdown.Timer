
function startCountdown() {
  var countdownDate = document.getElementById("countdownDate").value;

  // Convertir la fecha de entrada en un objeto de fecha de JavaScript
  var countDownDate = new Date(countdownDate).getTime();

  // Actualizar el contador cada 1 segundo
  var x = setInterval(function() {
    // Obtener la fecha y hora actual
    var now = new Date().getTime();

    // Encontrar la distancia entre ahora y la fecha del contador regresivo
    var distance = countDownDate - now;

    // Realizar cálculos para días, horas, minutos y segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar el resultado en el elemento con id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // Si el contador regresivo ha finalizado, escribir un texto
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "¡El evento ha comenzado!";
    }
  }, 1000);
  var inputDiv = document.getElementsByClassName("input-date")[0];
  var outputDiv = document.getElementsByClassName("output")[0];

  inputDiv.style.display = "none";
  outputDiv.style.display = "block";


}

