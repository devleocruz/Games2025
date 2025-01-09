function carregarConteudo(html) {
    fetch(html)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o conteúdo');
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('conteudo').innerHTML = html;
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo:', error);
        });
}

// A função abaixo transforma a seguinte em div:
{/* <div class="row m-3"></div>
<div class="row justify-content-center">
    <div class="col"></div>
    <div class="card m-5 col-6 bg-dark" style="width: 65rem; height: 30rem">
        <h3 class="card-title my-2" style="color: white">1. GTA VI</h3>
        <div class="card-body justify-content-lg-center d-flex">
            <iframe class="m-3 col-8" height="360px" width="720px" src="https://www.youtube.com/embed/QdBZY2fkU-0?si=aKfIBCxDtdVHT1mz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div class="m-3">
            <p class="card-text col-12" style="color: white; text-align: justify">Seria impossível não terminar essa lista com aquele que será, incontestavelmente, o maior lançamento de 2025. GTA VI chega depois de 12 anos de sucesso contínuo de seu antecessor, e considerando o padrão da Rockstar, é difícil não imaginar algo de imensa ambição. GTA V colocou a franquia em um patamar praticamente único na indústria, e a sequência tem tudo para mantê-la isolada no topo. - Breno Deolindo.</p>
            <a target="_blank" href="https://www.rockstargames.com/br/VI" class="btn btn-primary">Clique para mais informações</a>
            </div>
        </div>
    </div>
    <div class="col"></div>
</div> */}
function criarCard(posicao, titulo, linkYoutube, descricao, linkMaisInformacoes) {
    // Criar o div do container
    const container = document.createElement('div');
    container.className = 'row justify-content-center';
    container.id = `${posicao}`;

    // Criar a coluna do card
    const colunaCard = document.createElement('div');
    colunaCard.className = 'card m-5 col-12 col-md-8 col-lg-10 col-xl-8 bg-dark';
    colunaCard.style.maxWidth = '1200px';
    colunaCard.style.minHeight = '350px';

    // Criar o título do card
    const tituloCard = document.createElement('h3');
    tituloCard.className = 'card-title my-2';
    tituloCard.style.color = 'white';
    tituloCard.textContent = `${posicao}. ${titulo}`;

    // Criar o corpo do card
    const corpoCard = document.createElement('div');
    corpoCard.className = 'card-body d-flex flex-column flex-lg-row align-items-center justify-content-center';

    // Criar o iframe para incoporação de video do Yotube
    const iframe = document.createElement('iframe');
    iframe.className = 'm-3 col-12 col-lg-8';
    iframe.height = '360';
    iframe.width = '100%';
    iframe.src = linkYoutube;
    iframe.title = 'Player de vídeo do YouTube';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;

    // Criar o container da descrição
    const containerDescricao = document.createElement('div');
    containerDescricao.className = 'm-3 col-12 col-lg-4';

    // Criar o parágrafo
    const paragrafo = document.createElement('p');
    paragrafo.className = 'card-text';
    paragrafo.style.color = 'white';
    paragrafo.style.textAlign = 'justify';
    paragrafo.textContent = descricao;

    // Criar o botão de link
    const botaoLink = document.createElement('a');
    botaoLink.target = '_blank';
    botaoLink.href = linkMaisInformacoes;
    botaoLink.className = 'btn btn-primary';
    botaoLink.textContent = 'Clique para mais informações';

    // Adicionar os elementos ao container da descrição
    containerDescricao.appendChild(paragrafo);
    containerDescricao.appendChild(botaoLink);

    // Adicionar o iframe e a descrição ao corpo do card
    corpoCard.appendChild(iframe);
    corpoCard.appendChild(containerDescricao);

    // Adicionar o título e o corpo ao card
    colunaCard.appendChild(tituloCard);
    colunaCard.appendChild(corpoCard);

    // Adicionar o card ao container
    container.appendChild(colunaCard);

    return container;
}

 // Essa função pega o arquivo card.js
function carregarGames() {
    const conteudoDiv = document.getElementById('conteudo');
    conteudoDiv.innerHTML = '';

    for (const jogo in jogos) {
       const info = jogos[jogo];

       const card = criarCard(
            info.posicao,
            info.titulo,
            info.linkYoutube,
            info.descricao,
            info.linkMaisInformacoes
        );
        conteudoDiv.appendChild(card);
    }
}

function abreLink(id) {
    carregarGames();
    const conteudoDiv = document.getElementById(id);
    conteudoDiv.scrollIntoView({ behavior: 'smooth' });
}