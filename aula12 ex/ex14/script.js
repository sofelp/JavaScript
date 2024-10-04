function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto') // Corrigido getElementById
    var data = new Date()
    //var hora = data.getHours() // Parênteses no getHours
    var hora = 9
    msg.innerHTML = `Agora são ${hora} horas` // Removido parênteses desnecessários
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Agora são ${hora} da manhã`
        img.src = 'fotomanha.png' // Usar o nome correto da variável 'foto'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Agora são ${hora} da tarde`
        img.src = 'fototarde.png' // Usar o nome correto da variável 'foto'
    } else {
        msg.innerHTML = `Agora são ${hora} da noite`
        img.src = 'fotonoite.png' // Usar o nome correto da variável 'foto'
    }
}
