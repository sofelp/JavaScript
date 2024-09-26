var idade = 12
if (idade >= 18 && idade <65) {
    console.log('Você Deve Votar')
}  
else {
    if ((idade >=16 && idade <18) || idade >=65) {
        console.log('Voto Opcional')
    }
    else console.log('você não pode Votar, infelizmente')
}