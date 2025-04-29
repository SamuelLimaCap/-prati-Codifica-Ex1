import PromptSync from "prompt-sync";

let prompt = PromptSync()

function descricao() {
    return "Fatorial de um número"
}

function runQuestion() {
    let number = Number(prompt("Digite um número inteiro maior ou igual a 0: "))

    if (isNaN(number) || number < 0) {
        console.log("Valor inválido")
        return
    }

    if (number % 1 != 0) {
        console.log("Não existe fatorial com números decimais")
        return
    }

    let total = number;

    if (number == 0) {
        total = 1;
    } else {
        for (let i = number - 1; i >= 1; i--) {
            total *= i;
        }
    }

    console.log(`Fatorial de ${number} é: ${total}`)
}


export default {
    descricao: descricao,
    questao: runQuestion
}