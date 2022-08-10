function start(){
    var buttonCalcular = document.querySelector('#calculaIMC')
    buttonCalcular.addEventListener('click', clicaTio)

    var inputPeso = document.querySelector('#input-peso');
    var inputAltura = document.querySelector('#input-altura');

    inputPeso.addEventListener('input', clicaTio)
    inputAltura.addEventListener('input', clicaTio)
}

function calcularIMC(weight, height){
    return weight / (height * height)
}

function clicaTio() {
    var IMCResult = document.querySelector('#resultImc');
    var inputPeso = document.querySelector('#input-peso');
    var inputAltura = document.querySelector('#input-altura');

    var weight = Number(inputPeso.value);
    var height = Number(inputAltura.value);
    var IMC = calcularIMC(weight, height);
    var imcFormatado = IMC .toFixed(2).replace('.',',');
    IMCResult.textContent = imcFormatado

}

start()