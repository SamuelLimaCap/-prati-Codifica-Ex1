import PromptSync from "prompt-sync";

const prompt = PromptSync();

function descricao() {
  return "Cálculo de IMC";
}

function runQuestion() {
  let peso = Number(prompt("Digite o peso em kg: "));
  let altura = Number(prompt("Digite a altura em metros: "));

  if (isNaN(peso) || isNaN(altura)) {
    console.log("Peso ou altura inexistente");
    return;
  }
  if (peso <= 0 || altura <= 0) {
    console.log("Peso ou altura inexistente");
    return;
  }
  let imc = peso / (altura * altura);

  console.log(`IMC: ${imc} kg/m²`);

  let classificaçãoTexto = "";
  if (imc < 18.5) {
    classificaçãoTexto = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    classificaçãoTexto = "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    classificaçãoTexto = "Sobrepeso";
  } else if (imc >= 30) {
    classificaçãoTexto = "Obesidade";
  }

  console.log(`Classificação: ${classificaçãoTexto}`);
}

export default {
  descricao: descricao,
  questao: runQuestion,
};

