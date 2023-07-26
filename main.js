const form = document.getElementById('form-agenda');
const nome = [];
const telefone = [];
const tipo = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionalinha();
    atualizatabela();
});

function adicionalinha() {
    const inputNomePessoa = document.getElementById('nome-pessoa');
    const inputNumeroTelefone = document.getElementById('numero-telefone');
    const inputTipo = document.getElementById('tipo');

    if (telefone.includes(parseFloat(inputNumeroTelefone.value))) {
        alert(`O Numero: ${inputNumeroTelefone.value} já foi adicionado`)
    } else {
        nome.push(inputNomePessoa.value);
        telefone.push(parseFloat(inputNumeroTelefone.value));

        let linha = '<tr>';
        linha += `<td>${inputNomePessoa.value}</td>`;
        linha += `<td>${inputNumeroTelefone.value}</td>`;
        linha += `<td>${inputTipo.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomePessoa.value = '';
    inputNumeroTelefone.value = '';
    inputTipo.value = '';
}

function atualizatabela() {
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}