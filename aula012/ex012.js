var agora = new Date
var hora = agora.getHours();

if (hora >= 0 && hora <= 4) {
    console.log(`Agora são exatamente ${hora} Horas da Madrugada...`);
}
else if (hora > 4 && hora <= 12) {
    console.log(`Agora são exatamente ${hora} Horas da Manhã...`);
}
else if (hora > 12 && hora <= 18) {
    console.log(`Agora são exatamente ${hora} Horas da Tarde...`);
}
else if (hora > 18 && hora <= 23) {
    console.log(`Agora são exatamente ${hora} Horas da Noite...`);
}
else {
    console.log('Horário inválido');
}
