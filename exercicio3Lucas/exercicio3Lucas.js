// Fazer um programa no qual o usuário digite a sua altura e o
// seu peso, ao final mostre o imc (índice de massa corporal) e uma
// mensagem se está abaixo do peso, na faixa de peso ideal ou
// acima do peso.

function Imc() {
  var pesoInformado = Number(document.getElementById("medidaPeso")).value;
  var alturaInformada = Number(document.getElementById("medidaAltura")).value;

  var calculoImc = pesoInformado / (alturaInformada * alturaInformada);

  if (calculoImc < 18.5) {
    alert("Abaixo do Peso");
  } else if (calculoImc >= 18.5 && calculoImc < 24.9) {
    alert("Peso Ideal");
  } else if (calculoImc >= 25.0 && calculoImc < 29.9) {
    alert("Sobre Peso");
  } else {
    alert("Obesidade");
  }
}
