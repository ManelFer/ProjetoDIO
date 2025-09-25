function RankHeroi (vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let level = "";
    if (saldoVitorias <= 10) {
        level = "Ferro"
    } else if (saldoVitorias > 10 && saldoVitorias <= 20) {
        level = "Bronze"
    } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
        level = "Prata"
    } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
        level = "Ouro"
    } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
        level = "Diamante"
    } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
        level = "Lendário"
    } else {
        level = "Imortal"
    }
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${level}`
}
let resultado = RankHeroi(80, 10)
console.log(resultado)