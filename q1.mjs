import promptSync from 'prompt-sync'

const prompt = promptSync();

function descricao() {
    return "Verifica se é par ou impar";
}

function runQuestion() {
    let number = Number(prompt('Informe um número inteiro: '))

    if (isNaN(number)) {
        console.log("O que você digitou não é um número")
    } else if (number % 1 != 0) {
        console.log("É necessário que seja um número inteiro")
    } else if (number % 2 == 0) {
        console.log('Esse numero é par')
    } else {
        console.log('Esse numero é impar')
    }
}

let questao1 = {
    descricao: descricao,
    questao: runQuestion
}
export default questao1