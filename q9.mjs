import PromptSync from "prompt-sync";
import utils from "./utils.mjs";

const prompt = PromptSync()

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

function descricao() {
    return "Contagem regressiva de 10 até 1"
}

function runQuestion() {
    for (let i = 10; i > 0; i--) {
        console.log(i);
        utils.msleep(1000)
    }
}

export default {
    descricao: descricao,
    questao: runQuestion
}

