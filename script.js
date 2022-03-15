// Pegando o elemento
let headerText = document.querySelector('#header');

// Criando o elemento que será adicionado
let news = document.createElement('h1');

// Adicionando a informação
news.innerText = 'Olá, mundo!';

//Inserindo no HTML
headerText.appendChild(news);

console.log(news);

let list = ['Tamara', 'Belo Horizonte', '34', 'Buritis', 'Especialista', 'Cruzeiro'];

// Captura o pai
let addArray = document.querySelector('#lista');

// Criar o filho com cada item da array
for (let index = 0; index < list.length; index++) {
    let item = list[index];
    let addArrayItem = document.createElement('li');
    addArrayItem.innerText = item;
    addArray.appendChild(addArrayItem);

}

function changeColor() {
    news.style.backgroundColor = 'black';
    news.style.color = 'white';
    news.style.padding = '10px';

}