import PromptSync from "prompt-sync";
import utils from "./utils.mjs";

const prompt = PromptSync();

function descricao() {
  return "Visualizadora de tabuada";
}

function runQuestion() {
  let number = Number(
    prompt(
      "Digite um número de 1 a 10, que mostraremos a tabuada desse número: ",
    ),
  );
  if (number > 10 || number < 1 || isNaN(number) || number % 1 != 0) {
    console.log("Não temos essa tabuada");
    return;
  }
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
    utils.msleep(200);
  }
}

export default {
  descricao: descricao,
  questao: runQuestion,
};

