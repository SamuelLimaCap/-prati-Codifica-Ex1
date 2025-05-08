import PromptSync from "prompt-sync";
import utils from "./utils.mjs";

const prompt = PromptSync();

function descricao() {
  return "10 primeiros números da sequência de Fibonacci";
}

function runQuestion() {
  const values = fibonacci(10);

  for (let indexValue in values) {
    console.log(`${Number(indexValue) + 1}º número: ${values[indexValue]}`);
    utils.msleep(200);
  }
}

function fibonacci(n) {
  let values = [0, 1];
  for (let i = 2; i < 10; i++) {
    values[i] = values[i - 1] + values[i - 2];
  }

  return values;
}

export default {
  descricao: descricao,
  questao: runQuestion,
};

