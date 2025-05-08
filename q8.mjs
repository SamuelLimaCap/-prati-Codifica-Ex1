import PromptSync from "prompt-sync";

const prompt = PromptSync();

function descricao() {
  return "Ordenador de 2 números";
}

function runQuestion() {
  let number1 = Number(prompt("Digite o 1º valor: "));
  let number2 = Number(prompt("Digite o 2º valor: "));

  if (isNaN(number1) || isNaN(number2)) {
    console.log("Algum dos valores digitados não é um número");
    return;
  }
  if (number2 > number1) {
    console.log(`${number1} ${number2}`);
  } else if (number1 >= number2) {
    console.log(`${number2} ${number1}`);
  }
}

export default {
  descricao: descricao,
  questao: runQuestion,
};

