numero = 0;
function Diminuir() {
  numero--;
  setValue(numero);
}
function Aumentar() {
  numero++;
  setValue(numero);
}

function setValue(value) {
  document.getElementById('quantidade').value = value;
}

setValue(numero);