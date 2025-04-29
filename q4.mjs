import PromptSync from "prompt-sync";

const prompt = PromptSync()

function descricao() {
    return "Menu interativo"
}

function runQuestion() {
    console.log("Selecione 1 das 3 opções:")
    console.log('----------')
    console.log("1 - Batata")
    console.log("2 - Morango")
    console.log("3 - Alface")
    console.log('----------')

    const number = Number(prompt("Opção:"))

    if (isNaN(number) || number < 1 || number > 3) {
        console.log("Opção Inválida")
    }
    switch (number) {
        case 1:
            console.log("Você selecionou a opção 'Batata'")
            break;
        case 2:
            console.log("Você selecionou a opção 'Morango'")
            break;
        case 3:
            console.log("Você selecionou a opção 'Alface'")
    }
}

export default {
    descricao, descricao,
    questao: runQuestion,
}