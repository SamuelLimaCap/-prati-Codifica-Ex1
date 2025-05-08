import PromptSync from "prompt-sync";
import utils from "./utils.mjs";

const prompt = PromptSync();

function descricao() {
  return "Escrever o número na tela 10 vezes";
}

function runQuestion() {
  let number = Number(prompt("Digite um número qualquer: "));

  if (isNaN(number)) {
    console.log("O que foi digitado não é um número");
    return;
  }

  for (let i = 0; i < 10; i++) {
    console.log(number);
    utils.msleep(200);
  }
}

export default {
  descricao: descricao,
  questao: runQuestion,
};

