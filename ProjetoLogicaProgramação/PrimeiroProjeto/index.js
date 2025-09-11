let heroi = 3;
let classicacao = " "
if (heroi <= 5) {
    classicacao = " Bronze"
} else if (heroi > 5 && heroi <= 50) {
    classicacao = " Prata"
} else {
    classicacao = " Ouro"
}

console.log("seu nível é" + classicacao)