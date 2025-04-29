import PromptSync from "prompt-sync";

const prompt = PromptSync()

function descricao() {
    return "Classificação do aluno em: Aprovado; Recuperação; Reprovado"
}

function runQuestion() {
    const number = Number(prompt("Digite a nota do aluno (de 0 a 10): "))

    if (isNaN(number)) {
        console.log("Numero invalido")
    } else if (number < 5) {
        console.log("Aluno reprovado")
    } else if (number >= 5 && number < 7) {
        console.log("Aluno em recuperação")
    } else if (number >= 7 ) {
        console.log("Aluno aprovado")
    } else {
        console.log("Aluno tirou mais que 10, isso é possível?")
    }
}

export default {
    descricao: descricao,
    questao: runQuestion
}