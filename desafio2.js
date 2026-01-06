function rankeada(vit=0, der=0){
    let pontos = vit - der;
    return pontos;
}
let saldoVitorias = rankeada(99,15);

function nivelHeroi(pontos){
    let nivel = "";
    if (pontos <= 10) {
        nivel = "Ferro";
    } else if (pontos <= 20) {
        nivel = "Bronze";
    } else if (pontos <= 50) {
        nivel = "Prata";
    } else if (pontos <= 80) {
        nivel = "Ouro";
    } else if (pontos <= 90) {
        nivel = "Diamante";
    } else if (pontos <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    } 
    return nivel;
}

let nivelAtual = nivelHeroi(saldoVitorias);

console.log(`O Herói tem de saldo de ${saldoVitorias} Vítorias e está no nível de ${nivelAtual}.`);