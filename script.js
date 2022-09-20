function calcularMedia() {
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;
    var nota4 = document.getElementById("nota4").value;
    var soma = parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4);
    var mediaFinal = soma / 4;
    media.innerHTML = "A sua média é: " + mediaFinal.toFixed(1);

    if (mediaFinal < 6.5) {
        resultado.innerHTML = "Infelizmente, você foi reprovado.";
    } else {
        resultado.innerHTML = "Parabéns! Você foi aprovado.";
    }

}