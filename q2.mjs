import PromptSync from "prompt-sync";

const prompt = PromptSync();

function descricao() {
  return "Classificador de idade";
}

function runQuestion() {
  let number = Number(prompt("Digite a idade: "));
  if (isNaN(number)) {
    console.log("O que você digitou não é um número");
  } else if (number < 0) {
    console.log("Numeros negativos não são aceitos");
  } else if (number >= 0 && number < 12) {
    console.log("Classificação: Criança");
  } else if (number >= 12 && number < 18) {
    console.log("Classificação: Adolescente");
  } else if (number >= 18 && number < 60) {
    console.log("Classificação: Adulto");
  } else if (number >= 60) {
    console.log("Classificação: Idoso");
  }
}

let questao2 = {
  descricao: descricao,
  questao: runQuestion,
};
export default questao2;
