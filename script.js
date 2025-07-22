
function crearTarjeta(ramo) {
  const div = document.createElement('div');
  div.className = 'ramo bloqueado';
  div.textContent = ramo.nombre;
  div.dataset.codigo = ramo.codigo;
  if (ramo.tipo === 'electivo') div.classList.add('electivo');
  return div;
}

function renderMalla() {
  const container = document.getElementById('malla-container');
  container.innerHTML = '';
  materias.forEach(ramo => {
    const tarjeta = crearTarjeta(ramo);
    container.appendChild(tarjeta);
  });
}

document.addEventListener('DOMContentLoaded', renderMalla);
