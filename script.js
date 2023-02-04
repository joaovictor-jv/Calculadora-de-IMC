const height = document.querySelector('.height');
const weight = document.querySelector('.weight');
const button = document.querySelector('button');
const resultImc = document.querySelector('.imcResult');
const divResult = document.querySelector('.result');
const form = document.querySelector('.form');
const inputHeight = document.querySelector('.height');
const inputWeight = document.querySelector('.weight');

const tr1 = document.getElementById('smaller18');
const tr2 = document.getElementById('between24');
const tr3 = document.getElementById('between29');
const tr4 = document.getElementById('between39');
const tr5 = document.getElementById('larger40');

const trBg = document.querySelectorAll('[data-bg]');

const paintTable = (imc) => {
    if (imc < 18.5) {
        tr1.classList.add('bg');

    } else if (imc > 18.5 && imc < 24.9) {
        tr2.classList.add('bg');

    } else if (imc > 25.0 && imc < 29.9) {
        tr3.classList.add('bg');

    } else if (imc > 30.0 && imc < 39.9) {
        tr4.classList.add('bg');

    } else if (imc > 40) {
        tr5.classList.add('bg');

    }
}

const calcIMC = () => {

    const currentHeight = parseFloat(height.value.toString().replace(",", "."));
    const currentWeight = parseFloat(weight.value.toString().replace(",", "."));
    let imc;

    if (isNaN(height.value.toString().replace(",", ".")) || isNaN(weight.value.toString().replace(",", "."))) {
        alert("Por favor, digite apenas números");
    }

    if (height.value > 100) {
        const newHeight = height.value / 100;
        imc = currentWeight / (newHeight * newHeight);
        resultImc.innerHTML = `Seu imc é de ${imc.toFixed(2)}`;

    } else {
        imc = currentWeight / (currentHeight * currentHeight);
        resultImc.innerHTML = `Seu imc é de ${imc.toFixed(2)}`;
    }

    paintTable(imc);

    return imc;

};

button.addEventListener('click', (event) => {

    event.preventDefault();

    for(var i = 0; i < trBg.length; i++){
        if(trBg[i].classList.contains('bg')) {
            trBg[i].classList.remove('bg');
        }
    }

    calcIMC();
    form.classList.add('slideAnimation');
    form.style.left = "10%";

    setTimeout(() => {
        divResult.style.display = 'block';
    }, 500);

    inputHeight.value = '';
    inputWeight.value = '';

});