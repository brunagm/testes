numero = 0;
function Diminuir() {
  if (numero > 0)
  numero --;
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

function enviar(){    
  var chkreact = document.getElementById("checkbox-1");
  var chkvue = document.getElementById("checkbox-2");
  var chkangular = document.getElementById("checkbox-3");
  
  if ((chkreact.checked || chkvue.checked || chkangular.checked) && (numero >0)) {
      alert("Formulario enviado!")
      }
    else{
      alert("Preencha todos os campos!");
    }
  } 
