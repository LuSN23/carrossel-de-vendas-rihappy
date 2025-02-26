let slickInitialized = false; //Deixar "setada" como false porque quando a página é carregada não temos o slick pronto

// Arrays de produtos para cada aba
const novidades = [
  {
    "productName": "Pulseira - Adesivos - Sticki Rolls Book - New Toys",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6896285-175-175?v=638660830485400000&width=175&height=175&aspect=true",
    "installments": 4,
    "installmentValue": 34.99,
    "totalPrice": 139.99,
    "seller": "RiHappy"
  },
  {
    "productName": "Boneca - Ellian - Com Acessórios - Enfeitiçados",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6787471-175-175?v=638641886695000000&width=175&height=175&aspect=true",
    "installments": 3,
    "installmentValue": 33.33,
    "totalPrice": 99.99,
    "seller": "Mundo Infantil Store"
  },
  {
    "productName": "Brinquedo Educativo - Fisher Price - Esquadrão Musical",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6384999-175-175?v=638597552401100000&width=175&height=175&aspect=true",
    "installments": 6,
    "installmentValue": 34.99,
    "totalPrice": 209.99,
    "seller": "RiHappy"
  },
  {
    "productName": "Jogo De Ação - Disney - Dobble - Galápagos",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6399917-175-175?v=638603794021600000&width=175&height=175&aspect=true",
    "installments": 3,
    "installmentValue": 33.33,
    "totalPrice": 99.99,
    "seller": "SA Brinquedos"
  },
  {
    "productName": "Boneco Colecionável - Cryo Lab MrBeast Lab - Azul",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6399917-175-175?v=638603794021600000&width=175&height=175&aspect=true",
    "installments": 6,
    "installmentValue": 124.99,
    "totalPrice": 749.99,
    "seller": "RiHappy"
  },
  {
    "productName": "Jogo de Tabuleiro - LEGO - Monkey Palace - Galápagos",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6881462-175-175?v=638658118400800000&width=175&height=175&aspect=true",
    "installments": 6,
    "installmentValue": 66.66,
    "totalPrice": 399.99,
    "seller": "Mundo Infantil Store"
  },
  {
    "productName": "Hoverboard Fun Led Chumbo 6,5 Pol 260W 2,0Ah 10Km/H",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6833345-175-175?v=638652017881370000&width=175&height=175&aspect=true",
    "installments": 6,
    "installmentValue": 283.16,
    "totalPrice": 1699.00,
    "seller": "MMPLACE"
  },
  {
    "productName": "Tablet M10a 3g Preto Multilaser - NB253OUT",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6567911-175-175?v=638624596559570000&width=175&height=175&aspect=true",
    "installments": 6,
    "installmentValue": 92.78,
    "totalPrice": 556.72,
    "seller": "MMPLACE"
  }
];

const mais_vendidos = [
  {
    "productName": "Blocos de Montar - Unicórnio Mágico - Lagoa Encantada - Monte Líbano",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6349115/Blocos-de-Montar---Unicornio-Magico---Lagoa-Encantada---Monte-libano-0.jpg?v=638557905081230000",
    "installments": 1,
    "installmentValue": 35.99,
    "totalPrice": 35.99,
    "seller": "RiHappy"
  },
  {
    "productName": "Conjunto De Pintura - Patrulha Canina - Skye - Elka",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6389304/Conjunto-De-Pintura---Patrulha-Canina---Skye---Elka-0.jpg?v=638598620968800000",
    "installments": 3,
    "installmentValue": 29.99,
    "totalPrice": 89.99,
    "seller": "Mundo Infantil Store"
  },
  {
    "productName": "Kit De Jogos - Stitch - Super Kit 3 em 1 - Toyster",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6357597/Kit-De-Jogos---Stitch---Super-Kit-3-em1---Toyster-0.jpg?v=638574272262800000",
    "installments": 4,
    "installmentValue": 32.49,
    "totalPrice": 129.99,
    "seller": "RiHappy"
  }
  ,
  {
    "productName": "Hoverboard Fun Led Chumbo 6,5 Pol 260W 2,0Ah 10Km/H",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6833345-175-175?v=638652017881370000&width=175&height=175&aspect=true",
    "installments": 6,
    "installmentValue": 283.16,
    "totalPrice": 1699.00,
    "seller": "MMPLACE"
  }
  , {
    "productName": "LEGO - Technic - Mercedes-AMG F1 W14 E Performance Pull-Back - 42165",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6207391/LEGO---Technic---Mercedes-AMG-F1-W14-E-Performance-Pull-Back---42165-0.jpg?v=638459594069830000",
    "installments": 6,
    "installmentValue": 46.66,
    "totalPrice": 279.99,
    "seller": "RiHappy"
  }
  , {
    "productName": "Miniatura - Colecionável - Princesas - Sortidas - Embalagem Unitária - Disney",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6405037/Miniatura---Colecionavel---Princesas---Sortidas---Embalagem-Unitaria---Disney-0.jpg?v=638605529280870000",
    "installments": 1,
    "installmentValue": 39.99,
    "totalPrice": 39.99,
    "seller": "SA Brinquedos"
  }
  , {
    "productName": "Miniatura - Colecionável - Minnie - Sortidas - Embalagem Unitária - Disney",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6405048/Miniatura---Colecionavel---Minnie---Sortidas---Embalagem-Unitaria---Disney-0.jpg?v=638605533209730000",
    "installments": 1,
    "installmentValue": 39.99,
    "totalPrice": 39.99,
    "seller": "Fantasias Kids"
  }
];

const fantasias = [
  {
    "productName": "One Piece 3 Em 1 Vol. 9",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6474411/17258341325882.jpg?v=638621065554270000",
    "installments": 2,
    "installmentValue": 42.45,
    "totalPrice": 84.9,
    "seller": "Panini"
  },
  {
    "productName": "Tapete de Atividades - 180x120 cm - Animal Party - Buba",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/377776/tapete-animal-party-8511_Frente.jpg?v=636904971729300000",
    "installments": 6,
    "installmentValue": 34.98,
    "totalPrice": 209.9,
    "seller": "Lalalipe"
  },
  {
    "productName": "Acessório de Fantasia - Halloween - Facão - Gala",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/5862198/Acessorio-de-Fantasia---Halloween---Facao---Gala-0.jpg?v=638290050998600000",
    "installments": 1,
    "installmentValue": 9.99,
    "totalPrice": 14.99,
    "seller": "RiHappy"
  },
  {
    "productName": "Máscara Infantil - PJ Masks - Gekko - Lagartixo - Verde - Hasbro",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/2548315/Mascara-Infantil---PJ-Masks---Gekko---Lagartixo---Verde---Hasbro-0.jpg?v=637811584510170000",
    "installments": 1,
    "installmentValue": 50.99,
    "totalPrice": 59.99,
    "seller": "Mundo Infantil Store"
  }
  ,
  {
    "productName": "Sabre de Luz - Star Wars - Luke Skywalker - Hasbro",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6544229/Sabre-de-Luz---Star-Wars---Luke-Skywalker---Hasbro-0.jpg?v=638623534576700000",
    "installments": 5,
    "installmentValue": 29.99,
    "totalPrice": 149.99,
    "seller": "RiHappy"
  }
  ,
  {
    "productName": "Fantasia - Elka - Monkey Luffy D - Vermelho",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/4957411/Fantasia---Elka---Monkey-Luffy-D---Vermelho--0.jpg?v=638024043187000000",
    "installments": 3,
    "installmentValue": 33.33,
    "totalPrice": 99.99,
    "seller": "Brinquedos Laura"
  }
  ,
  {
    "productName": "Máscara - Marvel - Pantera Negra - Hasbro",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6746180/Mascara---Marvel---Pantera-Negra---Hasbro-0.jpg?v=638635905394330000",
    "installments": 1,
    "installmentValue": 49.99,
    "totalPrice": 49.99,
    "seller": "RiHappy"
  }
];

const jogos = [
  {
    "productName": "Tablet M10a 3g Preto Multilaser - NB253OUT",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6567911-175-175?v=638624596559570000&width=175&height=175&aspect=true",
    "installments": 6,
    "installmentValue": 92.78,
    "totalPrice": 556.72,
    "seller": "MMPLACE"
  },
  {
    "productName": "Brinquedo Educativo - Fisher Price - Esquadrão Musical",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6384999-175-175?v=638597552401100000&width=175&height=175&aspect=true",
    "installments": 6,
    "installmentValue": 34.99,
    "totalPrice": 209.99,
    "seller": "RiHappy"
  },
  {
    "productName": "Conjunto de Mágicas - Truque de Mestre Junior - Estrela",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/318837/Conjunto-de-Magicas---Truque-de-Mestre-Junior---Estrela-1201603600003-embalagem.jpg?v=636107555036900000",
    "installments": 2,
    "installmentValue": 29.95,
    "totalPrice": 59.9,
    "seller": "BUMERANG BRINQUEDOS"
  },
  {
    "productName": "Baralho Infantil - Vê Se Adivinha! - MOL Impacto - Editora Mol",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6536816/Baralho-Infantil---Ve-Se-Adivinha----MOL-Impacto---Editora-Mol-0.jpg?v=638622700557800000",
    "installments": 1,
    "installmentValue": 11.99,
    "totalPrice": 11.99,
    "seller": "RiHappy"
  }
];

const diversao_fora = [
  {
    "productName": "LEGO - Technic - Mercedes-AMG F1 W14 E Performance Pull-Back - 42165",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6207391/LEGO---Technic---Mercedes-AMG-F1-W14-E-Performance-Pull-Back---42165-0.jpg?v=638459594069830000",
    "installments": 6,
    "installmentValue": 46.66,
    "totalPrice": 279.99,
    "seller": "Kids Brinquedos"
  },
  {
    "productName": "Baralho Infantil - Vê Se Adivinha! - MOL Impacto - Editora Mol",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6536816/Baralho-Infantil---Ve-Se-Adivinha----MOL-Impacto---Editora-Mol-0.jpg?v=638622700557800000",
    "installments": 1,
    "installmentValue": 11.99,
    "totalPrice": 11.99,
    "seller": "RiHappy"
  },
  {
    "productName": "Tapete de Atividades com Ginásio - Buba - Piano Removível - 73cm x 63cm x 42cm - Unissex - Colorido",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6413470/Tapete-de-Atividades-com-Ginasio---Buba---Piano-Removivel---73cm-x-63cm-x-42cm---Unissex---Colorido-0.jpg?v=638610076864300000",
    "installments": 6,
    "installmentValue": 44.99,
    "totalPrice": 269.99,
    "seller": "BUMERANG BRINQUEDOS"
  },
  {
    "productName": "Conjunto de Mágicas - Truque de Mestre Junior - Estrela",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/318837/Conjunto-de-Magicas---Truque-de-Mestre-Junior---Estrela-1201603600003-embalagem.jpg?v=636107555036900000",
    "installments": 2,
    "installmentValue": 29.95,
    "totalPrice": 59.9,
    "seller": "BUMERANG BRINQUEDOS"
  },
  {
    "productName": "Pista de Percurso e Veículo - Hot Wheels - City - Robô Tubarão - Mattel",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/4423207/100183669_1.jpg?v=637940113896300000",
    "installments": 6,
    "installmentValue": 38.49,
    "totalPrice": 230.99,
    "seller": "RiHappy"
  },
  {
    "productName": "Hot Wheels City - Guincho Tubarão - Mattel",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6304854/Hot-Wheels-City---Guincho-Tubarao---Mattel-0.jpg?v=638536209396900000",
    "installments": 4,
    "installmentValue": 31.24,
    "totalPrice": 124.99,
    "seller": "RiHappy"
  },
  {
    "productName": "Massa De Modelar - Play-Doh - 28g - Sortido - Hasbro",
    "imageUrl": "https://rihappynovo.vtexassets.com/arquivos/ids/6284290/Massa-De-Modelar---Play-Doh----28g---Sortido---Hasbro-0.jpg?v=638525298262000000",
    "installments": 1,
    "installmentValue": 1.99,
    "totalPrice": 1.99,
    "seller": "Mundo Infantil Store"
  }
];

//Função para inicializar o 'slick' = uma biblioteca do JQuery para criar carrosséis customizáveis e responsíveis
function initializedSlick() {
  const slickElement = document.querySelector('.product-carousel'); //Vai aplicar a biblioteca a essa classe na div correspondente

  //Sintaxe do JQuery - Tipo de carrossel multiple-items
  $(slickElement).slick({ //No lugar de slickElement originalmente vem '.multiple-items' para ser substituído pelo seu elemento
    //São aplicados esses métodos abaixo no seu elemento = nesse caso no slickElement/product-carousel
    infinite: true, //Se vai poder mudar os itens infinitamente, quando se chegar ao final vai tudo se repetir
    slidesToShow: 4, //Quantos cards serão mostrados por vez
    slidesToScroll: 4, //Quantidade de cards que vão ser rolados de uma vez
    arrows: true,      //Se vão ter setinhas de controle nos lados
    dots: true        //Mostra pontos para interação
  });
  //Ativa o slick
  slickInitialized = true;
}



//Função para fazer renderização dos produtos
function renderProducts(products){  //Passa as categorias de produtos/arrays
  const productCarousel = document.querySelector('.product-carousel'); //Seleciona o carrossel
  productCarousel.innerHTML = ''; //Limpa o conteúdo anterior renderizado
  
  products.forEach(product => { //cada product é um objeto do array "products" = novidades, mais vendidos...
    //Armazena dentro da const productElement a renderização em HTML de cada produto em um card, com suas informações
    //product.productName acessa dentro do objeto do momento sua propriedade productName
    const productElement = `
    <div class="product-card"> 
    <div class="imageProduct"><img src="${product.imageUrl} alt=${product.productName}"></div>
    <h3 class="productName">${product.productName}</h3>
    <p class="price">Por ${product.totalPrice}</p>
    <p class="installments">ou ${product.installments}x de ${product.installmentValue} sem juros</p>
    <button class="adicionar">Comprar</button> <!-- Adicionado algumas classes para fazer a estilização dos elementos -->
    <!-- Para exibir o nome do vendedor e trocar a frase que o acompanha usando uma condicional ternária para esta decisão -->
    <p class="seller">${product.seller === "RiHappy" ? `Vendido e entregue por <span class="sellerType"> ${product.seller}</span>` : `Oferta por <span class="sellerType"> 
    ${product.seller}</span>`} </p> 
    </div>
    `;
    //Preenchimento do carrossel com as informações dos produtos/product cards acima
    productCarousel.innerHTML += productElement; //Coloca os cards em HTML para dentro da div com a classe product-carousel 
    //Capturada pela const productCarrousel
  });
  initializedSlick();
}




//Função para identificar onde você está clicando
function handleClickTab(event) {
  const tabs = document.querySelectorAll('.tab-link'); //Seleciona todos os elementos com .tab-link e guarda dentro de tabs numa nodeList
  tabs.forEach(tab => tab.classList.remove('active')); //Sempre que a funçãio handleClickTab for executada/sempre que se clicar num dos 
                                                       // botões, haverá a remoção da classe active do botão anterior clicado
  if(slickInitialized) {  //Se slick for true
    $('.product-carousel').slick('unslick');  //Chamando aqui de novo porque sempre que eu alterar a minha aba, eu vou precisar pegar novamente a div 
                                              // com a classe .product-carrousel, desfazer o slick e inicializá-lo de novo
  }                                                     
  event.target.classList.add('active'); //Por meio do target(o elemento que dispara o evento) adiciona a classe 'active' ao elemento clicado/target

  //Faz a identificação do botão que a gente clicou
  //O dataset no JS é identificado retirando o data e - do nome colocado no HTML, nesse caso passa aqui de data-category para category
  const category = event.target.dataset.category
  //Aqui é feita a manipulação da categoria clicada, se o botão clicado for === à novidades passa a const novidades com o array de objetos dela 
  // para ser renderizado, ou seja, passa a constante dela para a função renderProducts
  if(category === 'novidades') {
    renderProducts(novidades);
  }else if(category === 'mais_vendidos'){
    renderProducts(mais_vendidos);
    console.log('mais vendidos'); //Utilizado para debug, se não mostrasse a string no console/não entrasse na condição, 
                                  //ou o nome na const/array estava diferente ou nome estava com alguma diferença no HTML
  }else if(category === 'fantasias'){
    renderProducts(fantasias);   
  }else if(category === 'jogos'){
    renderProducts(jogos);
  }else if(category === 'diversao_fora'){
    renderProducts(diversao_fora);
  }
}


//Um eventListener para escutar quando o conteúdo da página for carregado = 'DOMContentLoaded'(condição para disparo da função)
//Carregando as primeiras informações na tela
document.addEventListener('DOMContentLoaded', function(){
  //Chama a função renderProducts passando inicialmente a const novidades como parâmetro
  renderProducts(novidades);
  //
  const tabs = document.querySelectorAll('.tab-link');
  //Vamos de novo percorrer todas os elementos .tab-link e escutar por um evento de click em um deles para disparar a 
  //função callback handleClickTab
  tabs.forEach(tab => tab.addEventListener('click', handleClickTab));

})