import PromptSync from "prompt-sync";

let prompt = PromptSync()

function descricao() {
    return "Cálculo de gastos ao comprar maçãs"

}

function runQuestion() {
    console.log("Consulta de preço")
    console.log("---")
    console.log("Até 12 maçãs --- R$ 0,30 cada")
    console.log("12 maçãs ou mais --- R$ 0,25 cada")
    console.log("---")
    let quantidade = Number(prompt("Informe a quantidade de maçãs que deseja comprar: "))

    if (quantidade < 0 || isNaN(quantidade)) {
        console.log("Por favor, digite um valor válido")
        return
    }

    let total;
    if (quantidade < 12) {
        total = quantidade * 0.3;
    } else {
        total = quantidade * 0.25;
    }

    console.log(`O valor total a ser gasto será de: R$ ${total}`)
}

export default {
    descricao: descricao,
    questao: runQuestion
}
