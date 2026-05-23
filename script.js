const questions = [
  {
    block: "Conhecendo o café",
    category: "espécies comerciais",
    question: "Segundo o conteúdo do ATER+Digital, quais são as duas espécies comerciais que mais se destacam na produção mundial de café?",
    options: ["Coffea arabica e Coffea canephora", "Coffea bourbon e Coffea geisha", "Coffea liberica e Coffea excelsa", "Coffea conilon e Coffea catuaí"],
    answer: 0,
    explanation: "As duas espécies comerciais mais importantes são Coffea arabica e Coffea canephora, esta última reunindo grupos como Conilon e Robusta.",
    connection: {
      ater: { title: "História do café - espécies comerciais e origem do café", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/historia" },
      publication: { title: "Obtenção de plantas de Coffea arabica geneticamente modificadas por bombardeamento de calos embriogênicos. (2004) - Embrapa Recursos Genéticos e Biotecnologia", url: "https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/172569/1/bp073.pdf" },
      solution: { title: "Robusta Amazônico - Cultivar híbrida de café - BRS 3213 - Produto / Cultivar convencional - Embrapa Rondônia", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/4969/p--strongrobusta-amazocircnico-ndash-cultivar-hiacutebrida-de-cafeacute-ndash-brs-3213strongp" }
    }
  },
  {
    block: "Conhecendo o café",
    category: "canéfora",
    question: "Qual alternativa representa melhor a relação entre Conilon, Robusta e Coffea canephora?",
    options: ["Conilon e Robusta são espécies diferentes do gênero Coffea", "Conilon e Robusta são grupos associados à espécie Coffea canephora", "Conilon pertence ao arábica e Robusta ao canéfora", "Conilon e Robusta são nomes de métodos de torra"],
    answer: 1,
    explanation: "Conilon e Robusta são grupos associados à espécie Coffea canephora, mas podem ter características diferentes de adaptação, vigor e cultivo.",
    connection: {
      ater: { title: "História do café - chegada do Coffea canephora ao Brasil", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/historia" },
      publication: { title: "Robustas Amazônicos: os cafeeiros cultivados em Rondônia. (2022) - Embrapa Rondônia", url: "https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1152388/1/Livro-Robustas-Amazonicos.pdf" },
      solution: { title: "Robusta Amazônico - Cultivar híbrida de café - BRS 3213 - Produto / Cultivar convencional - Embrapa Rondônia", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/4969/p--strongrobusta-amazocircnico-ndash-cultivar-hiacutebrida-de-cafeacute-ndash-brs-3213strongp" }
    }
  },
  {
    block: "Conhecendo o café",
    category: "sistemas cafeeiros",
    question: "Por que o quiz deve tratar Arábica e Canéfora como sistemas cafeeiros, e não como uma disputa entre espécies?",
    options: ["Porque apenas o Arábica tem valor econômico", "Porque apenas o Canéfora tem importância regional", "Porque cada espécie expressa diferentes combinações de ambiente, genética, manejo, qualidade e mercado", "Porque as duas espécies são idênticas em todos os aspectos"],
    answer: 2,
    explanation: "A abordagem por sistemas evita hierarquias simplistas e mostra que diferentes cafés expressam diferentes territórios, tecnologias e objetivos produtivos.",
    connection: {
      ater: { title: "Página inicial - ciência, inovação, sustentabilidade e diversidade de origens", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe" },
      publication: { title: "Café canéfora: ciência, sabor e identidade. (2025) - Embrapa Rondônia", url: "https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1180994/1/CAFE-CANEFORA.pdf" },
      solution: { title: "Protocolo de análise sensorial de bebida de café - Metodologia / Metodologia Técnico-Científica - Embrapa Cerrados", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/9799/p--protocolo-de-anaacutelise-sensorial-de-bebida-de-cafeacutep" }
    }
  },
  {
    block: "Conhecendo o café",
    category: "história",
    question: "Qual ideia sintetiza melhor a importância histórica do café no Brasil?",
    options: ["O café sempre foi apenas uma bebida de consumo doméstico", "O café não teve relação com o desenvolvimento regional brasileiro", "O café teve papel econômico, social, territorial e cultural na formação do país", "O café só passou a ter importância depois do surgimento das cafeterias modernas"],
    answer: 2,
    explanation: "O café participa da história econômica, cultural e territorial do Brasil, conectando produção, consumo, pesquisa, mercado e identidade.",
    connection: {
      ater: { title: "História do café - identidade, patrimônio e desenvolvimento", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/historia" },
      publication: { title: "Desenvolvimento territorial, história, cultura e tradição: os caminhos do café em Alto Paraíso (GO). (2008)", url: "https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/125026/1/CAMPOSJ.I.pdf" },
      solution: null
    }
  },
  {
    block: "Conhecendo o café",
    category: "diversidade",
    question: "Qual alternativa expressa melhor a mensagem de diversidade presente no conteúdo do ATER+Digital Café?",
    options: ["O Brasil produz apenas um tipo de café relevante", "A cafeicultura brasileira reúne Arábica e Canéfora, diferentes origens, sistemas produtivos e experiências de consumo", "A qualidade do café depende apenas da espécie cultivada", "A inovação tem pouca importância para a cafeicultura brasileira"],
    answer: 1,
    explanation: "O conteúdo valoriza a diversidade da cafeicultura brasileira, conectando tradição, ciência, inovação, sustentabilidade, origens e consumo.",
    connection: {
      ater: { title: "Página inicial - fronteira do conhecimento e sustentabilidade", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe" },
      publication: { title: "Café 'Conilon' (Coffea canephora L.). (2020) - Embrapa Amazônia Oriental", url: "https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1127269/1/LV-RecomendacaoSolo-2020-269-274.pdf" },
      solution: { title: "Robusta Amazônico - Cultivar híbrida de café - BRS 3213 - Produto / Cultivar convencional - Embrapa Rondônia", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/4969/p--strongrobusta-amazocircnico-ndash-cultivar-hiacutebrida-de-cafeacute-ndash-brs-3213strongp" }
    }
  },
  {
    block: "Território, clima e adaptação",
    category: "terroir",
    question: "No café, o que significa falar em terroir?",
    options: ["Apenas a altitude da lavoura", "Apenas a variedade genética plantada", "Somente a marca comercial do café", "A combinação de clima, solo, relevo, altitude, luminosidade, manejo e história do território"],
    answer: 3,
    explanation: "Terroir é o conjunto de fatores ambientais e humanos que contribuem para tornar cada café único.",
    connection: {
      ater: { title: "Escolha da área e do terroir", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/escolhaterroir" },
      publication: { title: "The new standpoints for the terroir of Coffea canephora from Southwestern Brazil: edaphic and sensorial perspective. (2022) - Embrapa Café", url: "https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1145493/1/Artigo-Agronomy-2022-MAmelia.pdf" },
      solution: null
    }
  },
  {
    block: "Território, clima e adaptação",
    category: "planejamento territorial",
    question: "Qual conjunto de fatores deve ser analisado antes de escolher uma área para implantação de café?",
    options: ["Clima, solo, relevo, altitude, água, luminosidade e objetivo produtivo", "Apenas a cor dos frutos", "Somente o preço da embalagem final", "Apenas o método de preparo usado pelo consumidor"],
    answer: 0,
    explanation: "A escolha da área influencia produtividade, qualidade, riscos de manejo e identidade do café.",
    connection: {
      ater: { title: "Pré-produção - escolha da área e do terroir", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/preproducao" },
      publication: { title: "Temperaturas elevadas no florescimento de cafeeiros - I. Duração em dias seguidos com temperaturas máximas superiores a 34 °C. (2003) - Embrapa Agricultura Digital", url: "https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/8420/1/PC-Temperaturas-elevadas-CBAGRO-2003.pdf" },
      solution: { title: "Sistema Brasileiro de Classificação de Terras para Irrigação - SiBCTI - Produto / Software para Clientes Externos - Embrapa Solos", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/10042/p--sistema-brasileiro-de-classificaccedilatildeo-de-terras-para-irrigaccedilatildeo---sibctip" }
    }
  },
  {
    block: "Território, clima e adaptação",
    category: "arábica",
    question: "Segundo o material do ATER+Digital, qual faixa de temperatura é geralmente mais associada ao bom desempenho do Coffea arabica?",
    options: ["5 °C a 10 °C", "18 °C a 23 °C", "30 °C a 40 °C", "Acima de 45 °C"],
    answer: 1,
    explanation: "O Arábica costuma se adaptar melhor a regiões de clima mais ameno, geralmente entre 18 °C e 23 °C.",
    connection: {
      ater: { title: "Escolha do terroir - clima", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/escolhaterroir" },
      publication: { title: "Microclimate in coffee plantation grown under grevillea trees shading. (2011) - Embrapa Pecuária Sudeste", url: "https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/887391/1/7065.pdf" },
      solution: null
    }
  },
  {
    block: "Território, clima e adaptação",
    category: "canéfora",
    question: "Qual alternativa descreve melhor a adaptação tradicional dos cafés Canéfora?",
    options: ["Ambientes mais quentes, muitas vezes de menor altitude, com possibilidade de sistemas irrigados e intensivos", "Apenas regiões frias e sujeitas a geadas", "Somente áreas de neve e alta montanha", "Ambientes onde não há necessidade de manejo de água"],
    answer: 0,
    explanation: "Canéforas costumam apresentar maior adaptação a ambientes quentes, embora pesquisas recentes ampliem suas possibilidades em altitudes intermediárias e elevadas.",
    connection: {
      ater: { title: "Escolha do terroir - clima, topografia e altitude", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/escolhaterroir" },
      publication: { title: "Café 'Conilon' (Coffea canephora L.). (2020) - Embrapa Amazônia Oriental", url: "https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1127269/1/LV-RecomendacaoSolo-2020-269-274.pdf" },
      solution: { title: "Robusta Amazônico - Cultivar híbrida de café - BRS 3213 - Produto / Cultivar convencional - Embrapa Rondônia", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/4969/p--strongrobusta-amazocircnico-ndash-cultivar-hiacutebrida-de-cafeacute-ndash-brs-3213strongp" }
    }
  },
  {
    block: "Território, clima e adaptação",
    category: "canéfora",
    question: "O ATER+Digital destaca pesquisas recentes sobre Canéforas em novas condições de altitude. Qual conclusão é mais adequada?",
    options: ["Canéforas nunca podem produzir cafés de qualidade", "Canéforas só podem ser cultivados abaixo do nível do mar", "Alguns genótipos de Coffea canephora vêm mostrando bom desempenho agronômico e sensorial em altitudes intermediárias e mais elevadas", "Altitude deixou de influenciar o café"],
    answer: 2,
    explanation: "Pesquisas recentes mostram que alguns Canéforas podem apresentar bons resultados em ambientes antes menos associados à espécie.",
    connection: {
      ater: { title: "Pré-produção - avanço de Canéforas em altitudes intermediárias e elevadas", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/preproducao" },
      publication: { title: "The new standpoints for the terroir of Coffea canephora from Southwestern Brazil: edaphic and sensorial perspective. (2022) - Embrapa Café", url: "https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1145493/1/Artigo-Agronomy-2022-MAmelia.pdf" },
      solution: { title: "Robusta Amazônico - Cultivar híbrida de café - BRS 3213 - Produto / Cultivar convencional - Embrapa Rondônia", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/4969/p--strongrobusta-amazocircnico-ndash-cultivar-hiacutebrida-de-cafeacute-ndash-brs-3213strongp" }
    }
  },
  {
    block: "Genética, cultivares e planejamento",
    category: "cultivares",
    question: "Por que a escolha da cultivar é uma das decisões mais importantes da cafeicultura?",
    options: ["Porque a cultivar acompanha a lavoura por muitos anos e influencia produtividade, qualidade, adaptação e riscos", "Porque a cultivar só influencia a cor da embalagem", "Porque o material genético pode ser trocado semanalmente sem custo", "Porque a cultivar não tem relação com ambiente ou manejo"],
    answer: 0,
    explanation: "Como o café é uma cultura perene, o material genético escolhido condiciona o desempenho da lavoura durante vários ciclos produtivos.",
    connection: {
      ater: { title: "Escolha do material genético", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/escolha-do-material-gen%C3%A9tico" },
      publication: { title: "O cultivo do milho-verde. (2002) - Embrapa Milho e Sorgo", url: "https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/485177/1/Cultivo-milho-verde.pdf" },
      solution: { title: "SELEGEN - Produto / Software para Clientes Externos - Embrapa Florestas", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/2133/p--selegenp" }
    }
  },
  {
    block: "Genética, cultivares e planejamento",
    category: "material genético",
    question: "Qual aspecto NÃO deve ser ignorado na escolha do material genético para uma nova lavoura?",
    options: ["Adaptação ao clima", "Resistência a pragas e doenças", "Potencial de qualidade da bebida", "Apenas o nome comercial mais bonito"],
    answer: 3,
    explanation: "A decisão deve considerar critérios técnicos, como adaptação, resistência, produtividade, qualidade e objetivo do sistema produtivo.",
    connection: {
      ater: { title: "Escolha do material genético - adaptação e resistência", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/escolha-do-material-gen%C3%A9tico" },
      publication: { title: "Reação de genótipos de feijão-caupi a Colletotrichum truncatum. (2006) - Embrapa Meio-Norte", url: "https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/69389/1/Bpd650001.pdf" },
      solution: { title: "Robusta Amazônico - Cultivar híbrida de café - BRS 3213 - Produto / Cultivar convencional - Embrapa Rondônia", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/4969/p--strongrobusta-amazocircnico-ndash-cultivar-hiacutebrida-de-cafeacute-ndash-brs-3213strongp" }
    }
  },
  {
    block: "Genética, cultivares e planejamento",
    category: "planejamento",
    question: "Qual prática ajuda a reduzir riscos climáticos, produtivos e fitossanitários antes mesmo do plantio?",
    options: ["Escolher a área sem análise técnica", "Planejar a lavoura considerando clima, água, relevo, cultivar, mecanização e objetivo de produção", "Plantar sempre a mesma cultivar em qualquer ambiente", "Adiar todas as decisões para depois da primeira colheita"],
    answer: 1,
    explanation: "O planejamento do plantio organiza decisões que influenciam produtividade, custos, manejo e longevidade da lavoura.",
    connection: {
      ater: { title: "Planejamento do plantio", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/planejamento-do-plantio" },
      publication: { title: "Café 'Conilon' (Coffea canephora L.). (2020) - Embrapa Amazônia Oriental", url: "https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1127269/1/LV-RecomendacaoSolo-2020-269-274.pdf" },
      solution: { title: "Sistema Brasileiro de Classificação de Terras para Irrigação - SiBCTI - Produto / Software para Clientes Externos - Embrapa Solos", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/10042/p--sistema-brasileiro-de-classificaccedilatildeo-de-terras-para-irrigaccedilatildeo---sibctip" }
    }
  },
  {
    block: "Genética, cultivares e planejamento",
    category: "plantio",
    question: "Qual alternativa explica corretamente o papel do espaçamento no plantio do café?",
    options: ["O espaçamento influencia entrada de luz, circulação de ar, manejo, produtividade e mecanização", "O espaçamento não interfere no manejo da lavoura", "O espaçamento é definido apenas pelo tamanho da xícara", "O espaçamento só importa depois da torra"],
    answer: 0,
    explanation: "Espaçamentos adequados contribuem para sistemas mais eficientes, produtivos e sustentáveis.",
    connection: {
      ater: { title: "Planejamento do plantio - espaçamento e organização da lavoura", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/planejamento-do-plantio" },
      publication: { title: "Comportamento de seis linhagens de café (Coffea arabica L.) em condições de sombreamento e a pleno sol no Estado do Acre, Brasil. (1999) - Embrapa Acre", url: "https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/492536/1/1249.pdf" },
      solution: { title: "Poda de formação dos cafeeiros - Prática agropecuária / Prática para condução/poda - Embrapa Rondônia", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/3453/p--poda-de-formaccedilatildeo-dos-cafeeirosp" }
    }
  },
  {
    block: "Genética, cultivares e planejamento",
    category: "viabilidade",
    question: "No planejamento financeiro da lavoura, por que é importante lembrar que o cafeeiro leva tempo para produzir comercialmente?",
    options: ["Porque o cafeeiro produz no mesmo dia do plantio", "Porque a cultura não exige nenhum investimento inicial", "Porque a lavoura pode levar de dois a quatro anos para iniciar a produção comercial", "Porque café é uma cultura anual de ciclo curto"],
    answer: 2,
    explanation: "O tempo até a produção comercial exige planejamento de investimentos, custos de formação e sustentabilidade econômica da atividade.",
    connection: {
      ater: { title: "Planejamento do plantio - viabilidade e uso de recursos", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/planejamento-do-plantio" },
      publication: { title: "Cafeicultura em Rondônia: situação atual e perspectivas. (1996) - Embrapa Rondônia", url: "https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/698625/1/DOC30id16410001.pdf" },
      solution: null
    }
  },
  {
    block: "Solo, água e formação da lavoura",
    category: "solo",
    question: "Antes do plantio, qual procedimento é essencial para orientar correção e manejo do solo?",
    options: ["Escolher adubos sem diagnóstico", "Realizar análise técnica do solo e das condições da área", "Evitar qualquer correção de acidez", "Definir a adubação apenas pela aparência das folhas"],
    answer: 1,
    explanation: "A análise do solo permite identificar pH, fertilidade, alumínio tóxico e disponibilidade de nutrientes, orientando calagem, gessagem e adubação.",
    connection: {
      ater: { title: "Preparo do solo e da área - análise técnica e diagnóstico do solo", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/preparo-do-solo-e-da-%C3%A1rea" },
      publication: { title: "Manejo da fertilidade do solo no pré-plantio e plantio do cafeeiro. (2001) - Embrapa Cerrados", url: "https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/566462/1/rectec46.pdf" },
      solution: { title: "Manejo da Fertilidade do Solo no Pré-plantio e plantio do Cafeeiro no Cerrado - Prática agropecuária / Prática para manejo da adubação e fertilidade do solo - Embrapa Cerrados", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/3152/p--manejo-da-fertilidade-do-solo-no-preacute-plantio-e-plantio-do-cafeeiro-no-cerradop" }
    }
  },
  {
    block: "Solo, água e formação da lavoura",
    category: "calagem",
    question: "Qual é a função geral da calagem no preparo do solo para o cafeeiro?",
    options: ["Elevar o pH e fornecer cálcio e magnésio, favorecendo o desenvolvimento das plantas", "Aumentar a acidez do solo sem controle", "Eliminar a necessidade de análise de solo", "Substituir totalmente o manejo da água"],
    answer: 0,
    explanation: "A calagem corrige a acidez e melhora condições químicas importantes para o crescimento das raízes e o equilíbrio nutricional.",
    connection: {
      ater: { title: "Preparo do solo e da área - correção da acidez e fertilidade", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/preparo-do-solo-e-da-%C3%A1rea" },
      publication: { title: "Manejo da calagem e da gessagem para o cafeeiro. (2002) - Embrapa Café", url: "https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/908792/1/Manejodacalagem.pdf" },
      solution: { title: "Gesso agrícola no café no Cerrado - Prática agropecuária / Prática para manejo da adubação e fertilidade do solo - Embrapa Cerrados", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/2386/p--gesso-agriacutecola-no-cafeacute-no-cerradop" }
    }
  },
  {
    block: "Solo, água e formação da lavoura",
    category: "raízes",
    question: "Por que o desenvolvimento das raízes é tão importante na formação da lavoura cafeeira?",
    options: ["Porque raízes saudáveis favorecem absorção de água e nutrientes, estabilidade produtiva e maior resiliência a períodos secos", "Porque as raízes não interferem na produtividade", "Porque raízes superficiais são sempre desejáveis", "Porque o café não depende de água no solo"],
    answer: 0,
    explanation: "Raízes profundas e saudáveis ajudam o cafeeiro a explorar melhor o solo, absorver água e nutrientes e resistir melhor a estresses.",
    connection: {
      ater: { title: "Preparo do solo e da área - desenvolvimento das raízes e adaptação da lavoura", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/preparo-do-solo-e-da-%C3%A1rea" },
      publication: { title: "O alto teor de silício no solo inibe o crescimento radicular de cafeeiros sem afetar as trocas gasosas foliares. (2011) - Embrapa Meio Ambiente", url: "https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/901811/1/2011AP27.pdf" },
      solution: { title: "Solarizador de substrato para produção de mudas livres de nematóides - Produto / Máquina, implemento ou equipamento - Embrapa Rondônia", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/4473/p--solarizador-de-substrato-para-produccedilatildeo-de-mudas-livres-de-nematoacuteidesp" }
    }
  },
  {
    block: "Solo, água e formação da lavoura",
    category: "nutrição",
    question: "Na fase de formação, qual é o objetivo principal do manejo nutricional?",
    options: ["Estimular raízes, folhas e ramos que sustentarão as futuras safras", "Produzir café torrado imediatamente", "Evitar qualquer adubação", "Reduzir o crescimento das plantas jovens"],
    answer: 0,
    explanation: "Na formação, nutrientes como nitrogênio, potássio, boro e zinco contribuem para crescimento vegetativo e estruturação da planta.",
    connection: {
      ater: { title: "Fase de formação - manejo nutricional e desenvolvimento das plantas", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/faseformacao" },
      publication: { title: "Normas foliares para café conilon em pré-florada no sul da Bahia. (2013) - Embrapa Rondônia", url: "https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/978287/1/Partellietal.2013.pdf" },
      solution: { title: "Manejo da Fertilidade do Solo no Pré-plantio e plantio do Cafeeiro no Cerrado - Prática agropecuária / Prática para manejo da adubação e fertilidade do solo - Embrapa Cerrados", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/3152/p--manejo-da-fertilidade-do-solo-no-preacute-plantio-e-plantio-do-cafeeiro-no-cerradop" }
    }
  },
  {
    block: "Solo, água e formação da lavoura",
    category: "irrigação",
    question: "Qual tecnologia de manejo da irrigação pode contribuir para uniformizar a florada do cafeeiro irrigado no Cerrado?",
    options: ["Uso do estresse hídrico controlado", "Armazenamento úmido dos grãos", "Torra escura antes da colheita", "Plantio sem planejamento hídrico"],
    answer: 0,
    explanation: "O estresse hídrico controlado pode favorecer florada única e mais uniforme, contribuindo para qualidade, produtividade e economia de água.",
    connection: {
      ater: { title: "Produção - água, nutrição e equilíbrio das plantas", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/prod" },
      publication: { title: "Manejo da irrigação do cafeeiro, com uso do estresse hídrico controlado, para uniformização de florada. (2006) - Embrapa Cerrados", url: "https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/570529/1/CPAC-28224-AA.pdf" },
      solution: { title: "Uso do estresse hídrico controlado para uniformização de florada do cafeeiro irrigado no Cerrado - Prática agropecuária / Prática para manejo de irrigação - Embrapa Cerrados", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/784/p--uso-do-estresse-hiacutedrico-controlado-para-uniformizaccedilatildeo-de-florada-do-cafeeiro-irrigado-no-cerradop" }
    }
  },
  {
    block: "Manejo produtivo e fitossanidade",
    category: "podas",
    question: "Qual alternativa descreve melhor a função das podas no cafeeiro?",
    options: ["Renovar ramos produtivos, equilibrar crescimento e manter produtividade ao longo dos anos", "Impedir a renovação da lavoura", "Eliminar a necessidade de nutrição e monitoramento", "Substituir totalmente a colheita"],
    answer: 0,
    explanation: "As podas ajudam a renovar a planta, organizar sua arquitetura e preservar o equilíbrio entre vigor, produção e longevidade.",
    connection: {
      ater: { title: "Produção - podas e renovação da lavoura", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/prod" },
      publication: { title: "Poda programada de ciclo para o café conilon. (2009) - Embrapa Café", url: "https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/903685/1/Podaprogramada.pdf" },
      solution: { title: "Poda de formação dos cafeeiros - Prática agropecuária / Prática para condução/poda - Embrapa Rondônia", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/3453/p--poda-de-formaccedilatildeo-dos-cafeeirosp" }
    }
  },
  {
    block: "Manejo produtivo e fitossanidade",
    category: "fitossanidade",
    question: "Por que o monitoramento fitossanitário deve ocorrer de forma contínua na lavoura?",
    options: ["Porque ajuda a identificar pragas e doenças, reduzir perdas e orientar manejo integrado", "Porque substitui a escolha de cultivares adaptadas", "Porque pragas e doenças não afetam o café", "Porque serve apenas para definir o preço da cafeteria"],
    answer: 0,
    explanation: "Ferrugem, broca, bicho-mineiro e nematoides estão entre os desafios que exigem monitoramento e estratégias de manejo.",
    connection: {
      ater: { title: "Produção - manejo fitossanitário e sustentabilidade", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/prod" },
      publication: { title: "Preparação de dados e extração de padrões para aplicação em alertas fitossanitários para a cultura do café. (2006) - Embrapa Agricultura Digital", url: "https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/71/1/PLPreparacaoAmaralPIBIC2006.pdf" },
      solution: { title: "Solarizador de substrato para produção de mudas livres de nematóides - Produto / Máquina, implemento ou equipamento - Embrapa Rondônia", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/4473/p--solarizador-de-substrato-para-produccedilatildeo-de-mudas-livres-de-nematoacuteidesp" }
    }
  },
  {
    block: "Manejo produtivo e fitossanidade",
    category: "condução",
    question: "Qual alternativa mostra uma diferença de condução comum entre Arábica e Canéfora na formação da planta?",
    options: ["Arábica frequentemente em haste única; Canéfora com múltiplas hastes e manejo de brotos", "Arábica sempre sem poda; Canéfora sempre sem ramos produtivos", "As duas espécies não exigem condução", "A condução só é definida depois da torra"],
    answer: 0,
    explanation: "O material destaca a condução em haste única para muitos sistemas de Arábica e múltiplas hastes para Canéfora, conforme arquitetura e vigor da planta.",
    connection: {
      ater: { title: "Fase de formação - condução da lavoura e formação das plantas", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/faseformacao" },
      publication: { title: "Manejo da poda do cafeeiro conilon (Coffea canephora). (2003) - Embrapa Amazônia Oriental", url: "https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/697397/1/fd310001.pdf" },
      solution: { title: "Poda de formação dos cafeeiros - Prática agropecuária / Prática para condução/poda - Embrapa Rondônia", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/3453/p--poda-de-formaccedilatildeo-dos-cafeeirosp" }
    }
  },
  {
    block: "Manejo produtivo e fitossanidade",
    category: "colheita",
    question: "Em áreas montanhosas, qual prática pode apoiar a colheita de café?",
    options: ["Métodos manuais ou equipamentos portáteis adaptados às condições do relevo", "Colheita apenas com grandes máquinas em qualquer declividade", "Abandono da colheita seletiva", "Secagem dos frutos ainda na planta como única estratégia"],
    answer: 0,
    explanation: "A topografia influencia o tipo de colheita. Em áreas montanhosas, predominam práticas manuais ou semimecanizadas adaptadas ao relevo.",
    connection: {
      ater: { title: "Colheita, pós-colheita e qualidade - formas de colheita", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/prod" },
      publication: { title: "Café 'Conilon' (Coffea canephora L.). (2020) - Embrapa Amazônia Oriental", url: "https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1127269/1/LV-RecomendacaoSolo-2020-269-274.pdf" },
      solution: { title: "Recomendações sobre o uso da máquina para derriçar café - Prática agropecuária / Prática para colheita - Embrapa Instrumentação", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/9593/p--recomendaccedilotildees-sobre-o-uso-da-maacutequina-para-derriccedilar-cafeacutep" }
    }
  },
  {
    block: "Pós-colheita, qualidade e cafés especiais",
    category: "pós-colheita",
    question: "Por que o pós-colheita é decisivo para a qualidade do café?",
    options: ["Porque lavagem, separação, fermentação, secagem e armazenamento influenciam aroma, doçura, acidez, corpo e segurança do alimento", "Porque a qualidade depende apenas da embalagem", "Porque o pós-colheita não altera o perfil sensorial", "Porque elimina a influência do terroir e da genética"],
    answer: 0,
    explanation: "O pós-colheita preserva e desenvolve atributos construídos desde a lavoura, além de reduzir defeitos e riscos de contaminação.",
    connection: {
      ater: { title: "Pós-colheita, qualidade e mercado - manejo pós-colheita e processamento", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/posproducao" },
      publication: { title: "Obtenção de café com qualidade no Acre. (2000) - Embrapa Acre", url: "https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/495398/1/cirtec34.pdf" },
      solution: { title: "Terreiro Barcaça Seca Café - Produto / Máquina, implemento ou equipamento - Embrapa Rondônia", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/2318/p--terreiro-barcaccedila-seca-cafeacutep" }
    }
  },
  {
    block: "Pós-colheita, qualidade e cafés especiais",
    category: "processamento",
    question: "Qual alternativa apresenta processos de pós-colheita citados no conteúdo do ATER+Digital?",
    options: ["Natural, cereja descascado, despolpado, honey e fermentações controladas", "Pasteurização, congelamento e fritura", "Somente torra escura e moagem fina", "Apenas embalagem a vácuo"],
    answer: 0,
    explanation: "Diferentes processamentos ajudam a construir perfis sensoriais variados e aumentar o valor agregado do café.",
    connection: {
      ater: { title: "Manejo pós-colheita e processamento - escolha do processamento", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/manejo-p%C3%B3s-colheita" },
      publication: { title: "Efeito da fermentação na qualidade da bebida de robustas amazônicos. (2020) - Embrapa Rondônia", url: "https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1129347/1/cpafro-18507.pdf" },
      solution: { title: "Protocolo de análise sensorial de bebida de café - Metodologia / Metodologia Técnico-Científica - Embrapa Cerrados", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/9799/p--protocolo-de-anaacutelise-sensorial-de-bebida-de-cafeacutep" }
    }
  },
  {
    block: "Pós-colheita, qualidade e cafés especiais",
    category: "fermentação",
    question: "O que as fermentações controladas podem oferecer à produção de cafés especiais?",
    options: ["Maior complexidade sensorial, padronização de lotes e redução de defeitos", "Eliminação total da necessidade de secagem", "Transformação do café em outra espécie", "Redução obrigatória da qualidade"],
    answer: 0,
    explanation: "Fermentações controladas, quando bem conduzidas, podem ampliar aromas e sabores e contribuir para consistência e qualidade.",
    connection: {
      ater: { title: "Pós-colheita - fermentações e inovação", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/posproducao" },
      publication: { title: "Efeito da fermentação na qualidade da bebida de robustas amazônicos. (2020) - Embrapa Rondônia", url: "https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1129347/1/cpafro-18507.pdf" },
      solution: { title: "Protocolo de análise sensorial de bebida de café - Metodologia / Metodologia Técnico-Científica - Embrapa Cerrados", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/9799/p--protocolo-de-anaacutelise-sensorial-de-bebida-de-cafeacutep" }
    }
  },
  {
    block: "Pós-colheita, qualidade e cafés especiais",
    category: "cafés especiais",
    question: "Segundo o conteúdo sobre cafés especiais, o que define um café especial?",
    options: ["Apenas ser Arábica", "Apenas ser Canéfora", "Qualidade sensorial, origem, manejo, processamento, rastreabilidade, sustentabilidade e identidade", "Somente preço alto no mercado"],
    answer: 2,
    explanation: "Cafés especiais combinam qualidade na xícara com origem, cuidado produtivo, rastreabilidade, sustentabilidade e conexão entre produtor e consumidor.",
    connection: {
      ater: { title: "Cafés especiais - origem, qualidade e identidade", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/cafesespeciais" },
      publication: { title: "Modelo de negócio: cafés especiais robustas amazônicos. (2021)", url: "https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1135107/1/Guia-de-Negocio-Cafes-especiais-Robustas-Amazonicos.pdf" },
      solution: { title: "Protocolo de análise sensorial de bebida de café - Metodologia / Metodologia Técnico-Científica - Embrapa Cerrados", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/9799/p--protocolo-de-anaacutelise-sensorial-de-bebida-de-cafeacutep" }
    }
  },
  {
    block: "Pós-colheita, qualidade e cafés especiais",
    category: "canéforas especiais",
    question: "Qual afirmação sobre Canéforas especiais está mais alinhada ao ATER+Digital?",
    options: ["Canéforas não podem ter complexidade sensorial", "Canéforas de qualidade podem apresentar notas como chocolate, especiarias, frutas maduras, castanhas, mel, caramelo e nuances licorosas", "Canéforas são usados apenas como ornamentais", "Canéforas não respondem a genética, manejo ou pós-colheita"],
    answer: 1,
    explanation: "O avanço em genética, manejo, fermentação, secagem e avaliação sensorial tem valorizado a identidade própria dos Canéforas de qualidade.",
    connection: {
      ater: { title: "Cafés especiais e qualidade sensorial - diversidade dos Canéforas", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/cafesespeciais" },
      publication: { title: "Caracterização do perfil sensorial de Robustas Amazônicos. (2024) - Embrapa Rondônia", url: "https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1164684/1/ANAIS-EIPER-2023-FINAL-40.pdf" },
      solution: { title: "Robusta Amazônico - Cultivar híbrida de café - BRS 3210 - Produto / Cultivar convencional - Embrapa Rondônia", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/4970/p--strongrobusta-amazocircnico-ndash-cultivar-hiacutebrida-de-cafeacute-ndash-brs-3210strongp" }
    }
  },
  {
    block: "Torra, consumo e compostos do café",
    category: "torra",
    question: "Qual alternativa descreve melhor o papel da torra?",
    options: ["Transformar grãos verdes e revelar aromas, sabores, corpo e textura da bebida", "Apagar completamente a influência da origem", "Substituir todo o manejo da lavoura", "Eliminar compostos químicos do café sem alteração sensorial"],
    answer: 0,
    explanation: "A torra transforma compostos naturais pelo calor e revela características construídas da genética ao pós-colheita.",
    connection: {
      ater: { title: "Torra e desenvolvimento de perfis sensoriais do café", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/torrefa%C3%A7%C3%A3o" },
      publication: { title: "Influência dos parâmetros de torração nas características físicas, químicas e sensoriais do Café Arábia puro. (2007) - Embrapa Instrumentação", url: "https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/25672/1/Proci07.00187.pdf" },
      solution: { title: "Protocolo de análise sensorial de bebida de café - Metodologia / Metodologia Técnico-Científica - Embrapa Cerrados", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/9799/p--protocolo-de-anaacutelise-sensorial-de-bebida-de-cafeacutep" }
    }
  },
  {
    block: "Torra, consumo e compostos do café",
    category: "torra",
    question: "Qual perfil tende a ser mais associado a torras claras em cafés especiais?",
    options: ["Maior destaque para notas florais, frutadas, cítricas e maior acidez sensorial", "Queima obrigatória dos grãos", "Ausência completa de aroma", "Padronização que elimina a origem"],
    answer: 0,
    explanation: "Torras claras tendem a preservar características da origem, do processamento e do terroir, especialmente em cafés especiais.",
    connection: {
      ater: { title: "Torrefação - tipos de torra", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/torrefa%C3%A7%C3%A3o" },
      publication: { title: "A Importância da Informação Sobre do Grau de Torra do Café e sua Influência nas Características Organolépticas da Bebida. (2004) - Embrapa Instrumentação", url: "https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/30170/1/CT582004.pdf" },
      solution: null
    }
  },
  {
    block: "Torra, consumo e compostos do café",
    category: "compostos",
    question: "Qual composto estimulante do café pode variar conforme espécie, torra e método de preparo?",
    options: ["Cafeína", "Sacarose de cana adicionada", "Glúten", "Lactose"],
    answer: 0,
    explanation: "A cafeína é o composto estimulante mais conhecido do café e sua concentração varia conforme espécie, torra e preparo.",
    connection: {
      ater: { title: "Valor nutricional - cafeína", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/valor-nutricional" },
      publication: { title: "Café & saúde humana. (2003) - Embrapa Café", url: "https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/885988/1/Cafeesaudehumana.pdf" },
      solution: null
    }
  },
  {
    block: "Torra, consumo e compostos do café",
    category: "compostos",
    question: "Segundo o material, cafés Coffea canephora geralmente apresentam maiores teores de quais compostos em relação ao Arábica?",
    options: ["Cafeína e ácidos clorogênicos", "Lactose e glúten", "Sal e proteínas animais", "Álcool e gordura trans"],
    answer: 0,
    explanation: "Canéforas tendem a apresentar maiores teores de cafeína e ácidos clorogênicos, contribuindo para bebidas mais intensas e encorpadas.",
    connection: {
      ater: { title: "Valor nutricional - cafeína e ácidos clorogênicos", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/valor-nutricional" },
      publication: { title: "Composição química de café conilon (Coffea canephora). (2011) - Embrapa Café", url: "https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/903992/1/Composicaoquimica.pdf" },
      solution: null
    }
  },
  {
    block: "Sustentabilidade, mercado e futuro",
    category: "sustentabilidade",
    question: "Qual conjunto de práticas contribui para uma cafeicultura mais sustentável?",
    options: ["Conservação do solo, uso eficiente da água, manejo integrado e cultivares adaptadas", "Solo descoberto, desperdício de água e ausência de monitoramento", "Plantio sem planejamento e sem assistência técnica", "Secagem descontrolada e armazenamento úmido"],
    answer: 0,
    explanation: "A sustentabilidade envolve eficiência produtiva, conservação de recursos naturais, manejo técnico e adaptação às condições locais.",
    connection: {
      ater: { title: "Sustentabilidade ambiental e produção resiliente", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe" },
      publication: { title: "Avaliação de conformidades de cafeicultores do Cerrado mineiro sobre exigências da produção integrada de café. (2008) - Embrapa Café", url: "https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/880530/1/Avaliacaodeconformidade.pdf" },
      solution: { title: "Avaliação da pegada e do sequestro de carbono na cafeicultura das Matas de Rondônia - Metodologia / Metodologia Técnico-Científica - Embrapa Territorial", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/13165/p--avaliaccedilatildeo-da-pegada-e-do-sequestro-de-carbono-na-cafeicultura-das-matas-de-rondocircniap" }
    }
  },
  {
    block: "Sustentabilidade, mercado e futuro",
    category: "mercado",
    question: "Qual tendência atual fortalece o valor agregado de cafés brasileiros?",
    options: ["Rastreabilidade, identidade de origem, Indicações Geográficas, sustentabilidade e conexão com consumidores", "Ausência de informação sobre origem", "Mistura sem controle de qualidade", "Desvalorização dos territórios produtores"],
    answer: 0,
    explanation: "O mercado valoriza cada vez mais cafés com história, origem, rastreabilidade, qualidade e práticas sustentáveis.",
    connection: {
      ater: { title: "Mercado, consumo e valor agregado - origem e rastreabilidade", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe/posproducao" },
      publication: { title: "Digitalização de dados na produção de café arábica em Caconde (SP) para certificação e apoio à obtenção de Indicação Geográfica. (2024) - Embrapa Agricultura Digital", url: "https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1172535/1/RA-Digitalizacao-dados-SemearDigital-2024.pdf" },
      solution: { title: "Sistema de Inteligência Territorial Estratégica da Macrologística Agropecuária Brasileira | SITE-MLog - Metodologia / Procedimento Informatizado - Embrapa Territorial", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/12230/p--sistema-de-inteligecircncia-territorial-estrateacutegica-da-macrologiacutestica-agropecuaacuteria-brasileira-nbspsite-mlogp" }
    }
  },
  {
    block: "Sustentabilidade, mercado e futuro",
    category: "mudanças climáticas",
    question: "Diante das mudanças climáticas, qual resposta é mais adequada para os sistemas cafeeiros?",
    options: ["Adaptar cultivares, manejo do solo, uso da água, sombreamento, monitoramento e planejamento territorial", "Ignorar temperatura e disponibilidade de água", "Plantar sempre a mesma cultivar em qualquer ambiente", "Abandonar pesquisa, inovação e assistência técnica"],
    answer: 0,
    explanation: "Mudanças climáticas exigem adaptação técnica, uso de informação, manejo eficiente e desenvolvimento de sistemas mais resilientes.",
    connection: {
      ater: { title: "Sustentabilidade ambiental, planejamento e adaptação climática", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe" },
      publication: { title: "O aquecimento global e a cafeicultura brasileira. (2007) - Embrapa Agricultura Digital", url: "https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1132/1/APAquecimentoSBMET2007.pdf" },
      solution: { title: "Uso do estresse hídrico controlado para uniformização de florada do cafeeiro irrigado no Cerrado - Prática agropecuária / Prática para manejo de irrigação - Embrapa Cerrados", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/784/p--uso-do-estresse-hiacutedrico-controlado-para-uniformizaccedilatildeo-de-florada-do-cafeeiro-irrigado-no-cerradop" }
    }
  },
  {
    block: "Sustentabilidade, mercado e futuro",
    category: "síntese",
    question: "Qual é a principal mensagem educativa do quiz proposto?",
    options: ["A cafeicultura brasileira é diversa e combina espécies, territórios, ciência, manejo, qualidade, sustentabilidade e inovação", "Só existe um café importante no Brasil", "Canéfora e Arábica devem ser tratados como rivais absolutos", "Pesquisa e tecnologia não influenciam a qualidade do café"],
    answer: 0,
    explanation: "O quiz deve reforçar uma visão integrada: diferentes sistemas cafeeiros contribuem para a diversidade, a competitividade e a sustentabilidade do café brasileiro.",
    connection: {
      ater: { title: "Página inicial - pesquisa, inovação, diversidade e sustentabilidade", url: "https://www.atermaisdigital.cnptia.embrapa.br/web/cafe" },
      publication: { title: "Cafés do Brasil: pesquisa, sustentabilidade e inovação. (2021) - Embrapa Café", url: "https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1131625/1/Cafe769s-do-Brasil.pdf" },
      solution: { title: "Uso do estresse hídrico controlado para uniformização de florada do cafeeiro irrigado no Cerrado - Prática agropecuária / Prática para manejo de irrigação - Embrapa Cerrados", url: "https://www.embrapa.br/busca-de-solucoes-tecnologicas/-/produto-servico/784/p--uso-do-estresse-hiacutedrico-controlado-para-uniformizaccedilatildeo-de-florada-do-cafeeiro-irrigado-no-cerradop" }
    }
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
  els.embrapaText.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.type = "button";
    button.innerHTML = `<strong>${String.fromCharCode(65 + index)}</strong>${option}`;
    button.addEventListener("click", () => chooseOption(index));
    els.optionsList.append(button);
  });
}

function renderConnection(connection) {
  const labels = [
    ["ater", "ATER+Digital"],
    ["publication", "Publicação relacionada"],
    ["solution", "Solução tecnológica relacionada"]
  ];

  const list = document.createElement("ul");
  list.className = "connection-list";

  labels.forEach(([key, label]) => {
    const item = connection?.[key];
    const li = document.createElement("li");
    const strong = document.createElement("strong");
    strong.textContent = `${label}: `;
    li.append(strong);

    if (item?.url) {
      const link = document.createElement("a");
      link.href = item.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = item.title;
      li.append(link);
    } else {
      li.append("não selecionada nesta questão; usar somente publicação/ATER+Digital ou realizar curadoria posterior.");
    }

    list.append(li);
  });

  els.embrapaText.innerHTML = "";
  els.embrapaText.append(list);
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
  renderConnection(question.connection);
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
  let title = "Explorador dos Sistemas Cafeeiros";
  let message = "Você percorreu os fundamentos da cafeicultura brasileira integrada: espécies, território, manejo, qualidade, mercado e inovação.";

  if (percent >= 85) {
    title = "Especialista em Sistemas Cafeeiros";
    message = "Excelente desempenho. Você reconhece como genética, território, manejo, pós-colheita e inovação se conectam na cafeicultura brasileira.";
  } else if (percent >= 65) {
    title = "Técnico do Café em Formação";
    message = "Muito bom. Você acertou boa parte das decisões de campo e já enxerga a cafeicultura como um sistema integrado.";
  } else if (percent >= 40) {
    title = "Aprendiz de Cafeicultura";
    message = "Bom começo. Revise as Conexões Embrapa para fortalecer os pontos sobre solo, água, qualidade e sustentabilidade.";
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
