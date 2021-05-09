const calcular = document.getElementById('calcular');

function dre() {
    const receita = document.getElementById('bruta').value;
    const impostos = document.getElementById('impostos').value;
    const cmv = document.getElementById('cmv').value;
    const resultado = document.getElementById('resultado');

    if(receita !== '' && impostos !== '' && cmv !== '') {
        const valorDRE = (receita - impostos - cmv).toFixed(2);

        resultado.textContent = `Olá, o lucro bruto equivale a R$ ${valorDRE}.`;

    } else {
        resultado.textContent = 'Preencha todos os campos!';
    }
}

calcular.addEventListener('click', dre);