function consultar() {
    var inicio = window.document.getElementById('inicio').value;
    var fim = window.document.getElementById('fim').value;
    var passo = window.document.getElementById('passo').value;
    var resultado = window.document.getElementsByClassName('resultado')[0];

    // Convertendo os valores para números
    inicio = parseInt(inicio);
    fim = parseInt(fim);
    passo = parseInt(passo);

    var contagem = ""; // Variável para armazenar a sequência da contagem

    // Realizando a contagem
    for (var i = inicio; i <= fim; i += passo) {
        contagem += i + "👉 "; // Concatenando cada número com um espaço
    }

    contagem += "🏁"; // Adicionando a bandeira ao final

    // Exibindo o resultado
    resultado.innerText = `Contagem: ${contagem}`;
}
