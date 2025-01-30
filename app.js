
// variável que vai armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const amigoInput = document.getElementById('amigo');
    const nomeAmigo = amigoInput.value.trim();

    // Verifica se o campo de entrada está vazio
    if (nomeAmigo === '') {
        // Exibe um alerta caso o campo esteja vazio
        alert('Por favor, insira um nome.');
        return;
    }

    // Adiciona o nome à lista de amigos
    amigos.push(nomeAmigo);

    // Atualiza a lista visível na página
    atualizarListaAmigos();

    // Limpa o campo de entrada
    amigoInput.value = '';
}
