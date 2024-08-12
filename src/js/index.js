// passo 1: dar um jeito de pegar o elemento html dos botões
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");
// passo 2: dar um jeito de identificar o clique do usuário no botao
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
// passo 3: desmarcar o botão selecionado anterior
const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");

// passo4 - marcar o botão clicado como se estivesse selecionado
botao.classList.add("selecionado");

// passo 5 - esconder a imagem anteriormente selecionada
const imagemAtiva = document.querySelector(".ativa");
imagemAtiva.classList.remove("ativa")

// passo 6 - mostrar a imagem clicada
imagens[indice].classList.add("ativa");

// passo 7 - esconder a informação do seletionado anteriormente
 const informacoesAtiva = document.querySelector(".informacoes.ativa");
 informacoesAtiva.classList.remove("ativa");

// passo 8 - mostrar a informação clicada
informacoes[indice].classList.add("ativa");

    })

})
