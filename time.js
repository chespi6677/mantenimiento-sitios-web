(function () {
    //  Página cargada
    window.onload = function () {
        countTime();
    }
    //  Si es menor que 9, agregue el prefijo: 01 \ 02 ....
    function checkTime(_zero) {
        return _zero > 9 ? _zero : '0' + _zero;
    }
    function countTime() {

       //  Fecha límite Año, mes, día, hora, minuto, segundo-Después de configurar la hora de finalización, apague automáticamente el temporizador.
       var dateStr = "2022/10/5 12:00:00";

       //Obtener la hora actual  
       var date = new Date();
       var now = date.getTime();
       //Establecer fecha límite  
       var endDate = new Date(dateStr);
       var end = endDate.getTime();
       //Diferencia horaria    
       var leftTime = end - now;
       //Defina las variables d, h, m, s para guardar el tiempo de cuenta regresiva  
       var d, h, m, s;
       if (leftTime >= 0) {
           //  Cuente días, horas, minutos, segundos
           d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
           h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
           m = Math.floor(leftTime / 1000 / 60 % 60);
           s = Math.floor(leftTime / 1000 % 60);
           //Asignar la cuenta regresiva al div  
           document.getElementById("day").innerHTML = d > 9 ? d + '<br>Días' : checkTime(d) + "<br>Días";
           document.getElementById("hour").innerHTML = h > 9 ? h + '<br>Horas' : checkTime(h) + "<br>Horas";
           document.getElementById("month").innerHTML = m > 9 ? m + '<br>Minutos' : checkTime(m) + "<br>Minutos";
           document.getElementById("second").innerHTML = s > 9 ? s + '<br>Segundos' : checkTime(s) + "<br>Segundos";
           //Llame al método countTime de forma recursiva cada segundo para mostrar efectos de tiempo dinámicos  
           setTimeout(countTime, 1000);
       } else {
           document.getElementById("day").innerHTML = "00 <br>Días";
           document.getElementById("hour").innerHTML = "00 <br>En punto";
           document.getElementById("month").innerHTML = "00 <br>Puntos";
           document.getElementById("second").innerHTML = "00 <br>Segundos";
       }
   }
})();