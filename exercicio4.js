/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
*/
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
};

function calcularPercentualRepresentacao(faturamentoPorEstado) {
    const totalFaturamento = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);

    const percentuais = {};

    for (const estado in faturamentoPorEstado) {
        const percentual = (faturamentoPorEstado[estado] / totalFaturamento) * 100;
        percentuais[estado] = percentual.toFixed(2);
    }

    return percentuais;
}

const percentuais = calcularPercentualRepresentacao(faturamentoPorEstado);

for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
}
