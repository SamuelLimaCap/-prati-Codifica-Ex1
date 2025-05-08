import PromptSync from "prompt-sync";

const prompt = PromptSync();

function descricao() {
  return "Soma de 5 números";
}

function runQuestion() {
  let listaNums = [];
  for (let i = 0; i < 5; i++) {
    let isValidNumber = true;

    do {
      let number = Number(prompt(`Digite o ${i + 1}º valor: `));
      if (isNaN(number)) {
        console.log("O que você digitou não é um número. Tente novamente");
        isValidNumber = false;
      } else {
        listaNums[i] = number;
        isValidNumber = true;
      }
    } while (!isValidNumber);
  }

  let total = 0;

  for (let i = 0; i < 5; i++) {
    total += listaNums[i];
  }

  console.log(`Total: ${total}`);
}

export default {
  descricao: descricao,
  questao: runQuestion,
};

