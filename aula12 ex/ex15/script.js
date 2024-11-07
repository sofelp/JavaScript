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
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 21) {
                img.setAttribute('src', 'homenjovem.png')
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homen40.png')
            }
            else {
                //Velho
                img.setAttribute('src', 'homenvelho.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 21) {
                //Jovem
                img.setAttribute('scr', 'mulhernova.png')
            }
           else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher40.png')
            }
            else {
                //Velha
                img.setAttribute('src', 'mulhervelha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}