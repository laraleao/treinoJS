// Sistema que pede ao usuário para digitar um número
// (repetidamente e quantas vezes precisar)
// até que o número digitado seja 100.

function conferirNumero() {
  var numeroCerto = 100;

  numeroInformado = Number(document.getElementById("valorNumero").value);
  if (numeroInformado != numeroCerto) {
    alert("Número inválido! Tente de novo.");
  } else {
    alert("Parabéns, você acertou!");
  }
}
