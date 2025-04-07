// PARTE 1: Lista de perguntas e respostas
const perguntas = [
  {
    "pergunta": "Qual é o primeiro jogo mortal apresentado em Round 6?",
    "respostas": [
      { "opcao": "Batatinha frita 1, 2, 3", "correto": true },
      { "opcao": "Cabo de guerra", "correto": false },
      { "opcao": "Bolinha de gude", "correto": false },
      { "opcao": "Dalgona Candy", "correto": false }
    ]
  },
  {
    "pergunta": "Qual número o protagonista Seong Gi-hun recebe ao entrar no jogo?",
    "respostas": [
      { "opcao": "456", "correto": true },
      { "opcao": "001", "correto": false },
      { "opcao": "218", "correto": false },
      { "opcao": "101", "correto": false }
    ]
  },
  {
    "pergunta": "No jogo do 'Dalgona Candy', qual formato era o mais difícil de completar?",
    "respostas": [
      { "opcao": "Estrela", "correto": false },
      { "opcao": "Círculo", "correto": false },
      { "opcao": "Triângulo", "correto": false },
      { "opcao": "Guarda-chuva", "correto": true }
    ]
  },
  {
    "pergunta": "Qual o nome do velho jogador que forma um forte laço com Gi-hun?",
    "respostas": [
      { "opcao": "Kang Sae-byeok", "correto": false },
      { "opcao": "Oh Il-nam", "correto": true },
      { "opcao": "Cho Sang-woo", "correto": false },
      { "opcao": "Ali Abdul", "correto": false }
    ]
  },
  {
    "pergunta": "Em qual jogo dois jogadores devem formar uma dupla e um deles deve sobreviver?",
    "respostas": [
      { "opcao": "Cabo de guerra", "correto": false },
      { "opcao": "Ponte de vidro temperado", "correto": false },
      { "opcao": "Bolinha de gude", "correto": true },
      { "opcao": "Batatinha frita 1, 2, 3", "correto": false }
    ]
  },
  {
    "pergunta": "Qual o número da jogadora que era uma desertora norte-coreana?",
    "respostas": [
      { "opcao": "067", "correto": true },
      { "opcao": "212", "correto": false },
      { "opcao": "199", "correto": false },
      { "opcao": "456", "correto": false }
    ]
  },
  {
    "pergunta": "Qual dos seguintes jogos NÃO fez parte dos desafios de Round 6?",
    "respostas": [
      { "opcao": "Luta de galos", "correto": true },
      { "opcao": "Cabo de guerra", "correto": false },
      { "opcao": "Ponte de vidro temperado", "correto": false },
      { "opcao": "Bolinha de gude", "correto": false }
    ]
  },
  {
    "pergunta": "Quem era o líder mascarado que supervisionava os jogos?",
    "respostas": [
      { "opcao": "O Velho (Oh Il-nam)", "correto": false },
      { "opcao": "Um dos guardas", "correto": false },
      { "opcao": "O Front Man", "correto": true },
      { "opcao": "Seong Gi-hun", "correto": false }
    ]
  },
  {
    "pergunta": "Qual era a profissão de Cho Sang-woo antes de entrar no jogo?",
    "respostas": [
      { "opcao": "Policial", "correto": false },
      { "opcao": "Médico", "correto": false },
      { "opcao": "Corretor de investimentos", "correto": true },
      { "opcao": "Professor", "correto": false }
    ]
  },
  {
    "pergunta": "Qual cor de roupa os jogadores eram obrigados a usar durante os jogos?",
    "respostas": [
      { "opcao": "Vermelho", "correto": false },
      { "opcao": "Preto", "correto": false },
      { "opcao": "Verde-água", "correto": true },
      { "opcao": "Azul", "correto": false }
    ]
  }
];


// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos = acertos + 1;
        acertos++; // Incrementa o contador de acertos
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();