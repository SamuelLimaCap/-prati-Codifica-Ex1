import promptSync from 'prompt-sync'
import CColors from './colors.mjs';

import q1 from './q1.mjs'
import questao2 from './q2.mjs'
import question3 from './q3.mjs'
import question4 from './q4.mjs'
import question5 from './q5.mjs'
import question6 from './q6.mjs'
import question7 from './q7.mjs'
import question8 from './q8.mjs'
import question9 from './q9.mjs'
import question10 from './q10.mjs'
import question11 from './q11.mjs'
import question12 from './q12.mjs'
import question13 from './q13.mjs'
import question14 from './q14.mjs'
import question15 from './q15.mjs'


const prompt = promptSync();
const questions = {
    1: q1,
    2: questao2,
    3: question3,
    4: question4,
    5: question5,
    6: question6,
    7: question7,
    8: question8,
    9: question9,
    10: question10,
    11: question11,
    12: question12,
    13: question13,
    14: question14,
    15: question15,
}

function start() {
    let wannaRunAgain = true;
    do {
        wannaRunAgain = runQuestions();

    } while (wannaRunAgain)
}

function runQuestions() {
    console.log(CColors["Reset"], "")
    console.log(CColors["FgBlue"], "Lista de seleção")
    console.log(CColors["Reset"], "")
    console.log(CColors["Bright"], "Selecione o número da questão que deseja testar:")
    console.log('----------')
    for (let indexValue in questions) {
        console.log(`${indexValue} || ${questions[indexValue].descricao()}`)
    }
    console.log('----------')
    console.log(CColors["Reset"], "")
    let questionSelected = Number(prompt('Opção: '))
    console.log('----------')

    if (Object.keys(questions).length < questionSelected || questionSelected == 0 || isNaN(questionSelected)) {
        console.log(CColors["Reset"], "")
        console.log(CColors["FgRed"], "Não existe esse exercício")
        console.log(CColors["Reset"], "")
    } else {
        questions[questionSelected].questao()
    }

    console.log('----------')
    console.log(CColors["Reset"], "")
    console.log( CColors["Bright"],'Deseja voltar para a lista de seleção?')
    console.log("")
    console.log('----------')
    console.log('1 || sim')
    console.log('2 || não')
    console.log('----------')
    console.log(CColors["Reset"], "")

    let shouldRunAgain = Number(prompt('Opção: '))
    if (shouldRunAgain == 1) {
        return true;
    }
    return false;

}


start()