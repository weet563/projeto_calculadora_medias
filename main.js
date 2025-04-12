const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Qual a nota miníma:'));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaLinha();
    atualizaMediasFinal();
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida!`)
    } else {
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}
function atualizaLinha(){
    let corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
function atualizaMediasFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('resultado-final').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}
function calculaMediaFinal(){
    let somasDasNotas = 0;

    for( let i = 0; i < notas.length; i++){
        somasDasNotas += notas[i]
    }

    return somasDasNotas/ notas.length;
}