//dedafio de logica DIO
let herois = [
    { nome: "Dario", quantidadexp: 21000 },
    { nome: "Ana", quantidadexp: 1500 },
    { nome: "Carlos", quantidadexp: 6000 },
]
  for (let i = 0; i < herois.length; i++) {
    let nome = herois[i].nome;
    let quantidadexp = herois[i].quantidadexp;
    let nivel = "";

if (quantidadexp <= 1000) {
    nivel = "Ferro";
} else if (quantidadexp <= 2000) {
    nivel = "Bronze";
} else if (quantidadexp <= 5000) {
    nivel = "Prata";
} else if (quantidadexp <= 7000) {
    nivel = "Ouro";
} else if (quantidadexp <= 8000) {
    nivel = "platina";
} else if (quantidadexp <= 9000) {
    nivel = "Ascendente";
} else if (quantidadexp <= 10000) {
    nivel = "Imortal";
} else if (quantidadexp > 10001) {
    nivel = "Radiante";
}

console.log("O heroi " + nome + " possui " + quantidadexp + 
               " pontos de experiência e é do nível " + nivel);
}