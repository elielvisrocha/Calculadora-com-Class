import Calculator from "./Calculadora.js";


let buttonOfSendDataOne = document.getElementsByClassName("send")[0].addEventListener("click", freezeDataSoma, true)
let buttonOfSendDataTwo = document.getElementsByClassName("send")[1].addEventListener("click", freezeDataSubtracao , true)
let resultado = document.getElementsByClassName("resultado");

function freezeDataSoma(e) {
    e.preventDefault()

    let valoresDosInputs = document.getElementsByClassName("soma");
    let mensagemDeErro = " Escreva dois números!!"
    let testeDeErrosParaUmInput = valoresDosInputs[0].value === "" && valoresDosInputs[1].value === "";;
    let testeDeErrosParaDoisInputs = valoresDosInputs[0].value === "" || valoresDosInputs[1].value === "";

    if (testeDeErrosParaUmInput || testeDeErrosParaDoisInputs) {
        return resultado[0].innerHTML = `<h2 style='color: white; display: inline;'>${mensagemDeErro}</h2>`
    }
    const OPERACAO = new Calculator(valoresDosInputs[0].value, valoresDosInputs[1].value);    

    return resultado[0].innerHTML = " " + OPERACAO.soma()
}

function freezeDataSubtracao(e) {
    e.preventDefault()

    let valoresDosInputs = document.getElementsByClassName("subtracao");
    let mensagemDeErro = " Escreva dois números!!"
    let testeDeErrosParaUmInput = valoresDosInputs[0].value === "" && valoresDosInputs[1].value === "";;
    let testeDeErrosParaDoisInputs = valoresDosInputs[0].value === "" || valoresDosInputs[1].value === "";

    if (testeDeErrosParaUmInput || testeDeErrosParaDoisInputs) {
        return resultado[1].innerHTML = `<h2 style='color: white; display: inline;'>${mensagemDeErro}</h2>`
    }
    const OPERACAO = new Calculator(valoresDosInputs[0].value, valoresDosInputs[1].value);    

    return resultado[1].innerHTML = " " + OPERACAO.subtracao()
}




