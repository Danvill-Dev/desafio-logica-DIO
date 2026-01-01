//dedafio de logica DIO

let nome = "Dario";
let quantidadexp = 21000;
let nivel;

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
