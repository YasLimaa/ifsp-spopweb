function exibirInicio() {
    return `
		<h1>Bem-vindo</h1>
		<p>Esta é a página inicial do nosso SPA</p>
	`;
}

function exibirSobre() {
    return `
		<h1>Sobre</h1>
		<p>Esta é nossa aula de Programação Dinâmica para Web e estamos aprendendo sobre SPAs</p>
	`;
}

function exibirContato() {
    return `
		<h1>Contato</h1>
		<p>Entre em contato conosco: (11) 0000-0000</p>
	`;
}

function exibirUsuario() {
    return `
        <h1>Usuário</h1>
		<p>teste</p>
    `
}

async function exibirPost() {
    // Coloca uma mensagem visual de "carregando" enquanto espera a API externa
    const container = document.getElementById('app');

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => console.log(json));

}

function exibirPhotos() {
    return `
        <h1>Photos</h1>
		<p>teste</p>
    `
}

const rotas = {
    '#': exibirInicio,
    '#sobre': exibirSobre,
    '#contato': exibirContato,
    '#usuario': exibirUsuario,
    '#post': exibirPost,
    '#photos': exibirPhotos
};

function gerenciarRota() {
	// 1. Definimos como rota padrão, caso nenhuma definida
    let hash = window.location.hash || '#';
	
	// 2. Verificamos se existe rota mapeada para a hash, se sim, invocamos a função armazenada, senão retornamos página não encontrada
    let conteudo = rotas[hash] ? rotas[hash]() : '<h1>Página não encontrada</h1>';

	// 3. Atualizamos o DOM para inserir o conteudo retornado (ou não) pela nossa função
	document.getElementById('app').innerHTML = conteudo;
}

// Ouvinte para o evento hashchange
window.addEventListener('hashchange', gerenciarRota);

window.addEventListener('load', gerenciarRota);





  
  