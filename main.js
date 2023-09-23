const changeColor = document.querySelector('#changeColor');
const aniversario = document.getElementById('birthday');
const idadeInput = document.getElementById('age');
const cepInput = document.getElementById('cep');
const searchBtn = document.getElementById('searchCep')

let color = 'rgb(255,255,255)';

const dataAtual = new Date().toJSON().slice(0,10);
aniversario.value = dataAtual
aniversario.classList.add('hasValue');

// Funcoes

function gerarNumeroAleatorios(number) {
    return Math.floor(
        Math.random() * (number + 1)
    );
}

function calcularIdade(dataNascimento){
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();

    if(
        hoje.getMonth() < nascimento.getMonth() ||
        (
            hoje.getMonth() === nascimento.getMonth() &&  
            hoje.getDate() < nascimento.getDate()
        )
    ){
        idade --;
    }
    return idade;
}

function buscarEnderecoPorCep(cep){
    const apiUrl = `https://viacep.com.br/ws/${cep}/json`
    
    fetch(apiUrl)
        .then(response => {
            if(!response.ok){
                throw new Error('erro')
            }
            return response.jons();
        })
        .then(dados => {
            console.log('dados:  '. fados)
        })
        .catch(erro => {
            console.log('falha:  '. erro)
        })
}

// EventLsiternes


changeColor.addEventListener('click', function() {
    const red = gerarNumeroAleatorios(255);
    const gren = gerarNumeroAleatorios(255);
    const blue = gerarNumeroAleatorios(255);
    color = `rgb(${red},${gren},${blue})`;
    const colorLigth = `rgba(${red},${gren},${blue},0.8)`;
    document.documentElement.style.setProperty(
        '--cor-personalida',
        color
    );
    document.documentElement.style.setProperty(
        '--cor-personalida-light',
        colorLigth
    );
})

aniversario.addEventListener('change', function() {
    const dataNascimento = aniversario.value;
    const idade = calcularIdade(dataNascimento);
    idadeInput.value = idade;
    idadeInput.classList.add('hasValue');
})

cepInput.addEventListener('input', function (e) {
    let value = e.target.value;
    // 00.000-000
    value = value.replace(/\D/g, '');
    if(value.length >= 2) {
       value = value.substring(0,2) + '.' + value.substring(2);
    }
    if(value.length >= 6){
        value = value.substring(0,6) + '-' + value.substring(6);
    }
    e.target.value = value;

})

searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const valueCep = cepInput.value
        .replace('.','')
        .replace('-','');
    buscarEnderecoPorCep(valueCep);
})