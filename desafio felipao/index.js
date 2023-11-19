let nomeHeroi = "Ynho"
let xpHeroi = 10.001;

let nivelHeroi;

if (xpHeroi < 1000){
    nivelHeroi = "Ferro";
}    else if (xpHeroi >= 1.001 && xpHeroi <= 2.000){
    nivelHerio = "Bronze";
}
    else if (xpHeroi >= 2.001 && xpHeroi <= 5.000){
        nivelHerio = "Prata"
}
    else if (xpHeroi >= 6.001 && xpHeroi <= 7.000){
        nivelHerio ="Ouro"
}
    else if (xpHeroi >= 7.001 && xpHeroi <= 8.000){
        nivelHerio = "Platina"
}
    else if (xpHeroi >= 8.001 && xpHeroi <= 9.000){
        nivelHerio = "Ascendente" 
}
    else if (xpHeroi >= 9.001 && xpHeroi <= 10.000){
        nivelHerio = "Imortal"
}
    else {
        nivelHeroi = "Radiante";
    }

console.log("O Héroi de nome " + nomeHeroi + " está no nivel de " + nivelHeroi)