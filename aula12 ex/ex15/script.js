function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique se foi digitado corretamente e tente dnv')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) 
        res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        if (fsex[0].checked) {
            gênero = 'Homem'
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}