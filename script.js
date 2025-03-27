function updateClock() {
  const now = new Date();
  
  // Obtener hora, minutos y segundos con dos dígitos
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  // Obtener día del mes, mes y año en formato DD/MM/AA
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yy = String(now.getFullYear()).slice(-2);
  
  // Abreviación del día de la semana
  const dias = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];
  const dayAbbrev = dias[now.getDay()];
  
  // Actualizar elementos de la pantalla
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
  document.getElementById('date').textContent = `${dd}/${mm}/${yy}`;
  document.getElementById('day').textContent = dayAbbrev;
}

// Actualiza el reloj cada segundo
setInterval(updateClock, 1000);
updateClock();
