const clicouEmCalcular= (evento)=> {
    evento.preventDefault();
    
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    let mensagem;

    let resultado= peso / (altura * altura);

    if(resultado<17)
    mensagem= `Seu IMC é ${resultado.toFixed(1)} kg/m². Diagnóstico: Muito inferior`;
    else if(resultado>17 && resultado<18.49)
    mensagem= `Seu IMC é ${resultado.toFixed(1)} kg/m². Diagnóstico: Inferior `;
    else if(resultado>18.5 && resultado<24.99)
    mensagem= `Seu IMC é ${resultado.toFixed(1)} kg/m². Diagnóstico: Habitual `;
    else if(resultado>25 && resultado<29.99)
    mensagem= `Seu IMC é ${resultado.toFixed(1)} kg/m². Diagnóstico: Elevado `;
    else if(resultado>30 && resultado<34.99)
    mensagem= `Seu IMC é ${resultado.toFixed(1)} kg/m². Diagnóstico: Obesidade `;
    else if(resultado>35 && resultado<39.99)
    mensagem= `Seu IMC é ${resultado.toFixed(1)} kg/m². Diagnóstico: Obesidade (Grave) `;
    else if(resultado>40)
    mensagem= `Seu IMC é ${resultado.toFixed(1)} kg/m². Diagnóstico: Obesidade (Extrema) `;

    const campoResultado = document.getElementById('resultado');
    campoResultado.innerHTML = mensagem;
};

const iniciar = () => {
    document.getElementById('calcular').addEventListener('click', clicouEmCalcular);
};

document.addEventListener('DOMContentLoaded', iniciar);