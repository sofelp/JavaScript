function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.documento.getElemnetByid('foto')
    var data = new Date()
    var hora = data.getHours
    msg.innerHTML = (`agora são ${hora} horas`)
    if (hora >0 && <=12) {
        msg.innerHTML = (`agora São ${hora} da manhã`)
    }
    else if (hora >12 && <=18) {
        msg.innerHTML = (`Agora são ${hora} da Tarde`)
    }

    else {
        msg.innerHTML = (`agora são ${hora} da Noite`)
    }
}