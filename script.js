/**
 * SELEÇÃO DE ELEMENTOS DO DOM
 * Captura dos componentes estruturados no HTML usando document.querySelector
 */
const formSimulador = document.querySelector('#simulador-form');
const inputPalhada = document.querySelector('#input-palhada');
const selectRodovia = document.querySelector('#select-rodovia');
const errorContainer = document.querySelector('#error-container');
const resultContainer = document.querySelector('#result-container');
const resultadoStatus = document.querySelector('#resultado-status');
const planoAcao = document.querySelector('#plano-acao');

/**
 * ESCUTADOR DE EVENTOS (EVENT LISTENER)
 * Intercepta o envio do formulário para processar as validações e lógica
 */
formSimulador.addEventListener('submit', function (event) {
    // Impede o recarregamento padrão da página ao submeter o formulário
    event.preventDefault();

    // Ocultar containers para resetar o estado da tela
    esconderElemento(errorContainer);
    esconderElemento(resultContainer);

    // 1. CAPTURA E CONVERSÃO DOS VALORES
    const totalPalhadaText = inputPalhada.value.trim();
    const riscoRodovia = selectRodovia.value;
    
    // Captura os checkboxes marcados e transforma em um array de valores
    const checkboxesMarcados = document.querySelectorAll('input[name="recursos"]:checked');
    const recursosDisponiveis = Array.from(checkboxesMarcados).map(cb => cb.value);

    // 2. VALIDAÇÃO ESTRITA DE DADOS
    // Conversão explícita para número flutuante/inteiro
    const totalPalhada = Number(totalPalhadaText);

    // Validação: Campos vazios
    if (totalPalhadaText === "" || !riscoRodovia)
