console.log('Jeremy Bearimy')

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');

const button = document.querySelector('#btnCalcular');
const result = document.querySelector('p');

button.addEventListener('click', sumValues);

function sumValues(){
    result.innerHTML = 
        "El resultado es: " + (Number(input1.value) + Number(input2.value));
}

