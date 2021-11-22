function calcular_juros_compostos() {
    let investimento_inicial = parseFloat(document.getElementById("investimento_inicial").value);

    let investimento_mensal =  parseFloat(document.getElementById("investimento_mensal").value);
    var meses = parseInt(document.getElementById("meses").value);
    let taxa_de_juros = parseFloat(document.getElementById("taxa_de_juros").value);

    let investimento_acumulado = investimento_inicial;

    var total_investimento_acumulado = investimento_inicial + (investimento_mensal * meses);

    let juros_compostos = 0;
    let juros_compostos_total = 0;

    for (let i = 0; i < meses; i++) {
        juros_compostos = (investimento_acumulado + taxa_de_juros) / 100;
        juros_compostos_total += juros_compostos;
        investimento_acumulado += juros_compostos + investimento_mensal;
    }

    var valor_a_receber = total_investimento_acumulado + juros_compostos_total;
    

    document.getElementById("inicial").innerHTML = investimento_inicial;
    document.getElementById("mensal").innerHTML = investimento_mensal;
    document.getElementById("duracao").innerHTML = meses;
    document.getElementById("tt_investimento").innerHTML = Number(total_investimento_acumulado).toFixed(2);
    document.getElementById("juros_recebidos").innerHTML = Number(juros_compostos_total).toFixed(2);
    document.getElementById("a_receber").innerHTML = Number(valor_a_receber).toFixed(2);
    captar = document.getElementById('valor').value;
    document.getElementById('digito').innerHTML = captar;

    document.getElementById('formCalc').reset();
    return false;
}