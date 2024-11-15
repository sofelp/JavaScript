function calcular() {
    var entrada = document.getElementById('entrada').value;
    var saida = document.getElementById('saida')
    entrada = parseInt(entrada);
    if (entrada <=" ") {
        window.alert('Por favor digite um número')
    } else {
        saida.innerHTML = `
        1 x ${entrada} = ${entrada * 1}
        `
    }
}