document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Cria uma nova linha na tabela
    const tabela = document.getElementById('tabelaCadastros').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    const celulaNome = novaLinha.insertCell(0);
    const celulaEmail = novaLinha.insertCell(1);
    
    celulaNome.textContent = nome;
    celulaEmail.textContent = email;

    // Limpa os campos do formulário
    document.getElementById('cadastroForm').reset();
});