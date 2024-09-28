var agora = new Date
var hora = agora.getHours

if (hora <12) {
    console.log(`Agora são exatamente ${hora} Horas da Manhã...`)
}

else if (hora >0) {
    console.log(`Agora são exatamente ${hora} Horas da Madrugada...`)
}

else if (hora >18) {
    console.log(`Agora são exatamente ${hora} Horas da Noite...`)
}

else {
    console.log(`Agora são exatamente ${hora} da Tarde...`)
}