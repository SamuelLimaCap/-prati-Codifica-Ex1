import PromptSync from "prompt-sync";

const prompt = PromptSync()

function descricao() {
    return "Somatória de números"
}

function runQuestion() {
    let listaNums = []

    console.log("Iremos somar todos os números até você digitar o número 0")

    let shouldContinue = true;
    let i = 0;
    while (shouldContinue) {
        let itsANumber = true;

        do {
            let number = Number(prompt(`Digite o ${i+1} númeroº: `));
            if (isNaN(number)) {
                console.log("O que você digitou não pode ser considerado um número")
                itsANumber = false;
                continue;
            } 

            itsANumber = true;
            listaNums[i] = number;
            i++;
            if (number == 0) {
                shouldContinue = false;
            }
        } while (!itsANumber )
    }

    let total = 0;
    for(let num of listaNums) {
       total += num; 
    }

    console.log("---")
    console.log(`Total: ${total}`)
}

export default {
    descricao: descricao,
    questao: runQuestion
}