import PromptSync from "prompt-sync";

const prompt = PromptSync()

function descricao() {
    return "Cálculo de IMC"

}

function runQuestion() {
    let peso = Number(prompt("Digite o peso em kg: "))
    let altura = Number(prompt("Digite a altura em metros: "))

    if (isNaN(peso) || isNaN(altura)) {
        console.log("Peso ou altura inexistente")
        return
    }
    if (peso <=0 || altura <= 0) {
        console.log("Peso ou altura inexistente")
        return
    }
    let imc = peso / altura * altura;

    console.log(`IMC: ${imc} kg/m²`)
}

export default {
    descricao: descricao,
    questao: runQuestion
}