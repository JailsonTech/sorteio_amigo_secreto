
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

    // Verifica se o nome já está na lista
    if (amigos.includes(nomeAmigo)) {
        // Exibe um alerta caso o nome já esteja na lista
        alert('Esse nome já foi adicionado. Tente outro nome.');
        amigoInput.value = '';  // Limpa o campo de entrada
        amigoInput.focus();     // Focaliza o campo de entrada
        return;
    }

    // Verifica se o nome contém apenas letras (e espaços, se necessário)
    const nomeValido = /^[a-zA-Z\s]+$/.test(nomeAmigo);
    if (!nomeValido) {
        alert('Por favor, insira um nome válido contendo apenas letras.');
        amigoInput.value = '';  // Limpa o campo de entrada
        amigoInput.focus();     // Focaliza o campo de entrada
        return;
    }

    // Adiciona o nome à lista de amigos
    amigos.push(nomeAmigo);

    // Atualiza a lista visível na página
    atualizarListaAmigos();

    // Limpa o campo de entrada
    amigoInput.value = '';

    // Focaliza o campo de entrada para que o usuário possa adicionar um novo nome
    amigoInput.focus();
}

// Função para atualizar a lista de amigos na página
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizar
    listaAmigos.style = 'display:block';

    const container = document.getElementById('container-list');
    container.style = 'display:block';

    amigos.forEach(amigo => {
        const item = document.createElement('li');
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verifica se a lista de amigos está vazia
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia. Por favor, adicione nomes antes de sortear.');
        return;
    }

    // Gera um índice aleatório entre 0 e o comprimento da lista de amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome do amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado do sorteio
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>O amigo secreto é: ${amigoSorteado}</li>`;

    // Remove o nome sorteado da lista de amigos
    amigos.splice(indiceAleatorio, 1);

    // Atualiza a lista visível após o sorteio
    atualizarListaAmigos();
}

function reiniciar() {
    // Limpa a lista de amigos
    amigos = [];

    // Atualiza a lista visível (deve aparecer vazia)
    atualizarListaAmigos();

    // Limpa o resultado do sorteio
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';

    // Limpa o campo de entrada
    const amigoInput = document.getElementById('amigo');
    amigoInput.value = '';

    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.style = 'display:none'; // Limpa a lista antes de atualizar

    const container = document.getElementById('container-list');
    container.style = 'display:none';
    
    
}

// evento de tecla Enter no campo de entrada
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});
