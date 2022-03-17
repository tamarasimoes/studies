let text = document.getElementById('p');
console.log(text);
let button = document.getElementById('button');
console.log(button);
let body = document.getElementById('body');

function mudabotao() {
  text.innerText = 'Feliz 4 anos do Casal Presida!';
  body.style.backgroundColor = 'black';
  text.style.color = 'white';

  let father = document.getElementById('father');
  let child = document.createElement('p');
  let child2 = document.getElementById('img');

  child.innerText = 'Obrigada por todo o seu amor, lealdade, paciência e por ter acreditado em nossa família. Te amo muito!'
  button.style.display = 'none';
  // child2.src = '/'
  father.appendChild(child); 
  father.appendChild(child2);
  child.style.color = 'white';
  child2.style.display = 'block';
  child2.style.margin = '0px auto';
  child2.style.borderRadius = '100%';
}

button.addEventListener('click', mudabotao);
