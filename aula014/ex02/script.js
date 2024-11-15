function calcular() {
    var entrada = document.getElementById('numero').value;
    var saida = document.getElementById('saida')
    entrada = parseInt(entrada);

    

    if (isNaN(entrada) || entrada === "") {
        window.alert('Por favor, digite um número');
        return;
    }


        saida.innerHTML = `
        1 x ${entrada} = ${entrada * 1}
        `
    }