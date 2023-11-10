let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
    livrosOrdenados = livros.sort((a, b) => a.preco - b.preco); //Ordenar do maior preço para o maior
    exibirOsLivrosNaTela(livrosOrdenados);
}