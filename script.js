// Pegando o elemento
const headerText = document.querySelector('#header');

// Criando o elemento que será adicionado
const news = document.createElement('h1');

// Adicionando a informação
news.innerText = 'Olá, mundo!';

// Inserindo no HTML
headerText.appendChild(news);

const list = ['Tamara', 'Belo Horizonte', '34', 'Buritis', 'Especialista', 'Cruzeiro'];

// Captura o pai
const addArray = document.querySelector('#lista');

// Criar o filho com cada item da array
for (let index = 0; index < list.length; index += 1) {
  const item = list[index];
  const addArrayItem = document.createElement('li');
  addArrayItem.innerText = item;
  addArray.appendChild(addArrayItem);
}

// function changeColor() {
//   news.style.backgroundColor = 'black';
//   news.style.color = 'white';
//   news.style.padding = '10px';
// }
