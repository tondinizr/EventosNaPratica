const changeColor = document.querySelector('#changeColor');
const aniversario = document.getElementById('birthday');
const idadeInput = document.getElementById('age');

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
