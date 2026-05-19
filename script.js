const questions = [
  {
    block: "Conhecendo as espécies",
    category: "arábica",
    question: "Qual é o nome científico do café arábica?",
    options: ["Coffea canephora", "Coffea arabica", "Coffea liberica", "Coffea conilon"],
    answer: 1,
    explanation: "O arábica pertence à espécie Coffea arabica.",
    embrapa: "A Embrapa disponibiliza pesquisas e publicações que ajudam a diferenciar espécies, cultivares e sistemas cafeeiros no Brasil."
  },
  {
    block: "Conhecendo as espécies",
    category: "canéfora",
    question: "Conilon e robusta pertencem principalmente a qual espécie?",
    options: ["Coffea arabica", "Coffea canephora", "Coffea excelsa", "Coffea bourbon"],
    answer: 1,
    explanation: "Conilon e robusta são grupos associados à espécie Coffea canephora.",
    embrapa: "Tecnologias e estudos sobre conilon e robusta, com destaque para cultivares e manejo, dialogam diretamente com a atuação da Embrapa Rondônia."
  },
  {
    block: "Clima, altitude e adaptação",
    category: "arábica",
    question: "Em geral, qual café é mais associado a regiões de maior altitude e clima mais ameno?",
    options: ["Arábica", "Canéfora", "Ambos somente em baixa altitude", "Nenhum dos dois"],
    answer: 0,
    explanation: "O arábica costuma se adaptar melhor a ambientes mais amenos e altitudes mais elevadas.",
    embrapa: "Publicações técnicas da Embrapa Café ajudam a relacionar ambiente, espécie, qualidade e planejamento da lavoura."
  },
  {
    block: "Clima, altitude e adaptação",
    category: "canéfora",
    question: "Em geral, qual café apresenta maior adaptação a regiões mais quentes?",
    options: ["Arábica", "Canéfora", "Apenas cafés descafeinados", "Nenhum"],
    answer: 1,
    explanation: "O canéfora tende a tolerar melhor temperaturas mais elevadas.",
    embrapa: "Pesquisas sobre canéfora, irrigação e manejo em regiões quentes ajudam produtores e técnicos a tomar decisões mais ajustadas ao território."
  },
  {
    block: "Conhecendo as espécies",
    category: "canéfora",
    question: "O café canéfora inclui quais grupos muito conhecidos no Brasil?",
    options: ["Bourbon e Catuaí", "Mundo Novo e Acaiá", "Conilon e robusta", "Typica e Geisha"],
    answer: 2,
    explanation: "Conilon e robusta são os grupos mais associados ao canéfora.",
    embrapa: "A Embrapa Rondônia possui forte conexão com tecnologias voltadas ao café canéfora, especialmente cultivares e práticas de manejo."
  },
  {
    block: "Qualidade, uso e mercado",
    category: "arábica",
    question: "Qual espécie costuma ser mais valorizada em mercados de cafés especiais de bebida fina?",
    options: ["Arábica", "Canéfora", "Liberica", "Nenhuma pode ter qualidade"],
    answer: 0,
    explanation: "O arábica tem forte presença no mercado de cafés especiais, embora o canéfora também possa alcançar qualidade elevada com bom manejo.",
    embrapa: "A Embrapa contribui com estudos sobre qualidade, pós-colheita e sistemas de produção que apoiam a valorização do café brasileiro."
  },
  {
    block: "Qualidade, uso e mercado",
    category: "canéfora",
    question: "O canéfora é importante para quais segmentos?",
    options: ["Apenas cafés ornamentais", "Café solúvel, blends e espresso", "Apenas exportação de sementes", "Nenhum uso comercial importante"],
    answer: 1,
    explanation: "O canéfora é muito usado em blends, cafés solúveis e formulações para espresso.",
    embrapa: "Tecnologias sobre canéfora, qualidade e processamento ajudam a mostrar a importância econômica desse café em diferentes mercados."
  },
  {
    block: "Conhecendo as espécies",
    category: "canéfora",
    question: "Verdadeiro ou falso: canéfora não tem importância para a cafeicultura brasileira.",
    options: ["Verdadeiro", "Falso"],
    answer: 1,
    explanation: "O canéfora tem grande importância econômica, produtiva e regional no Brasil.",
    embrapa: "A presença de cultivares, práticas e publicações sobre canéfora no acervo da Embrapa reforça sua relevância para a cafeicultura nacional."
  },
  {
    block: "Clima, altitude e adaptação",
    category: "comparação",
    question: "Qual fator influencia diretamente a escolha entre arábica e canéfora em uma propriedade?",
    options: ["Cor da embalagem", "Altitude, clima, solo e disponibilidade de água", "Apenas o nome da fazenda", "Tipo de xícara usada"],
    answer: 1,
    explanation: "A escolha depende de condições ambientais e do sistema de produção.",
    embrapa: "Ferramentas, metodologias e publicações da Embrapa apoiam decisões sobre aptidão agrícola, ambiente e planejamento produtivo."
  },
  {
    block: "Clima, altitude e adaptação",
    category: "canéfora",
    question: "Uma área quente, de baixa altitude e com possibilidade de irrigação tende a favorecer qual sistema?",
    options: ["Canéfora", "Arábica de altitude", "Café selvagem", "Nenhum cultivo agrícola"],
    answer: 0,
    explanation: "Muitas regiões produtoras de canéfora têm clima quente e utilizam irrigação como tecnologia importante.",
    embrapa: "Práticas de manejo de irrigação e estudos sobre adaptação, como os conduzidos por unidades da Embrapa, podem orientar esse tipo de decisão."
  },
  {
    block: "Clima, altitude e adaptação",
    category: "arábica",
    question: "Uma região montanhosa, com clima ameno, tende a ser mais favorável a qual café?",
    options: ["Arábica", "Canéfora exclusivamente", "Cacau", "Chá"],
    answer: 0,
    explanation: "O arábica é tradicionalmente cultivado em regiões mais altas e amenas.",
    embrapa: "A pesquisa agropecuária ajuda a entender como relevo, clima e espécie influenciam produtividade e qualidade da bebida."
  },
  {
    block: "Sistemas de produção",
    category: "comparação",
    question: "Qual prática é importante para os dois sistemas cafeeiros?",
    options: ["Manejo adequado do solo", "Colheita sem nenhum critério", "Ausência total de adubação", "Plantio em qualquer ambiente"],
    answer: 0,
    explanation: "Conservação do solo, nutrição e manejo adequado são importantes para ambos.",
    embrapa: "A Embrapa desenvolve e difunde práticas sobre fertilidade, conservação do solo e manejo sustentável aplicáveis a diferentes sistemas cafeeiros."
  },
  {
    block: "Sistemas de produção",
    category: "comparação",
    question: "O que é um sistema cafeeiro?",
    options: ["Apenas a máquina de moer café", "O conjunto de espécie, ambiente, manejo, tecnologia e finalidade produtiva", "Uma marca comercial", "Uma receita culinária"],
    answer: 1,
    explanation: "Sistema cafeeiro envolve a lavoura como um todo, não apenas a espécie plantada.",
    embrapa: "As soluções tecnológicas da Embrapa costumam integrar espécie, ambiente, manejo, pós-colheita e finalidade produtiva."
  },
  {
    block: "Conhecendo as espécies",
    category: "comparação",
    question: "Qual das alternativas compara melhor arábica e canéfora?",
    options: ["São idênticos em clima, manejo e mercado", "São espécies diferentes, com exigências e usos distintos", "Um é café e o outro não", "Nenhum é cultivado no Brasil"],
    answer: 1,
    explanation: "Ambos são cafés importantes, mas têm características agronômicas e comerciais diferentes.",
    embrapa: "O acervo técnico da Embrapa pode ajudar o jogador a aprofundar as diferenças entre espécies, cultivares, ambientes e mercados."
  },
  {
    block: "Qualidade, uso e mercado",
    category: "comparação",
    question: "Qual etapa pode melhorar a qualidade final tanto do arábica quanto do canéfora?",
    options: ["Pós-colheita bem conduzida", "Misturar impurezas", "Secagem descontrolada", "Armazenamento úmido"],
    answer: 0,
    explanation: "Colheita, processamento, secagem e armazenamento influenciam fortemente a qualidade.",
    embrapa: "Tecnologias e publicações sobre colheita, secagem, processamento e armazenamento conectam o quiz a temas de qualidade trabalhados pela Embrapa."
  },
  {
    block: "Clima, altitude e adaptação",
    category: "comparação",
    question: "Um produtor quer escolher a espécie de café para uma área de clima quente e baixa altitude. Qual informação é mais importante considerar primeiro?",
    options: ["A cor dos frutos na embalagem", "A adaptação da espécie ao clima local", "O nome comercial do café torrado", "O tamanho da xícara usada no consumo"],
    answer: 1,
    explanation: "A escolha entre arábica e canéfora deve considerar clima, altitude e condições da propriedade.",
    embrapa: "A Embrapa produz conhecimentos e ferramentas que apoiam o planejamento da lavoura conforme ambiente, risco climático e aptidão da área."
  },
  {
    block: "Clima, altitude e adaptação",
    category: "arábica",
    question: "Em uma propriedade com clima ameno e maior altitude, qual sistema tende a ser mais compatível?",
    options: ["Arábica", "Canéfora exclusivamente", "Nenhum sistema cafeeiro", "Apenas café solúvel"],
    answer: 0,
    explanation: "O arábica é geralmente mais associado a regiões de maior altitude e temperaturas mais amenas.",
    embrapa: "Publicações técnicas podem ajudar estudantes e produtores a relacionar clima, altitude, cultivar e qualidade da produção."
  },
  {
    block: "Clima, altitude e adaptação",
    category: "canéfora",
    question: "Em regiões quentes, o manejo da água pode ser decisivo especialmente em qual sistema?",
    options: ["Canéfora", "Arábica de montanha apenas", "Café descafeinado", "Café torrado e moído"],
    answer: 0,
    explanation: "Em muitas regiões produtoras de canéfora, a irrigação é uma tecnologia importante para estabilidade produtiva.",
    embrapa: "Práticas de manejo de irrigação, como as relacionadas a pesquisas da Embrapa Cerrados, podem entrar como aprofundamento nesta resposta."
  },
  {
    block: "Sustentabilidade e desafios",
    category: "comparação",
    question: "Qual alternativa representa uma boa decisão para melhorar a sustentabilidade em sistemas cafeeiros?",
    options: ["Manter o solo descoberto o ano inteiro", "Usar práticas de conservação do solo e da água", "Ignorar o clima da região", "Colher e armazenar sem cuidado"],
    answer: 1,
    explanation: "Conservação do solo e da água ajuda a manter produtividade e reduzir impactos ambientais.",
    embrapa: "A Embrapa desenvolve soluções para manejo sustentável, conservação de recursos naturais e adaptação dos sistemas produtivos."
  },
  {
    block: "Sustentabilidade e desafios",
    category: "comparação",
    question: "Um técnico visita uma lavoura e observa erosão no terreno. Qual recomendação geral faz mais sentido?",
    options: ["Melhorar práticas de conservação do solo", "Aumentar a erosão para drenar mais rápido", "Abandonar qualquer manejo", "Colher os frutos verdes imediatamente"],
    answer: 0,
    explanation: "Manejo conservacionista, cobertura do solo e práticas adequadas ajudam a reduzir perdas por erosão.",
    embrapa: "Publicações e práticas da Embrapa sobre solo, água e sustentabilidade podem complementar a explicação com orientações técnicas."
  },
  {
    block: "Clima, altitude e adaptação",
    category: "comparação",
    question: "O que pode acontecer quando a espécie de café é plantada em ambiente pouco adequado?",
    options: ["A lavoura sempre melhora automaticamente", "Pode haver queda de desempenho e maior dificuldade de manejo", "O café deixa de ser uma planta", "A altitude deixa de importar"],
    answer: 1,
    explanation: "Ambiente inadequado pode comprometer produtividade, sanidade e qualidade da lavoura.",
    embrapa: "Metodologias de zoneamento, aptidão e planejamento territorial da Embrapa ajudam a reduzir esse tipo de risco."
  },
  {
    block: "Qualidade, uso e mercado",
    category: "comparação",
    question: "Qual prática contribui para a qualidade do café após a colheita?",
    options: ["Secagem bem conduzida", "Armazenamento em local úmido", "Mistura com impurezas", "Falta de controle no processamento"],
    answer: 0,
    explanation: "A secagem correta é uma das etapas essenciais para preservar a qualidade do café.",
    embrapa: "Tecnologias e publicações sobre colheita, secagem e processamento podem ser indicadas ao jogador como caminhos para saber mais."
  },
  {
    block: "Qualidade, uso e mercado",
    category: "comparação",
    question: "Um lote de café foi colhido com frutos em diferentes estágios de maturação. Qual aspecto pode ser afetado?",
    options: ["A qualidade final da bebida", "O nome científico da planta", "A existência da espécie", "A altitude da propriedade"],
    answer: 0,
    explanation: "A uniformidade de maturação e os cuidados na colheita influenciam a qualidade do produto final.",
    embrapa: "A Embrapa pode aparecer aqui por meio de materiais sobre colheita, processamento e boas práticas para qualidade."
  },
  {
    block: "Qualidade, uso e mercado",
    category: "canéfora",
    question: "Qual afirmação é mais adequada sobre qualidade em café canéfora?",
    options: ["Canéfora nunca pode ter qualidade", "Canéfora pode alcançar boa qualidade com genética, manejo e pós-colheita adequados", "Canéfora não é café", "Canéfora só existe fora do Brasil"],
    answer: 1,
    explanation: "O canéfora tem ganhado reconhecimento quando produzido com boas práticas e controle de qualidade.",
    embrapa: "Cultivares, manejo e pós-colheita do canéfora são temas em que tecnologias e pesquisas da Embrapa podem dar respaldo ao aprendizado."
  },
  {
    block: "Qualidade, uso e mercado",
    category: "comparação",
    question: "Qual alternativa melhor descreve o papel do arábica e do canéfora na cafeicultura brasileira?",
    options: ["Apenas o arábica tem importância", "Apenas o canéfora tem importância", "Ambos são importantes, com características e mercados distintos", "Nenhum é cultivado no Brasil"],
    answer: 2,
    explanation: "Os dois sistemas contribuem para a produção brasileira, cada um com sua adaptação, uso e importância econômica.",
    embrapa: "A diversidade de soluções e publicações da Embrapa mostra como diferentes unidades contribuem para a cafeicultura brasileira."
  },
  {
    block: "Qualidade, uso e mercado",
    category: "canéfora",
    question: "Em um blend de café, qual pode ser uma contribuição comum do canéfora?",
    options: ["Aumentar corpo e intensidade", "Transformar café em chá", "Eliminar a necessidade de torra", "Impedir o preparo de espresso"],
    answer: 0,
    explanation: "O canéfora é frequentemente usado em blends por características como corpo, intensidade e rendimento.",
    embrapa: "Materiais sobre qualidade, processamento e mercado podem ajudar a explicar por que o canéfora tem papel relevante em blends e solúvel."
  },
  {
    block: "Clima, altitude e adaptação",
    category: "comparação",
    question: "Qual fator NÃO deve ser ignorado ao planejar uma nova lavoura de café?",
    options: ["Zoneamento e aptidão da área", "Clima e disponibilidade de água", "Solo e relevo", "Apenas o desenho do rótulo"],
    answer: 3,
    explanation: "O planejamento da lavoura depende de fatores técnicos, ambientais e econômicos, não de aspectos visuais do produto final.",
    embrapa: "Ferramentas e metodologias associadas a território, solos e planejamento rural podem ser conectadas a essa pergunta."
  },
  {
    block: "Conhecendo as espécies",
    category: "comparação",
    question: "Um estudante afirma: “Arábica e canéfora são iguais; muda só o nome”. Qual resposta está correta?",
    options: ["Verdadeiro, são a mesma espécie", "Falso, são espécies diferentes com características próprias", "Verdadeiro, ambos pertencem ao gênero milho", "Falso, nenhum deles é café"],
    answer: 1,
    explanation: "Arábica e canéfora pertencem ao gênero Coffea, mas são espécies diferentes.",
    embrapa: "Publicações de introdução à cafeicultura e materiais educativos da Embrapa podem apoiar essa diferença de forma acessível."
  },
  {
    block: "Sustentabilidade e desafios",
    category: "comparação",
    question: "Qual desafio é comum aos sistemas cafeeiros diante das mudanças climáticas?",
    options: ["Adaptar cultivares, manejo e uso da água às novas condições", "Parar de observar o clima", "Plantar sempre a mesma espécie em qualquer lugar", "Ignorar pesquisa e assistência técnica"],
    answer: 0,
    explanation: "Mudanças no clima exigem planejamento, pesquisa, adaptação tecnológica e manejo adequado.",
    embrapa: "A Embrapa atua em temas como adaptação, recursos genéticos, manejo de água, solos e sistemas produtivos, todos relevantes para esse desafio."
  },
  {
    block: "Sustentabilidade e desafios",
    category: "comparação",
    question: "Qual é a principal mensagem do “Desafio Café Brasil: Arábica ou Canéfora?”",
    options: ["Só existe um café importante no Brasil", "Arábica e canéfora são sistemas diferentes, ambos relevantes para a cafeicultura brasileira", "Café não depende de ambiente nem manejo", "A qualidade não pode ser melhorada"],
    answer: 1,
    explanation: "O quiz mostra que os dois sistemas têm papéis importantes e que conhecimento técnico ajuda a tomar melhores decisões.",
    embrapa: "A Conexão Embrapa aparece como convite para aprofundar o aprendizado em tecnologias, publicações e soluções para a cafeicultura."
  }
];

let order = [...questions.keys()];
let current = 0;
let score = 0;
let answered = false;

const els = {
  startButton: document.querySelector("#startButton"),
  shuffleButton: document.querySelector("#shuffleButton"),
  quizSection: document.querySelector("#quizSection"),
  resultSection: document.querySelector("#resultSection"),
  progressText: document.querySelector("#progressText"),
  progressBar: document.querySelector("#progressBar"),
  scoreText: document.querySelector("#scoreText"),
  blockText: document.querySelector("#blockText"),
  categoryPill: document.querySelector("#categoryPill"),
  questionNumber: document.querySelector("#questionNumber"),
  questionText: document.querySelector("#questionText"),
  optionsList: document.querySelector("#optionsList"),
  feedbackBox: document.querySelector("#feedbackBox"),
  feedbackKicker: document.querySelector("#feedbackKicker"),
  explanationText: document.querySelector("#explanationText"),
  embrapaText: document.querySelector("#embrapaText"),
  nextButton: document.querySelector("#nextButton"),
  restartButton: document.querySelector("#restartButton"),
  playAgainButton: document.querySelector("#playAgainButton"),
  reviewButton: document.querySelector("#reviewButton"),
  resultTitle: document.querySelector("#resultTitle"),
  resultScore: document.querySelector("#resultScore"),
  resultMessage: document.querySelector("#resultMessage")
};

function shuffleQuestions() {
  order = [...questions.keys()];
  for (let i = order.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
}

function startQuiz({ shuffle = false } = {}) {
  if (shuffle) shuffleQuestions();
  current = 0;
  score = 0;
  answered = false;
  els.resultSection.hidden = true;
  els.quizSection.hidden = false;
  renderQuestion();
  els.quizSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderQuestion() {
  const question = questions[order[current]];
  answered = false;
  els.progressText.textContent = `${current + 1} de ${questions.length}`;
  els.progressBar.style.width = `${((current + 1) / questions.length) * 100}%`;
  els.scoreText.textContent = score;
  els.blockText.textContent = question.block;
  els.categoryPill.textContent = question.category;
  els.questionNumber.textContent = `Questão ${current + 1}`;
  els.questionText.textContent = question.question;
  els.feedbackBox.hidden = true;
  els.feedbackBox.classList.remove("is-wrong");
  els.nextButton.disabled = true;
  els.nextButton.textContent = current === questions.length - 1 ? "Ver resultado" : "Próxima";
  els.optionsList.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.type = "button";
    button.innerHTML = `<strong>${String.fromCharCode(65 + index)}</strong>${option}`;
    button.addEventListener("click", () => chooseOption(index));
    els.optionsList.append(button);
  });
}

function chooseOption(index) {
  if (answered) return;
  answered = true;
  const question = questions[order[current]];
  const isCorrect = index === question.answer;
  if (isCorrect) score += 1;

  [...els.optionsList.children].forEach((button, optionIndex) => {
    button.disabled = true;
    if (optionIndex === question.answer) button.classList.add("correct");
    if (optionIndex === index && !isCorrect) button.classList.add("incorrect");
  });

  els.scoreText.textContent = score;
  els.feedbackKicker.textContent = isCorrect ? "Resposta certa." : "Quase. Veja a resposta correta.";
  els.explanationText.textContent = question.explanation;
  els.embrapaText.textContent = question.embrapa;
  els.feedbackBox.classList.toggle("is-wrong", !isCorrect);
  els.feedbackBox.hidden = false;
  els.nextButton.disabled = false;
}

function nextQuestion() {
  if (current < questions.length - 1) {
    current += 1;
    renderQuestion();
    return;
  }
  showResult();
}

function showResult() {
  const percent = Math.round((score / questions.length) * 100);
  let title = "Aprendiz de Campo";
  let message = "Você já tem uma boa porta de entrada para entender arábica, canéfora e sistemas cafeeiros. Vale revisitar as conexões para fixar os pontos técnicos.";

  if (percent >= 85) {
    title = "Especialista em Sistemas Cafeeiros";
    message = "Excelente desempenho. Você reconhece bem as diferenças entre arábica e canéfora e entende como ambiente, manejo, qualidade e pesquisa se conectam.";
  } else if (percent >= 65) {
    title = "Técnico do Café em Formação";
    message = "Muito bom. Você acertou os fundamentos e já consegue tomar boas decisões em cenários de produção, clima e qualidade.";
  } else if (percent >= 40) {
    title = "Explorador da Cafeicultura";
    message = "Bom começo. O quiz mostrou os principais caminhos para diferenciar espécies, ambientes e práticas de manejo.";
  }

  els.quizSection.hidden = true;
  els.resultSection.hidden = false;
  els.resultTitle.textContent = title;
  els.resultScore.textContent = `${score} de ${questions.length} acertos (${percent}%)`;
  els.resultMessage.textContent = message;
  els.resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

els.startButton.addEventListener("click", () => startQuiz());
els.shuffleButton.addEventListener("click", () => startQuiz({ shuffle: true }));
els.nextButton.addEventListener("click", nextQuestion);
els.restartButton.addEventListener("click", () => startQuiz());
els.playAgainButton.addEventListener("click", () => startQuiz({ shuffle: true }));
els.reviewButton.addEventListener("click", () => startQuiz());
