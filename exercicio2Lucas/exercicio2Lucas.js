// Pedir ao usuário digitar o ano do seu nascimento no formato (YYYY)
// e o ano atual no mesmo formato (YYYY). Em seguida mostre na tela
// qual a idade do usuário em anos, meses, dias e semanas.

function idade() {
  var anoInformado = Number(document.getElementById("anoAtual").value);
  var anoCorrespondente = Number(document.getElementById("anoNascido").value);

  var resultado = anoInformado - anoCorrespondente;
  alert(
    resultado +
      " anos" +
      ("\n" + resultado * 12 + " meses") +
      ("\n" + resultado * 365 + " dias") +
      ("\n" + resultado * 52 + " semanas")
  );
}
