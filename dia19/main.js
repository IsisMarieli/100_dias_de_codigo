// 496932dd-534d-4e38-bfc3-5c22b5b8eeb5
// https://openweathermap.org/img/wn/${dados.weather[0].icon}.png
// https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric

const API = '496932dd-534d-4e38-bfc3-5c22b5b8eeb5';

function dadosNaTela(dados){

    // Exibindo dados consumidos da API na tela com DOM
    document.querySelector(".cidade").innerHTML = "Tempo em" + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].descripiton;
    document.querySelector(".unidade").innerHTML = "Unidade: " + dados.main.unidity + "%";
    document.querySelector("img-previsao").src = 'https://openweathermap.org/img/wn/${dados.weather[0].icon}.png';
}

async function buscarCidade(cidade) {
    const dados = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API}&lang=pt_br&units=metric').then(resposta => resposta.json())

    dadosNaTela(dados);
}

function clickButton(){
    const cidade = document.querySelector(".input-cidade").value;

    buscarCidade(cidade);
}

