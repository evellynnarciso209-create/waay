

/* =========================================================
   CHAVES DO LOCALSTORAGE
========================================================= */

const CHAVE_USUARIOS =
    "waayUsuarios";

const CHAVE_USUARIO_LOGADO =
    "waayUsuarioLogado";

const CHAVE_CARRINHO =
    "waayCarrinho";

const CHAVE_FAVORITOS =
    "waayFavoritos";

const CHAVE_CUPOM =
    "waayCupomAtivo";

const CHAVE_PEDIDOS =
    "waayPedidos";






const produtos = [

    /* ================= CREATINAS ================= */

    {
        id: 1,
        nome: "Creatina Monohidratada ",
        categoria: "creatinas",
        preco: 99.90,
        imagem: "imagens/creatina-1.jpg",
        descricao:
            "Creatina monohidratada para acompanhar sua rotina de treinos."
            
    },

    {
        id: 2,
        nome: "Creatina 300g",
        categoria: "creatinas",
        preco: 119.90,
        imagem: "imagens/creatina-2.jpg",
        descricao:
            "Creatina para quem busca praticidade e performance."
    },

    {
        id: 3,
        nome: "Creatina 100% Pura",
        categoria: "creatinas",
        preco: 109.90,
        imagem: "imagens/creatina-3.jpg",
        descricao:
            "Creatina 100% pura para sua rotina fitness."
    },

    {
        id: 4,
        nome: "Creatina Monohidratada 250g",
        categoria: "creatinas",
        preco: 89.90,
        imagem: "imagens/creatina-4.png",
        descricao:
            "Opção prática de creatina monohidratada."
    },

    

    {
        id: 6,
        nome: "Creatina Micronizada",
        categoria: "creatinas",
        preco: 124.90,
        imagem: "imagens/creatina-6.png",
        descricao:
            "Creatina micronizada para complementar seus treinos."
    },

    
    {
        id: 8,
        nome: "Creatina Performance",
        categoria: "creatinas",
        preco: 114.90,
        imagem: "imagens/creatina-8.png",
        descricao:
            "Suplementação prática para acompanhar seu treino."
    },

    


    /* ================= WHEYS ================= */

    {
        id: 11,
        nome: "Whey Protein Chocolate",
        categoria: "wheys",
        preco: 149.90,
        imagem: "imagens/whey-chocolate.jpg",
        descricao:
            "Whey Protein sabor chocolate para sua rotina de treinos."
    },

    {
        id: 12,
        nome: "Whey Protein Baunilha",
        categoria: "wheys",
        preco: 159.90,
        imagem: "imagens/whey-baunilha.jpg",
        descricao:
            "Whey Protein sabor baunilha."
    },

    {
        id: 13,
        nome: "Whey Protein Morango",
        categoria: "wheys",
        preco: 149.90,
        imagem: "imagens/whey-morango.jpg",
        descricao:
            "Whey Protein sabor morango."
    },

    {
        id: 14,
        nome: "Whey Protein Cookies",
        categoria: "wheys",
        preco: 169.90,
        imagem: "imagens/whey-cookies.jpg",
        descricao:
            "Whey Protein sabor cookies."
    },

    {
        id: 15,
        nome: "Whey Protein Chocolate Branco",
        categoria: "wheys",
        preco: 164.90,
        imagem: "imagens/whey-chocolate-branco.png",
        descricao:
            "Whey Protein sabor chocolate branco."
    },

    {
        id: 16,
        nome: "Whey Protein Cappuccino",
        categoria: "wheys",
        preco: 159.90,
        imagem: "imagens/whey-cappuccino.png",
        descricao:
            "Whey Protein sabor cappuccino."
    },

    {
        id: 17,
        nome: "Whey Protein Banana",
        categoria: "wheys",
        preco: 154.90,
        imagem: "imagens/whey-banana.png",
        descricao:
            "Whey Protein sabor banana."
    },

    {
        id: 18,
        nome: "Whey Protein doce de leite",
        categoria: "wheys",
        preco: 139.90,
        imagem: "imagens/whey-natural.jpg",
        descricao:
            "Whey Protein com sabor natural de doce de leite feito em casa."
    },

   


    /* ================= ROUPAS ================= */

    {
        id: 31,
        nome: "Camiseta Fitness",
        categoria: "roupas",
        preco: 89.90,
        imagem: "imagens/camiseta-waay.png",
        descricao:
            "Camiseta WAAY para treinos e uso diário."
    },

    {
        id: 32,
        nome: "Shorts fit masculino",
        categoria: "roupas",
        preco: 99.90,
        imagem: "imagens/shorts-waay.png",
        descricao:
            "Shorts WAAY confortável para treinos."
    }, {
        id: 33,
        nome: "Shorts fit feminino",
        categoria: "roupas",
        preco: 99.90,
        imagem: "imagens/shorts-waay01.webp",
        descricao:
            "Shorts WAAY confortável para treinos."
    },

    {
        id: 33,
        nome: "Regata fit",
        categoria: "roupas",
        preco: 79.90,
        imagem: "imagens/regata-waay.png",
        descricao:
            "Regata esportiva WAAY."
    },

    {
        id: 34,
        nome: "Legging fit",
        categoria: "roupas",
        preco: 119.90,
        imagem: "imagens/legging-waay.png",
        descricao:
            "Legging WAAY para treinos."
    },

    {
        id: 35,
        nome: "Top Fitness ",
        categoria: "roupas",
        preco: 89.90,
        imagem: "imagens/top-waay.png",
        descricao:
            "Top fitness WAAY."
    },

    {
        id: 36,
        nome: "Moletom ",
        categoria: "roupas",
        preco: 159.90,
        imagem: "imagens/moletom-waay.jpg",
        descricao:
            "Moletom WAAY para dias mais frios."
    },

   


    /* ================= TÊNIS ================= */

    {
        id: 41,
        nome: "chuteira quadra nike",
        categoria: "tenis",
        preco: 999.90,
        imagem: "imagens/tenis-runner.avif",
        descricao:
            "Tênis WAAY Runner para corrida e atividades esportivas."
    },

    {
        id: 42,
        nome: "chuteira adidas campo ",
        categoria: "tenis",
        preco: 950.90,
        imagem: "imagens/tenis-training.avif",
        descricao:
            "Tênis WAAY para treinamento."
    },

    {
        id: 43,
        nome: "Tênis corrida ",
        categoria: "tenis",
        preco: 659.90,
        imagem: "imagens/tenis-sport.webp",
        descricao:
            "Tênis esportivo WAAY."
    },

    {
        id: 44,
        nome: "Tênis corre 4",
        categoria: "tenis",
        preco: 629.90,
        imagem: "imagens/tenis-performance.webp",
        descricao:
            "Tênis WAAY Performance."
    },

   


    /* ================= BARRINHAS ================= */

    {
        id: 46,
        nome: "Barrinha de Proteína Chocolate",
        categoria: "barrinhas",
        preco: 9.90,
        imagem: "imagens/barrinha-chocolate.jpg",
        descricao:
            "Barrinha de proteína sabor chocolate."
    },

    {
        id: 47,
        nome: "Barrinha de Proteína Morango",
        categoria: "barrinhas",
        preco: 9.90,
        imagem: "imagens/barrinha-morango.png",
        descricao:
            "Barrinha de proteína sabor morango."
    },

    {
        id: 48,
        nome: "Barrinha de Proteína Cookies",
        categoria: "barrinhas",
        preco: 10.90,
        imagem: "imagens/barrinha-cookies.jpg",
        descricao:
            "Barrinha de proteína sabor cookies."
    },

    {
        id: 49,
        nome: "Barrinha de Proteína Caramelo",
        categoria: "barrinhas",
        preco: 10.90,
        imagem: "imagens/barrinha-caramelo.jpg",
        descricao:
            "Barrinha de proteína sabor caramelo."
    },

   

];


/* =========================================================
   DADOS
========================================================= */

let carrinho =
    lerJSON(CHAVE_CARRINHO, []);

let favoritos =
    lerJSON(CHAVE_FAVORITOS, []);


/* =========================================================
   FUNÇÕES LOCALSTORAGE
========================================================= */

function lerJSON(chave, valorPadrao) {

    try {

        const valor =
            localStorage.getItem(chave);

        if (!valor) {

            return valorPadrao;

        }

        return JSON.parse(valor);

    } catch (erro) {

        console.error(
            "Erro ao ler:",
            chave,
            erro
        );

        return valorPadrao;

    }

}


function salvarJSON(chave, valor) {

    localStorage.setItem(
        chave,
        JSON.stringify(valor)
    );

}


/* =========================================================
   MOEDA
========================================================= */

function moeda(valor) {

    return Number(valor || 0)
        .toFixed(2)
        .replace(".", ",");

}


/* =========================================================
   ESCAPAR HTML
========================================================= */

function escaparHTML(texto) {

    return String(texto || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   IMAGEM DO PRODUTO
========================================================= */

function imagemProdutoHTML(
    produto,
    classe = ""
) {

    const imagem =
        produto.imagem || "";

    const nome =
        escaparHTML(
            produto.nome
        );


    const icone =
        iconeCategoria(
            produto.categoria
        );


    return `

        <img
            src="${escaparHTML(imagem)}"
            alt="${nome}"
            class="${classe}"
            onerror="
                this.style.display='none';
                this.nextElementSibling.style.display='flex';
            "
        >

        <div
            class="imagem-placeholder"
            style="display:none;"
        >

            <div class="icone-placeholder">
                ${icone}
            </div>

            <span>
                Adicione a imagem em:
            </span>

            <small>
                ${escaparHTML(imagem)}
            </small>

        </div>

    `;

}


/* =========================================================
   ÍCONE POR CATEGORIA
========================================================= */

function iconeCategoria(categoria) {

    const icones = {

        creatinas: "💪",

        wheys: "🥤",

        roupas: "👕",

        tenis: "👟",

        barrinhas: "🍫"

    };


    return (
        icones[categoria] ||
        "🏋️"
    );

}


/* =========================================================
   DESCRIÇÃO
========================================================= */

function obterDescricaoProduto(produto) {

    if (produto.descricao) {

        return produto.descricao;

    }


    return (
        "Produto WAAY desenvolvido para acompanhar " +
        "sua rotina fitness e seus treinos."
    );

}


/* =========================================================
   NAVEGAÇÃO
========================================================= */

let paginaAnteriorProduto =
    "produtos";


function mostrarPagina(id) {

    const paginas =
        document.querySelectorAll(
            ".pagina"
        );


    paginas.forEach(
        pagina => {

            pagina.classList.add(
                "escondida"
            );

        }
    );


    const pagina =
        document.getElementById(id);


    if (!pagina) {

        return;

    }


    pagina.classList.remove(
        "escondida"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (id === "inicio") {

        mostrarMaisVendidos();

    }


    if (id === "produtos") {

        aplicarFiltros();

    }


    if (id === "creatinas") {

        filtrarCategoria(
            "creatinas",
            "listaCreatinas"
        );

    }


    if (id === "wheys") {

        filtrarCategoria(
            "wheys",
            "listaWheys"
        );

    }


    if (id === "roupas") {

        filtrarCategoria(
            "roupas",
            "listaRoupas"
        );

    }


    if (id === "tenis") {

        filtrarCategoria(
            "tenis",
            "listaTenis"
        );

    }


    if (id === "barrinhas") {

        filtrarCategoria(
            "barrinhas",
            "listaBarrinhas"
        );

    }


    if (id === "carrinho") {

        atualizarCarrinho();

    }


    if (id === "favoritos") {

        mostrarFavoritos();

    }


    if (id === "login") {

        atualizarConta();

    }


    if (id === "checkout") {

        atualizarCheckout();

    }

}


/* =========================================================
   CARD DE PRODUTO
========================================================= */

function criarCard(produto) {

    const favoritado =
        favoritos.includes(
            produto.id
        );


    return `

        <article
            class="produto"
            onclick="abrirProduto(${produto.id})"
        >


            <button
                class="favoritar"
                type="button"
                onclick="
                    event.stopPropagation();
                    alternarFavorito(${produto.id});
                "
            >

                ${
                    favoritado
                        ? "❤️ Favoritado"
                        : "♡ Favoritar"
                }

            </button>



            <div class="produto-imagem">

                ${imagemProdutoHTML(produto)}

            </div>



            <h3>
                ${escaparHTML(produto.nome)}
            </h3>



            <div class="avaliacao">

                ★★★★★

            </div>



            <div class="preco">

                R$
                ${moeda(produto.preco)}

            </div>



            <button
                type="button"
                onclick="
                    event.stopPropagation();
                    adicionarCarrinho(${produto.id});
                "
            >

                🛒 ADICIONAR AO CARRINHO

            </button>


        </article>

    `;

}


/* =========================================================
   ABRIR PRODUTO
========================================================= */

function abrirProduto(id) {

    const produto =
        produtos.find(
            item =>
                item.id === Number(id)
        );


    if (!produto) {

        return;

    }


    paginaAnteriorProduto =
        obterPaginaAtual();


    const area =
        document.getElementById(
            "produtoDetalhesConteudo"
        );


    if (!area) {

        return;

    }


    area.innerHTML = `

        <div class="produto-detalhe">


            <div
                class="produto-detalhe-imagem"
            >

                ${imagemProdutoHTML(produto)}


            </div>



            <div
                class="produto-detalhe-info"
            >


                <span class="produto-badge">

                    PRODUTO WAAY

                </span>



                <h2>

                    ${escaparHTML(produto.nome)}

                </h2>



                <div
                    class="avaliacao"
                >

                    ★★★★★

                </div>



                <div
                    class="produto-detalhe-preco"
                >

                    R$
                    ${moeda(produto.preco)}

                </div>



                <p>

                    ${escaparHTML(
                        obterDescricaoProduto(produto)
                    )}

                </p>



                <div
                    class="quantidade-produto"
                >

                    <button
                        type="button"
                        onclick="
                            alterarQuantidadeProduto(-1)
                        "
                    >
                        −
                    </button>


                    <span
                        id="quantidadeProduto"
                    >
                        1
                    </span>


                    <button
                        type="button"
                        onclick="
                            alterarQuantidadeProduto(1)
                        "
                    >
                        +
                    </button>

                </div>



                <button
                    type="button"
                    class="botao-carrinho-detalhe"
                    onclick="
                        adicionarProdutoDetalhe(
                            ${produto.id}
                        )
                    "
                >

                    🛒 ADICIONAR AO CARRINHO

                </button>



                <button
                    type="button"
                    class="botao-comprar-detalhe"
                    onclick="
                        comprarProdutoDetalhe(
                            ${produto.id}
                        )
                    "
                >

                    🛍️ COMPRAR AGORA

                </button>


            </div>


        </div>

    `;


    window.produtoAtual =
        produto;

    window.quantidadeProdutoAtual =
        1;


    mostrarPagina(
        "produtoDetalhes"
    );

}


/* =========================================================
   PÁGINA ATUAL
========================================================= */

function obterPaginaAtual() {

    const paginas =
        document.querySelectorAll(
            ".pagina"
        );


    for (
        const pagina of paginas
    ) {

        if (
            !pagina.classList.contains(
                "escondida"
            )
        ) {

            return pagina.id;

        }

    }


    return "inicio";

}


/* =========================================================
   VOLTAR DO PRODUTO
========================================================= */

function voltarDaPaginaProduto() {

    mostrarPagina(
        paginaAnteriorProduto ||
        "produtos"
    );

}


/* =========================================================
   QUANTIDADE
========================================================= */

function alterarQuantidadeProduto(
    valor
) {

    if (
        !window.quantidadeProdutoAtual
    ) {

        window.quantidadeProdutoAtual =
            1;

    }


    window.quantidadeProdutoAtual +=
        Number(valor);


    if (
        window.quantidadeProdutoAtual < 1
    ) {

        window.quantidadeProdutoAtual =
            1;

    }


    const elemento =
        document.getElementById(
            "quantidadeProduto"
        );


    if (elemento) {

        elemento.textContent =
            window.quantidadeProdutoAtual;

    }

}


/* =========================================================
   ADICIONAR PRODUTO DO DETALHE
========================================================= */

function adicionarProdutoDetalhe(id) {

    const quantidade =
        window.quantidadeProdutoAtual ||
        1;


    for (
        let i = 0;
        i < quantidade;
        i++
    ) {

        adicionarCarrinho(
            id,
            false
        );

    }


    alert(
        "Produto adicionado ao carrinho!"
    );

}


/* =========================================================
   COMPRAR AGORA
========================================================= */

function comprarProdutoDetalhe(id) {

    const quantidade =
        window.quantidadeProdutoAtual ||
        1;


    for (
        let i = 0;
        i < quantidade;
        i++
    ) {

        adicionarCarrinho(
            id,
            false
        );

    }


    mostrarPagina(
        "carrinho"
    );

}


/* =========================================================
   CARRINHO
========================================================= */

function adicionarCarrinho(
    id,
    mostrarAviso = true
) {

    const produto =
        produtos.find(
            item =>
                item.id === Number(id)
        );


    if (!produto) {

        return;

    }


    const itemExistente =
        carrinho.find(
            item =>
                item.id === produto.id
        );


    if (itemExistente) {

        itemExistente.quantidade +=
            1;

    } else {

        carrinho.push({

            id:
                produto.id,

            nome:
                produto.nome,

            preco:
                produto.preco,

            imagem:
                produto.imagem,

            quantidade:
                1

        });

    }


    salvarJSON(
        CHAVE_CARRINHO,
        carrinho
    );


    atualizarContador();


    if (mostrarAviso) {

        alert(
            produto.nome +
            " foi adicionado ao carrinho!"
        );

    }

}


/* =========================================================
   SALVAR CARRINHO
========================================================= */

function salvarCarrinho() {

    salvarJSON(
        CHAVE_CARRINHO,
        carrinho
    );

}


/* =========================================================
   CONTADOR
========================================================= */

function atualizarContador() {

    const contador =
        document.getElementById(
            "contadorCarrinho"
        );


    if (!contador) {

        return;

    }


    const quantidade =
        carrinho.reduce(
            (
                total,
                item
            ) => {

                return total +
                    Number(
                        item.quantidade || 0
                    );

            },
            0
        );


    contador.textContent =
        quantidade;

}


/* =========================================================
   ATUALIZAR CARRINHO
========================================================= */

function atualizarCarrinho() {

    const area =
        document.getElementById(
            "itensCarrinho"
        );


    if (!area) {

        return;

    }


    if (
        !carrinho.length
    ) {

        area.innerHTML = `

            <div class="conta-card">

                <h2>
                    Seu carrinho está vazio.
                </h2>

                <p class="conta-subtitulo">

                    Adicione produtos para continuar.

                </p>

                <button
                    class="botao-conta"
                    onclick="
                        mostrarPagina('produtos')
                    "
                >

                    VER PRODUTOS

                </button>

            </div>

        `;


        atualizarResumoCarrinho();

        return;

    }


    area.innerHTML = "";


    carrinho.forEach(
        item => {

            const produto =
                produtos.find(
                    p =>
                        p.id === item.id
                );


            const imagem =
                produto ||
                item;


            const subtotal =
                Number(item.preco) *
                Number(item.quantidade);


            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "item-carrinho";


            div.innerHTML = `

                <div
                    class="item-carrinho-imagem"
                >

                    ${imagemProdutoHTML(
                        imagem
                    )}

                </div>


                <div>

                    <h3>
                        ${escaparHTML(item.nome)}
                    </h3>

                    <div
                        class="item-carrinho-preco"
                    >

                        R$
                        ${moeda(item.preco)}

                    </div>

                    <small>

                        Subtotal:
                        R$
                        ${moeda(subtotal)}

                    </small>

                </div>


                <div
                    class="controles-carrinho"
                >

                    <button
                        onclick="
                            alterarQuantidadeCarrinho(
                                ${item.id},
                                -1
                            )
                        "
                    >
                        −
                    </button>

                    <strong>
                        ${item.quantidade}
                    </strong>

                    <button
                        onclick="
                            alterarQuantidadeCarrinho(
                                ${item.id},
                                1
                            )
                        "
                    >
                        +
                    </button>

                </div>


                <button
                    class="botao-remover"
                    onclick="
                        removerDoCarrinho(
                            ${item.id}
                        )
                    "
                >

                    Remover

                </button>

            `;


            area.appendChild(
                div
            );

        }
    );


    atualizarResumoCarrinho();

}


/* =========================================================
   QUANTIDADE CARRINHO
========================================================= */

function alterarQuantidadeCarrinho(
    id,
    valor
) {

    const item =
        carrinho.find(
            produto =>
                produto.id === Number(id)
        );


    if (!item) {

        return;

    }


    item.quantidade +=
        Number(valor);


    if (
        item.quantidade <= 0
    ) {

        carrinho =
            carrinho.filter(
                produto =>
                    produto.id !==
                    Number(id)
            );

    }


    salvarCarrinho();

    atualizarCarrinho();

    atualizarContador();

}


/* =========================================================
   REMOVER
========================================================= */

function removerDoCarrinho(id) {

    carrinho =
        carrinho.filter(
            item =>
                item.id !== Number(id)
        );


    salvarCarrinho();

    atualizarCarrinho();

    atualizarContador();

}


/* =========================================================
   SUBTOTAL
========================================================= */

function calcularSubtotal() {

    return carrinho.reduce(
        (
            total,
            item
        ) => {

            return total +
                Number(item.preco) *
                Number(item.quantidade);

        },
        0
    );

}


/* =========================================================
   CUPOM ATIVO
========================================================= */

function cupomAtivo() {

    return (
        localStorage.getItem(
            CHAVE_CUPOM
        ) === "FITNESS"
    );

}


/* =========================================================
   DESCONTO
========================================================= */

function calcularDesconto() {

    if (
        cupomAtivo()
    ) {

        return Math.min(
            15,
            calcularSubtotal()
        );

    }


    return 0;

}


/* =========================================================
   TOTAL
========================================================= */

function calcularTotal() {

    return Math.max(
        0,
        calcularSubtotal() -
        calcularDesconto()
    );

}


/* =========================================================
   RESUMO CARRINHO
========================================================= */

function atualizarResumoCarrinho() {

    const subtotal =
        calcularSubtotal();


    const desconto =
        calcularDesconto();


    const total =
        calcularTotal();


    const subtotalElemento =
        document.getElementById(
            "subtotalCarrinho"
        );


    const descontoElemento =
        document.getElementById(
            "valorDesconto"
        );


    const totalElemento =
        document.getElementById(
            "totalCarrinho"
        );


    const linhaDesconto =
        document.getElementById(
            "linhaDesconto"
        );


    if (subtotalElemento) {

        subtotalElemento.textContent =
            moeda(subtotal);

    }


    if (descontoElemento) {

        descontoElemento.textContent =
            moeda(desconto);

    }


    if (totalElemento) {

        totalElemento.textContent =
            moeda(total);

    }


    if (linhaDesconto) {

        linhaDesconto.style.display =
            desconto > 0
                ? "flex"
                : "none";

    }


    atualizarMensagemCupom();

}


/* =========================================================
   APLICAR CUPOM
========================================================= */

function aplicarCupom() {

    const input =
        document.getElementById(
            "codigoCupom"
        );


    const mensagem =
        document.getElementById(
            "mensagemCupom"
        );


    if (!input) {

        return;

    }


    const codigo =
        input.value
            .trim()
            .toUpperCase();


    if (
        codigo === "FITNESS"
    ) {

        localStorage.setItem(
            CHAVE_CUPOM,
            "FITNESS"
        );


        if (mensagem) {

            mensagem.textContent =
                "✓ Cupom FITNESS aplicado! R$ 15,00 de desconto.";

            mensagem.className =
                "mensagem-cupom sucesso";

        }


        atualizarCarrinho();

        atualizarCheckout();

        return;

    }


    localStorage.removeItem(
        CHAVE_CUPOM
    );


    if (mensagem) {

        mensagem.textContent =
            "✕ Cupom inválido. O único código válido é FITNESS.";

        mensagem.className =
            "mensagem-cupom erro";

    }


    atualizarResumoCarrinho();

    atualizarCheckout();

}


/* =========================================================
   MENSAGEM CUPOM
========================================================= */

function atualizarMensagemCupom() {

    const mensagem =
        document.getElementById(
            "mensagemCupom"
        );


    if (!mensagem) {

        return;

    }


    if (
        cupomAtivo()
    ) {

        mensagem.textContent =
            "✓ Cupom FITNESS ativo.";

        mensagem.className =
            "mensagem-cupom sucesso";

    }

}


/* =========================================================
   ENTER CUPOM
========================================================= */

function verificarEnterCupom(
    event
) {

    if (
        event.key === "Enter"
    ) {

        aplicarCupom();

    }

}


/* =========================================================
   FAVORITOS
========================================================= */

function alternarFavorito(id) {

    id =
        Number(id);


    if (
        favoritos.includes(id)
    ) {

        favoritos =
            favoritos.filter(
                item =>
                    item !== id
            );

    } else {

        favoritos.push(id);

    }


    salvarJSON(
        CHAVE_FAVORITOS,
        favoritos
    );


    mostrarFavoritos();


    const pagina =
        obterPaginaAtual();


    if (
        pagina === "produtos"
    ) {

        aplicarFiltros();

    }


    if (
        [
            "creatinas",
            "wheys",
            "roupas",
            "tenis",
            "barrinhas"
        ].includes(
            pagina
        )
    ) {

        filtrarCategoria(
            pagina,
            "lista" +
            pagina.charAt(0).toUpperCase() +
            pagina.slice(1)
        );

    }

}


/* =========================================================
   FAVORITOS
========================================================= */

function mostrarFavoritos() {

    const area =
        document.getElementById(
            "listaFavoritos"
        );


    if (!area) {

        return;

    }


    const lista =
        produtos.filter(
            produto =>
                favoritos.includes(
                    produto.id
                )
        );


    if (!lista.length) {

        area.innerHTML = `

            <div class="conta-card">

                <h2>
                    Você ainda não possui favoritos.
                </h2>

                <p class="conta-subtitulo">

                    Clique em ♡ Favoritar nos produtos.

                </p>

                <button
                    class="botao-conta"
                    onclick="
                        mostrarPagina('produtos')
                    "
                >

                    VER PRODUTOS

                </button>

            </div>

        `;

        return;

    }


    area.innerHTML =
        lista
            .map(
                produto =>
                    criarCard(produto)
            )
            .join("");

}


/* =========================================================
   FILTROS
========================================================= */

function aplicarFiltros() {

    const min =
        parseFloat(
            document.getElementById(
                "precoMin"
            )?.value
        );


    const max =
        parseFloat(
            document.getElementById(
                "precoMax"
            )?.value
        );


    const ordem =
        document.getElementById(
            "ordenacao"
        )?.value;


    let lista =
        [...produtos];


    if (
        !isNaN(min)
    ) {

        lista =
            lista.filter(
                produto =>
                    produto.preco >= min
            );

    }


    if (
        !isNaN(max)
    ) {

        lista =
            lista.filter(
                produto =>
                    produto.preco <= max
            );

    }


    ordenarLista(
        lista,
        ordem
    );


    mostrarProdutos(
        lista
    );

}


/* =========================================================
   ORDENAR
========================================================= */

function ordenarLista(
    lista,
    ordem
) {

    if (
        ordem === "menor"
    ) {

        lista.sort(
            (
                a,
                b
            ) =>
                a.preco -
                b.preco
        );

    }


    if (
        ordem === "maior"
    ) {

        lista.sort(
            (
                a,
                b
            ) =>
                b.preco -
                a.preco
        );

    }


    if (
        ordem === "nome"
    ) {

        lista.sort(
            (
                a,
                b
            ) =>
                a.nome.localeCompare(
                    b.nome,
                    "pt-BR"
                )
        );

    }

}


/* =========================================================
   MOSTRAR PRODUTOS
========================================================= */

function mostrarProdutos(
    lista
) {

    const area =
        document.getElementById(
            "listaProdutos"
        );


    if (!area) {

        return;

    }


    if (!lista.length) {

        area.innerHTML = `

            <div class="conta-card">

                <h2>
                    Nenhum produto encontrado.
                </h2>

                <p class="conta-subtitulo">
                    Tente mudar os filtros.
                </p>

            </div>

        `;

        return;

    }


    area.innerHTML =
        lista
            .map(
                produto =>
                    criarCard(produto)
            )
            .join("");

}


/* =========================================================
   FILTRO POR CATEGORIA
========================================================= */

function filtrarCategoria(
    categoria,
    elemento
) {

    const area =
        document.getElementById(
            elemento
        );


    if (!area) {

        return;

    }


    let lista =
        produtos.filter(
            produto =>
                produto.categoria ===
                categoria
        );


    const nome =
        categoria.charAt(0).toUpperCase() +
        categoria.slice(1);


    const min =
        parseFloat(
            document.getElementById(
                "min" + nome
            )?.value
        );


    const max =
        parseFloat(
            document.getElementById(
                "max" + nome
            )?.value
        );


    const ordem =
        document.getElementById(
            "ordem" + nome
        )?.value;


    if (!isNaN(min)) {

        lista =
            lista.filter(
                produto =>
                    produto.preco >= min
            );

    }


    if (!isNaN(max)) {

        lista =
            lista.filter(
                produto =>
                    produto.preco <= max
            );

    }


    if (
        ordem === "menor"
    ) {

        lista.sort(
            (
                a,
                b
            ) =>
                a.preco -
                b.preco
        );

    }


    if (
        ordem === "maior"
    ) {

        lista.sort(
            (
                a,
                b
            ) =>
                b.preco -
                a.preco
        );

    }


    if (
        ordem === "az"
    ) {

        lista.sort(
            (
                a,
                b
            ) =>
                a.nome.localeCompare(
                    b.nome
                )
        );

    }


    if (
        ordem === "za"
    ) {

        lista.sort(
            (
                a,
                b
            ) =>
                b.nome.localeCompare(
                    a.nome
                )
        );

    }


    area.innerHTML =
        lista
            .map(
                produto =>
                    criarCard(produto)
            )
            .join("");

}


/* =========================================================
   PESQUISA
========================================================= */

function pesquisarProduto() {

    const campo =
        document.getElementById(
            "campoPesquisa"
        );


    if (!campo) {

        return;

    }


    const termo =
        campo.value
            .trim()
            .toLowerCase();


    if (!termo) {

        mostrarPagina(
            "produtos"
        );

        return;

    }


    const resultados =
        produtos.filter(
            produto =>
                produto.nome
                    .toLowerCase()
                    .includes(
                        termo
                    )
        );


    mostrarPagina(
        "pesquisa"
    );


    const texto =
        document.getElementById(
            "textoPesquisa"
        );


    const area =
        document.getElementById(
            "resultadosPesquisa"
        );


    if (texto) {

        texto.textContent =
            `Resultados para: "${campo.value}"`;

    }


    if (!area) {

        return;

    }


    if (!resultados.length) {

        area.innerHTML = `

            <div class="conta-card">

                <h2>
                    Produto não encontrado.
                </h2>

                <p class="conta-subtitulo">

                    Tente pesquisar por outro nome.

                </p>

            </div>

        `;

        return;

    }


    area.innerHTML =
        resultados
            .map(
                produto =>
                    criarCard(produto)
            )
            .join("");

}


/* =========================================================
   ENTER PESQUISA
========================================================= */

function pesquisarEnter(
    event
) {

    if (
        event.key === "Enter"
    ) {

        pesquisarProduto();

    }

}


/* =========================================================
   LOGIN / CADASTRO
========================================================= */

function obterUsuarios() {

    return lerJSON(
        CHAVE_USUARIOS,
        []
    );

}


function salvarUsuarios(
    usuarios
) {

    salvarJSON(
        CHAVE_USUARIOS,
        usuarios
    );

}


function obterUsuarioLogado() {

    return lerJSON(
        CHAVE_USUARIO_LOGADO,
        null
    );

}


/* =========================================================
   ABRIR CONTA
========================================================= */

function abrirMinhaConta() {

    mostrarPagina(
        "login"
    );

    atualizarConta();

}


/* =========================================================
   MOSTRAR LOGIN
========================================================= */

function mostrarLogin() {

    document
        .getElementById("loginBox")
        ?.classList.remove(
            "escondido"
        );


    document
        .getElementById("cadastroBox")
        ?.classList.add(
            "escondido"
        );


    document
        .getElementById("areaConta")
        ?.classList.add(
            "escondido"
        );

}


/* =========================================================
   MOSTRAR CADASTRO
========================================================= */

function mostrarCadastro() {

    document
        .getElementById("loginBox")
        ?.classList.add(
            "escondido"
        );


    document
        .getElementById("cadastroBox")
        ?.classList.remove(
            "escondido"
        );


    document
        .getElementById("areaConta")
        ?.classList.add(
            "escondido"
        );

}


/* =========================================================
   MENSAGEM CONTA
========================================================= */

function mensagemConta(
    id,
    texto,
    tipo = ""
) {

    const elemento =
        document.getElementById(
            id
        );


    if (!elemento) {

        return;

    }


    elemento.textContent =
        texto;


    elemento.className =
        "mensagem-conta " +
        tipo;

}


/* =========================================================
   CADASTRAR
========================================================= */

function cadastrar() {

    const nome =
        document
            .getElementById(
                "nomeCadastro"
            )
            .value
            .trim();


    const email =
        document
            .getElementById(
                "emailCadastro"
            )
            .value
            .trim()
            .toLowerCase();


    const senha =
        document
            .getElementById(
                "senhaCadastro"
            )
            .value;


    const confirmacao =
        document
            .getElementById(
                "senhaCadastroConfirmacao"
            )
            .value;


    if (!nome) {

        mensagemConta(
            "mensagemCadastro",
            "Digite seu nome.",
            "erro"
        );

        return;

    }


    if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
            .test(email)
    ) {

        mensagemConta(
            "mensagemCadastro",
            "Digite um e-mail válido.",
            "erro"
        );

        return;

    }


    if (
        senha.length < 6
    ) {

        mensagemConta(
            "mensagemCadastro",
            "A senha precisa ter pelo menos 6 caracteres.",
            "erro"
        );

        return;

    }


    if (
        senha !== confirmacao
    ) {

        mensagemConta(
            "mensagemCadastro",
            "As senhas não são iguais.",
            "erro"
        );

        return;

    }


    const usuarios =
        obterUsuarios();


    const existe =
        usuarios.some(
            usuario =>
                usuario.email ===
                email
        );


    if (existe) {

        mensagemConta(
            "mensagemCadastro",
            "Este e-mail já possui uma conta.",
            "erro"
        );

        return;

    }


    const novoUsuario = {

        id:
            Date.now(),

        nome:
            nome,

        email:
            email,

        senha:
            senha,

        criadoEm:
            new Date()
                .toISOString()

    };


    usuarios.push(
        novoUsuario
    );


    salvarUsuarios(
        usuarios
    );


    const sessao = {

        id:
            novoUsuario.id,

        nome:
            novoUsuario.nome,

        email:
            novoUsuario.email,

        criadoEm:
            novoUsuario.criadoEm

    };


    localStorage.setItem(
        CHAVE_USUARIO_LOGADO,
        JSON.stringify(
            sessao
        )
    );


    document
        .getElementById(
            "nomeCadastro"
        )
        .value = "";


    document
        .getElementById(
            "emailCadastro"
        )
        .value = "";


    document
        .getElementById(
            "senhaCadastro"
        )
        .value = "";


    document
        .getElementById(
            "senhaCadastroConfirmacao"
        )
        .value = "";


    atualizarConta();

    atualizarBotaoConta();


    alert(
        "Conta criada com sucesso! 🎉"
    );

}


/* =========================================================
   LOGIN
========================================================= */

function login() {

    
    const email =
        document
            .getElementById(
                "emailLogin"
            )
            .value
            .trim()
            .toLowerCase();


    const senha =
        document
            .getElementById(
                "senhaLogin"
            )
            .value;


    if (
        !email ||
        !senha
    ) {

        mensagemConta(
            "mensagemLogin",
            "Digite seu e-mail e sua senha.",
            "erro"
        );

        return;

    }


    const usuarios =
        obterUsuarios();


    const usuario =
        usuarios.find(
            item =>
                item.email ===
                email &&
                item.senha ===
                senha
        );


    if (!usuario) {

        mensagemConta(
            "mensagemLogin",
            "E-mail ou senha incorretos.",
            "erro"
        );

        return;

    }


    const sessao = {

        id:
            usuario.id,

        nome:
            usuario.nome,

        email:
            usuario.email,

        criadoEm:
            usuario.criadoEm

    };


    localStorage.setItem(
        CHAVE_USUARIO_LOGADO,
        JSON.stringify(
            sessao
        )
    );


    document
        .getElementById(
            "emailLogin"
        )
        .value = "";


    document
        .getElementById(
            "senhaLogin"
        )
        .value = "";


    atualizarConta();

    atualizarBotaoConta();


    alert(
        "Login realizado com sucesso!"
    );

}


/* =========================================================
   ENTER LOGIN
========================================================= */

function loginEnter(
    event
) {

    if (
        event.key === "Enter"
    ) {

        login();

    }

}


/* =========================================================
   ENTER CADASTRO
========================================================= */

function cadastroEnter(
    event
) {

    if (
        event.key === "Enter"
    ) {

        cadastrar();

    }

}


/* =========================================================
   ATUALIZAR CONTA
========================================================= */

function atualizarConta() {

    const usuario =
        obterUsuarioLogado();


    if (!usuario) {

        mostrarLogin();

        return;

    }


    document
        .getElementById(
            "loginBox"
        )
        ?.classList.add(
            "escondido"
        );


    document
        .getElementById(
            "cadastroBox"
        )
        ?.classList.add(
            "escondido"
        );


    document
        .getElementById(
            "areaConta"
        )
        ?.classList.remove(
            "escondido"
        );


    const primeiroNome =
        usuario.nome
            .trim()
            .split(" ")[0];


    const nomeConta =
        document.getElementById(
            "nomeUsuarioConta"
        );


    if (nomeConta) {

        nomeConta.textContent =
            "Olá, " +
            primeiroNome +
            "!";

    }


    const nome =
        document.getElementById(
            "dadosNome"
        );


    if (nome) {

        nome.textContent =
            usuario.nome;

    }


    const email =
        document.getElementById(
            "dadosEmail"
        );


    if (email) {

        email.textContent =
            usuario.email;

    }


    const data =
        document.getElementById(
            "dadosData"
        );


    if (
        data &&
        usuario.criadoEm
    ) {

        data.textContent =
            new Date(
                usuario.criadoEm
            )
                .toLocaleDateString(
                    "pt-BR"
                );

    }


    const avatar =
        document.getElementById(
            "avatarUsuario"
        );


    if (avatar) {

        avatar.textContent =
            usuario.nome
                .trim()
                .charAt(0)
                .toUpperCase();

    }


    atualizarBotaoConta();

}


/* =========================================================
   BOTÃO DO HEADER
========================================================= */

function atualizarBotaoConta() {

    const botao =
        document.getElementById(
            "botaoConta"
        );


    if (!botao) {

        return;

    }


    const usuario =
        obterUsuarioLogado();


    if (usuario) {

        const nome =
            usuario.nome
                .trim()
                .split(" ")[0];


        botao.innerHTML =
            `👤 <span>${escaparHTML(nome)}</span>`;

    } else {

        botao.innerHTML =
            "👤 <span>Minha conta</span>";

    }

}


/* =========================================================
   LOGOUT
========================================================= */

function logout() {

    localStorage.removeItem(
        CHAVE_USUARIO_LOGADO
    );


    atualizarBotaoConta();

    mostrarPagina(
        "inicio"
    );


    alert(
        "Você saiu da sua conta."
    );

}


/* =========================================================
   CHECKOUT
========================================================= */

function finalizarCompra() {

    if (
        !carrinho.length
    ) {

        alert(
            "Seu carrinho está vazio."
        );

        return;

    }


    const usuario =
        obterUsuarioLogado();


    if (!usuario) {

        alert(
            "Entre ou crie sua conta antes de finalizar a compra."
        );


        abrirMinhaConta();

        return;

    }


    preencherDadosUsuario();

    atualizarCheckout();

    mostrarPagina(
        "checkout"
    );


    mostrarDadosPagamento();

}


/* =========================================================
   PREENCHER USUÁRIO
========================================================= */

function preencherDadosUsuario() {

    const usuario =
        obterUsuarioLogado();


    if (!usuario) {

        return;

    }


    const campo =
        document.getElementById(
            "nomeEntrega"
        );


    if (
        campo &&
        !campo.value
    ) {

        campo.value =
            usuario.nome;

    }

}


/* =========================================================
   CHECKOUT
========================================================= */

function atualizarCheckout() {

    const subtotal =
        calcularSubtotal();


    const desconto =
        calcularDesconto();


    const total =
        calcularTotal();


    const subtotalElemento =
        document.getElementById(
            "checkoutSubtotal"
        );


    const descontoElemento =
        document.getElementById(
            "checkoutDesconto"
        );


    const totalElemento =
        document.getElementById(
            "checkoutTotal"
        );


    const linhaDesconto =
        document.getElementById(
            "checkoutDescontoLinha"
        );


    if (subtotalElemento) {

        subtotalElemento.textContent =
            moeda(subtotal);

    }


    if (descontoElemento) {

        descontoElemento.textContent =
            moeda(desconto);

    }


    if (totalElemento) {

        totalElemento.textContent =
            moeda(total);

    }


    if (linhaDesconto) {

        if (
            desconto > 0
        ) {

            linhaDesconto.classList.add(
                "ativo"
            );

        } else {

            linhaDesconto.classList.remove(
                "ativo"
            );

        }

    }


    mostrarProdutosCheckout();

}


/* =========================================================
   PRODUTOS CHECKOUT
========================================================= */

function mostrarProdutosCheckout() {

    const area =
        document.getElementById(
            "resumoCheckoutProdutos"
        );


    if (!area) {

        return;

    }


    if (!carrinho.length) {

        area.innerHTML =
            "<p>Seu carrinho está vazio.</p>";

        return;

    }


    area.innerHTML =
        carrinho
            .map(
                item => {

                    const subtotal =
                        Number(item.preco) *
                        Number(item.quantidade);


                    return `

                        <div
                            class="item-checkout"
                        >

                            <div
                                class="item-checkout-info"
                            >

                                <strong>
                                    ${escaparHTML(
                                        item.nome
                                    )}
                                </strong>

                                <span>
                                    ${item.quantidade}
                                    unidade(s)
                                </span>

                            </div>


                            <strong>
                                R$
                                ${moeda(subtotal)}
                            </strong>

                        </div>

                    `;

                }
            )
            .join("");

}


/* =========================================================
   PAGAMENTO
========================================================= */

function mostrarDadosPagamento() {

    const pagamento =
        document.querySelector(
            'input[name="pagamento"]:checked'
        );


    const area =
        document.getElementById(
            "dadosPagamento"
        );


    if (!area) {

        return;

    }


    if (!pagamento) {

        area.innerHTML = `

            <p>
                Escolha uma forma de pagamento.
            </p>

        `;

        return;

    }


    if (
        pagamento.value === "pix"
    ) {

        area.innerHTML = `

            <div
                class="pagamento-detalhes"
            >

                <h3>
                    Pagamento via PIX
                </h3>

                <p>
                    Ao confirmar o pedido,
                    o pagamento via PIX será
                    indicado no resumo do pedido.
                </p>

                <div
                    class="pagamento-aviso"
                >

                    PIX selecionado.

                </div>

            </div>

        `;

        return;

    }


    if (
        pagamento.value === "cartao"
    ) {

        area.innerHTML = `

            <div
                class="pagamento-detalhes"
            >

                <h3>
                    Dados do cartão
                </h3>


                <div class="checkout-grid">


                    <div
                        class="campo-checkout campo-largo"
                    >

                        <label>
                            Número do cartão
                        </label>

                        <input
                            type="text"
                            id="numeroCartao"
                            placeholder="0000 0000 0000 0000"
                            maxlength="19"
                            oninput="formatarCartao(this)"
                        >

                    </div>


                    <div
                        class="campo-checkout campo-largo"
                    >

                        <label>
                            Nome no cartão
                        </label>

                        <input
                            type="text"
                            id="nomeCartao"
                            placeholder="Nome como está no cartão"
                        >

                    </div>


                    <div
                        class="campo-checkout"
                    >

                        <label>
                            Validade
                        </label>

                        <input
                            type="text"
                            id="validadeCartao"
                            placeholder="MM/AA"
                            maxlength="5"
                            oninput="formatarValidade(this)"
                        >

                    </div>


                    <div
                        class="campo-checkout"
                    >

                        <label>
                            CVV
                        </label>

                        <input
                            type="password"
                            id="cvvCartao"
                            placeholder="123"
                            maxlength="4"
                        >

                    </div>


                </div>


                <small>

                    🔒 Não armazenamos os dados
                    do seu cartão no navegador.

                </small>

            </div>

        `;

        return;

    }


    if (
        pagamento.value === "boleto"
    ) {

        area.innerHTML = `

            <div
                class="pagamento-detalhes"
            >

                <h3>
                    Boleto bancário
                </h3>

                <p>
                    Ao confirmar seu pedido,
                    o boleto será indicado como
                    forma de pagamento escolhida.
                </p>

                <div
                    class="pagamento-aviso"
                >

                    🧾 Boleto selecionado.

                </div>

            </div>

        `;

    }

}


/* =========================================================
   CONFIRMAR PEDIDO
========================================================= */

function confirmarPedido() {

    const usuario =
        obterUsuarioLogado();


    if (!usuario) {

        alert(
            "Você precisa estar logado para finalizar."
        );

        abrirMinhaConta();

        return;

    }


    if (!carrinho.length) {

        alert(
            "Seu carrinho está vazio."
        );

        mostrarPagina(
            "carrinho"
        );

        return;

    }


    const campos = [

        "nomeEntrega",
        "cpfEntrega",
        "telefoneEntrega",
        "cepEntrega",
        "enderecoEntrega",
        "numeroEntrega",
        "cidadeEntrega",
        "estadoEntrega"

    ];


    for (
        const id of campos
    ) {

        const campo =
            document.getElementById(
                id
            );


        if (
            !campo ||
            !campo.value.trim()
        ) {

            alert(
                "Preencha todos os dados de entrega."
            );


            campo?.focus();

            return;

        }

    }


    const pagamento =
        document.querySelector(
            'input[name="pagamento"]:checked'
        );


    if (!pagamento) {

        alert(
            "Escolha uma forma de pagamento."
        );

        return;

    }


    /* ===============================
       VALIDAR CARTÃO
    =============================== */

    if (
        pagamento.value ===
        "cartao"
    ) {

        const numero =
            document.getElementById(
                "numeroCartao"
            );


        const nome =
            document.getElementById(
                "nomeCartao"
            );


        const validade =
            document.getElementById(
                "validadeCartao"
            );


        const cvv =
            document.getElementById(
                "cvvCartao"
            );


        if (
            !numero?.value.trim() ||
            !nome?.value.trim() ||
            !validade?.value.trim() ||
            !cvv?.value.trim()
        ) {

            alert(
                "Preencha todos os dados do cartão."
            );

            return;

        }

    }


    /* ===============================
       DADOS DO PEDIDO
    =============================== */

    const pedido = {

        id:
            "WAAY-" +
            Date.now(),

        clienteId:
            usuario.id,

        cliente:
            usuario.nome,

        email:
            usuario.email,

        produtos:
            JSON.parse(
                JSON.stringify(
                    carrinho
                )
            ),

        subtotal:
            calcularSubtotal(),

        desconto:
            calcularDesconto(),

        total:
            calcularTotal(),

        pagamento:
            pagamento.value,

        entrega: {

            nome:
                obterValor(
                    "nomeEntrega"
                ),

            cpf:
                obterValor(
                    "cpfEntrega"
                ),

            telefone:
                obterValor(
                    "telefoneEntrega"
                ),

            cep:
                obterValor(
                    "cepEntrega"
                ),

            endereco:
                obterValor(
                    "enderecoEntrega"
                ),

            numero:
                obterValor(
                    "numeroEntrega"
                ),

            cidade:
                obterValor(
                    "cidadeEntrega"
                ),

            estado:
                obterValor(
                    "estadoEntrega"
                )

        },

        data:
            new Date().toISOString(),

        status:
            "Pedido recebido"

    };


    /* ===============================
       SALVAR PEDIDO
    =============================== */

    const pedidos =
        lerJSON(
            CHAVE_PEDIDOS,
            []
        );


    pedidos.push(
        pedido
    );


    salvarJSON(
        CHAVE_PEDIDOS,
        pedidos
    );


    /* ===============================
       LIMPAR CARRINHO
    =============================== */

    carrinho = [];


    salvarCarrinho();

    atualizarContador();


    /* ===============================
       REMOVER CUPOM
    =============================== */

    localStorage.removeItem(
        CHAVE_CUPOM
    );


    /* ===============================
       MENSAGEM
    =============================== */

    const formaPagamento =
        nomesPagamento[
            pagamento.value
        ] ||
        pagamento.value;


    alert(

        "Pedido realizado com sucesso! 🎉\n\n" +

        "Número do pedido:\n" +
        pedido.id +
        "\n\n" +

        "Total:\n" +
        "R$ " +
        moeda(
            pedido.total
        ) +
        "\n\n" +

        "Pagamento:\n" +
        formaPagamento

    );


    mostrarPagina(
        "inicio"
    );

}


/* =========================================================
   NOMES PAGAMENTO
========================================================= */

const nomesPagamento = {

    pix:
        "PIX",

    cartao:
        "Cartão de crédito",

    boleto:
        "Boleto bancário"

};


/* =========================================================
   OBTER VALOR
========================================================= */

function obterValor(id) {

    return (
        document
            .getElementById(id)
            ?.value
            ?.trim() ||
        ""
    );

}


/* =========================================================
   FORMATAÇÕES
========================================================= */

function somenteNumeros(valor) {

    return valor.replace(
        /\D/g,
        ""
    );

}


function formatarCPF(
    campo
) {

    let valor =
        somenteNumeros(
            campo.value
        )
            .slice(
                0,
                11
            );


    valor =
        valor.replace(
            /(\d{3})(\d)/,
            "$1.$2"
        );


    valor =
        valor.replace(
            /(\d{3})(\d)/,
            "$1.$2"
        );


    valor =
        valor.replace(
            /(\d{3})(\d{1,2})$/,
            "$1-$2"
        );


    campo.value =
        valor;

}


function formatarTelefone(
    campo
) {

    let valor =
        somenteNumeros(
            campo.value
        )
            .slice(
                0,
                11
            );


    if (
        valor.length <= 10
    ) {

        valor =
            valor.replace(
                /(\d{2})(\d)/,
                "($1) $2"
            );


        valor =
            valor.replace(
                /(\d{4})(\d)/,
                "$1-$2"
            );

    } else {

        valor =
            valor.replace(
                /(\d{2})(\d)/,
                "($1) $2"
            );


        valor =
            valor.replace(
                /(\d{5})(\d)/,
                "$1-$2"
            );

    }


    campo.value =
        valor;

}


function formatarCEP(
    campo
) {

    let valor =
        somenteNumeros(
            campo.value
        )
            .slice(
                0,
                8
            );


    valor =
        valor.replace(
            /(\d{5})(\d)/,
            "$1-$2"
        );


    campo.value =
        valor;

}


function formatarCartao(
    campo
) {

    let valor =
        somenteNumeros(
            campo.value
        )
            .slice(
                0,
                16
            );


    valor =
        valor.replace(
            /(\d{4})(?=\d)/g,
            "$1 "
        );


    campo.value =
        valor;

}


function formatarValidade(
    campo
) {

    let valor =
        somenteNumeros(
            campo.value
        )
            .slice(
                0,
                4
            );


    if (
        valor.length > 2
    ) {

        valor =
            valor.slice(
                0,
                2
            ) +
            "/" +
            valor.slice(
                2
            );

    }


    campo.value =
        valor;

}


/* =========================================================
   WAAY CLUB
========================================================= */

function abrirWaayClub() {

    const usuario =
        obterUsuarioLogado();


    if (!usuario) {

        alert(
            "Entre ou crie sua conta para participar do WAAY Club."
        );


        abrirMinhaConta();

        return;

    }


    mostrarPagina(
        "waayclub"
    );

}


function usarCupomFitness() {

    localStorage.setItem(
        CHAVE_CUPOM,
        "FITNESS"
    );


    alert(
        "Cupom FITNESS ativado! R$ 15,00 de desconto."
    );


    mostrarPagina(
        "carrinho"
    );

}


/* =========================================================
   MAIS VENDIDOS
========================================================= */

function mostrarMaisVendidos() {

    const area =
        document.getElementById(
            "listaMaisVendidos"
        );


    if (!area) {

        return;

    }


    const ids = [

        11,
        1,
        46,
        31

    ];


    const lista =
        ids
            .map(
                id =>
                    produtos.find(
                        produto =>
                            produto.id === id
                    )
            )
            .filter(Boolean);


    area.innerHTML =
        lista
            .map(
                produto =>
                    criarCardDestaque(
                        produto
                    )
            )
            .join("");

}


/* =========================================================
   CARD DESTAQUE
========================================================= */

function criarCardDestaque(
    produto
) {

    return `

        <div
            class="produto-destaque"
            onclick="
                abrirProduto(
                    ${produto.id}
                )
            "
        >

            <div
                class="produto-badge"
            >
                MAIS VENDIDO
            </div>


            <div class="produto-imagem">

                ${imagemProdutoHTML(
                    produto
                )}

            </div>


            <h3>
                ${escaparHTML(
                    produto.nome
                )}
            </h3>


            <p
                class="descricao-produto"
            >

                ${escaparHTML(
                    obterDescricaoProduto(
                        produto
                    )
                )}

            </p>


            <div class="avaliacao">

                ★★★★★

            </div>


            <div class="preco">

                R$
                ${moeda(
                    produto.preco
                )}

            </div>


            <button
                type="button"
                onclick="
                    event.stopPropagation();
                    adicionarCarrinho(
                        ${produto.id}
                    );
                "
            >

                ADICIONAR AO CARRINHO

            </button>


        </div>

    `;

}


/* =========================================================
   COMPATIBILIDADE COM CÓDIGOS ANTIGOS
========================================================= */

function adicionarAoCarrinho(
    nome,
    preco
) {

    const produto =
        produtos.find(
            item =>
                item.nome
                    .toLowerCase() ===
                String(nome)
                    .toLowerCase()
        );


    if (produto) {

        adicionarCarrinho(
            produto.id
        );

        return;

    }


    /*
       Caso algum botão antigo do HTML
       use um produto que não esteja
       cadastrado na lista.
    */

    const produtoTemporario = {

        id:
            Date.now(),

        nome:
            String(nome),

        preco:
            Number(preco),

        imagem:
            "imagens/produto.jpg"

    };


    carrinho.push({

        id:
            produtoTemporario.id,

        nome:
            produtoTemporario.nome,

        preco:
            produtoTemporario.preco,

        imagem:
            produtoTemporario.imagem,

        quantidade:
            1

    });


    salvarCarrinho();

    atualizarContador();

    alert(
        "Produto adicionado ao carrinho!"
    );

}


/* =========================================================
   COMPATIBILIDADE DETALHES
========================================================= */

function abrirDetalhesProduto(
    nome,
    preco,
    imagem,
    descricao
) {

    const produto =
        produtos.find(
            item =>
                item.nome === nome
        );


    if (produto) {

        abrirProduto(
            produto.id
        );

        return;

    }


    const temporario = {

        id:
            Date.now(),

        nome:
            nome,

        preco:
            Number(preco),

        imagem:
            imagem,

        descricao:
            descricao

    };


    window.produtoAtual =
        temporario;


    window.quantidadeProdutoAtual =
        1;


    const area =
        document.getElementById(
            "produtoDetalhesConteudo"
        );


    if (!area) {

        return;

    }


    area.innerHTML = `

        <div class="produto-detalhe">

            <div
                class="produto-detalhe-imagem"
            >

                <img
                    src="${escaparHTML(
                        imagem
                    )}"
                    alt="${escaparHTML(
                        nome
                    )}"
                >

            </div>


            <div
                class="produto-detalhe-info"
            >

                <span class="produto-badge">
                    PRODUTO WAAY
                </span>


                <h2>
                    ${escaparHTML(nome)}
                </h2>


                <div class="produto-detalhe-preco">

                    R$
                    ${moeda(preco)}

                </div>


                <p>

                    ${escaparHTML(
                        descricao ||
                        "Produto WAAY."
                    )}

                </p>


                <div
                    class="quantidade-produto"
                >

                    <button
                        onclick="
                            alterarQuantidadeProduto(-1)
                        "
                    >
                        −
                    </button>

                    <span
                        id="quantidadeProduto"
                    >
                        1
                    </span>

                    <button
                        onclick="
                            alterarQuantidadeProduto(1)
                        "
                    >
                        +
                    </button>

                </div>


                <button
                    class="botao-carrinho-detalhe"
                    onclick="
                        adicionarAoCarrinho(
                            '${String(nome)
                                .replace(
                                    /'/g,
                                    "\\'"
                                )}',
                            ${Number(preco)}
                        )
                    "
                >

                    🛒 ADICIONAR AO CARRINHO

                </button>

            </div>

        </div>

    `;


    mostrarPagina(
        "produtoDetalhes"
    );

}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        atualizarContador();

        mostrarMaisVendidos();

        mostrarProdutos(
            produtos
        );

        filtrarCategoria(
            "creatinas",
            "listaCreatinas"
        );

        filtrarCategoria(
            "wheys",
            "listaWheys"
        );

        filtrarCategoria(
            "roupas",
            "listaRoupas"
        );

        filtrarCategoria(
            "tenis",
            "listaTenis"
        );

        filtrarCategoria(
            "barrinhas",
            "listaBarrinhas"
        );

        atualizarBotaoConta();

        atualizarConta();

        configurarFiltrosCategorias();

    }
);


/* =========================================================
   FILTROS DAS CATEGORIAS
========================================================= */

function configurarFiltrosCategorias() {

    const categorias = [

        "Creatinas",
        "Wheys",
        "Roupas",
        "Tenis",
        "Barrinhas"

    ];


    categorias.forEach(
        categoria => {

            const min =
                document.getElementById(
                    "min" + categoria
                );


            const max =
                document.getElementById(
                    "max" + categoria
                );


            const ordem =
                document.getElementById(
                    "ordem" + categoria
                );


            const executar =
                function() {

                    filtrarCategoria(
                        categoria.toLowerCase(),
                        "lista" +
                        categoria
                    );

                };


            min?.addEventListener(
                "input",
                executar
            );


            max?.addEventListener(
                "input",
                executar
            );


            ordem?.addEventListener(
                "change",
                executar
            );

        }
    );

}