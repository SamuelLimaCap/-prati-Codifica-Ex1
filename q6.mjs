import PromptSync from "prompt-sync";

const prompt = PromptSync();

function descricao() {
  return "Classificação de triângulo";
}

function runQuestion() {
  console.log(
    "Para poder classificar o triângulo, será necessário passar os valores dos 3 lados do triângulo",
  );
  console.log("");
  let a = Number(prompt("Digite o valor do 1º número: "));
  let b = Number(prompt("Digite o valor do 2º número: "));
  let c = Number(prompt("Digite o valor do 3º número: "));

  console.log("");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Algum dos valores informados não são números");
    return;
  }
  if (a <= 0 || b <= 0 || c <= 0) {
    console.log(
      "Algum dos valores informados está abaixo de 0. Um triângulo só existe se todos os lados forem maiores que 0",
    );
    return;
  }
  if (b > a + c || a > b + c || c > a + b) {
    console.log("Os lados informados não formam um triângulo");
    return;
  }

  if (a == b && a == c && b == c) {
    console.log("O triângulo informado é equilátero");
  } else if (a != b && a != c && b != c) {
    console.log("O triângulo informalo é escaleno");
  } else {
    console.log("O triângulo informado é isóceles");
  }
}

export default {
  descricao: descricao,
  questao: runQuestion,
};

