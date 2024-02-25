/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/
const fs = require('fs');

// Função para ler o arquivo JSON
function lerArquivoJSON(nomeArquivo) {
    try {
        const caminhoArquivo = `${__dirname}/${nomeArquivo}`;
        console.log(`Caminho absoluto do arquivo: ${caminhoArquivo}`);
        
        const conteudoArquivo = fs.readFileSync(caminhoArquivo, 'utf-8');
        return JSON.parse(conteudoArquivo);
    } catch (erro) {
        console.error(`Erro ao ler o arquivo JSON (${nomeArquivo}): ${erro.message}`);
        return null;
    }
}

// Nome do arquivo JSON (pinky.json)
const nomeArquivo = 'dados.json';

// Lê o conteúdo do arquivo JSON
const dadosFaturamento = lerArquivoJSON(nomeArquivo);

// Verifica se o arquivo foi lido com sucesso
if (dadosFaturamento && Array.isArray(dadosFaturamento)) {
    // Função para calcular estatísticas de faturamento
    function calcularEstatisticasDeFaturamento(dados) {
        let menorValor = Number.MAX_VALUE;
        let maiorValor = Number.MIN_VALUE;
        let totalFaturamento = 0;
        let diasComFaturamento = 0;

        for (let i = 0; i < dados.length; i++) {
            const dia = dados[i].dia;
            const valorDiario = dados[i].valor;

            // Ignorar dias sem faturamento
            if (valorDiario > 0) {
                // Atualizar menor e maior valor
                menorValor = Math.min(menorValor, valorDiario);
                maiorValor = Math.max(maiorValor, valorDiario);

                // Somar ao total para calcular a média
                totalFaturamento += valorDiario;
                diasComFaturamento++;
            }
        }

        const mediaMensal = totalFaturamento / diasComFaturamento;

        return {
            menorValor,
            maiorValor,
            diasComFaturamento,
            mediaMensal,
        };
    }

    // Exemplo de uso com os dados do arquivo JSON
    const estatisticas = calcularEstatisticasDeFaturamento(dadosFaturamento);

    console.log(`Menor valor de faturamento: ${estatisticas.menorValor}`);
    console.log(`Maior valor de faturamento: ${estatisticas.maiorValor}`);
    console.log(`Número de dias com faturamento: ${estatisticas.diasComFaturamento}`);
    console.log(`Média mensal de faturamento: ${estatisticas.mediaMensal}`);
} else {
    console.error(`Dados de faturamento inválidos ou ausentes no arquivo ${nomeArquivo}.`);
}
