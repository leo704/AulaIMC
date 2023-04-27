console.log("Teste do JS");

function calculaIMC() {
    let peso, altura, resp, classificacao;
    peso = parseFloat(document.getElementById("edtPeso").value);
    altura = parseFloat(document.getElementById("edtAltura").value);
    resp = peso / (altura * altura);

    if (resp <= 18.5) {
        classificacao = " Abaixo do peso";
    } else if (resp <= 24.9) {
        classificacao = " Peso ideal";
    } else if (peso <= 29.9) {
        classificacao = " Levemente acima do peso";
    } else {
        classificacao = " programador, termine a tabela";
    }

    if (resp) {
        document.getElementById("resp").innerText = "O seu IMC é: " + resp +
            "A sua classificação é a seguinte:" + classificacao;
    }



}