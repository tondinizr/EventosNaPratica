# Projeto de Aula: Eventos em HTML/CSS/JavaScript

Este projeto consiste em uma página da web que demonstra o uso de eventos HTML, CSS e JavaScript para interatividade do usuário. A página inclui um formulário que permite aos usuários preencher informações pessoais, calcular a idade com base na data de nascimento, buscar informações de endereço por CEP e muito mais.

## Passo a passo para a aula

Siga os passos abaixo para conduzir a aula sobre eventos HTML:

### 1. Preparação

- Certifique-se de que os arquivos HTML, CSS e JavaScript estejam prontos no diretório do projeto.

- Crie o arquivo `main.js`;

- Descomente a linha de importação do arquivo JavaScript no final do corpo do documento HTML:

```html
<script src="main.js"></script>
```

### 2. Variáveis DOM

No arquivo `main.js`, crie variáveis para os elementos do DOM que você deseja interagir. Por exemplo:

```javascript
const changeColor = document.querySelector("#changeColor");
```

### 3. Inicialização

- Defina uma cor padrão no início do seu código JavaScript:

```javascript
let color = 'rgb(255, 255, 255)'; //branco
```

- Preencha o campo de data de nascimento com a data atual e adicione a classe 'hasValue' para destacá-lo:

```javascript
const dataAtual = new Date().toISOString().slice(0, 10);
birthday.value = dataAtual;
birthday.classList.add('hasValue');
```

### 4. Funções de Utilidade

No seu arquivo `main.js`, crie as funções de utilidade necessárias, como `random`, `calcularIdade`, `removerTracosEPontos`, `buscarEnderecoPorCEP`, e `mostrarToast`.

Exemplo:

```javascript
function random(number) {
    // implementação aqui!
}

// Outras funções...
```

### 5. Event Listeners

Adicione ouvintes de eventos para interagir com os elementos HTML. Por exemplo, para calcular a idade quando a data de nascimento é alterada:

```javascript
birthday.addEventListener('change', function () {
    // implementação aqui
});
```

### 6. Estilização Dinâmica

Adicione eventos que permitam a interação com a página, como a mudança de cor de fundo quando o botão "changeColor" é clicado:

```javascript
changeColor.onclick = function () {
    // implementação aqui
};
```

### 7. Requisições de API

Configure o evento de busca de endereço por CEP usando a API ViaCep:

```javascript
btnSearchCep.onclick = function (e) {
    // implementação aqui
}
```

### 8. Formulário e Toast

Adicione um ouvinte de evento de envio de formulário e exiba um toast de sucesso:

```javascript
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o comportamento padrão de envio do formulário
    // implementação aqui
});
```

### 9. Classe de Usuário

Declare a classe `User` para criar objetos de usuário com os dados do formulário:

```javascript
class User {
    constructor(nome, dataNascimento, idade, cep, endereco, cor) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cep = cep;
        this.endereco = endereco;
        this.cor = cor;
        this.idade = idade;
    }
}
```

### 10. Implementa as funções

- Mudar a cor quando clicar no icone
- Preencher a data de nascimento com a data de hoje quando carregar a página
- Ao alterar a data devemos calcular a idade e preenher o campo idade
- Devemos pesquisar o cep na api do ViaCep (https://viacep.com.br) e no sucesso preencher o campo reservado para o endereço (#adress) com os valores na seguinte sequencia: `${data.logradouro}, ${data.bairro}, ${data.localidade}/${data.uf}`; E no erro devemos exibir um toast com informando o erro;
- Ao enviar o formulário devemos consolar o usuário no console e exibir um toast de sucesso!

## Conclusão

Espero que este guia ajude você a conduzir uma aula eficaz sobre eventos HTML/CSS/JavaScript usando este projeto como exemplo. Encoraje os alunos a explorarem ainda mais o código e a desenvolverem suas habilidades de programação web.