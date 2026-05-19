from docx import Document
from docx.enum.text import WD_BREAK
from docx.shared import Inches, Pt, RGBColor


OUTPUT = "Desafio_Cafe_Brasil_Roteiro_Questoes.docx"

PROTECTED_TERMS = {
    "Coffea arabica": "__COFFEA_ARABICA__",
    "Coffea canephora": "__COFFEA_CANEPHORA__",
    "Coffea liberica": "__COFFEA_LIBERICA__",
    "Coffea conilon": "__COFFEA_CONILON__",
    "Coffea excelsa": "__COFFEA_EXCELSA__",
}

PT_REPLACEMENTS = [
    ("Cafe", "Café"),
    ("cafe", "café"),
    ("Arabica", "Arábica"),
    ("arabica", "arábica"),
    ("Canefora", "Canéfora"),
    ("canefora", "canéfora"),
    ("especies", "espécies"),
    ("especie", "espécie"),
    ("cientifico", "científico"),
    ("regioes", "regiões"),
    ("regiao", "região"),
    ("associado a", "associado à"),
    ("associada a", "associada à"),
    ("a especie", "à espécie"),
    ("A especie", "A espécie"),
    ("a atuacao", "à atuação"),
    ("producao", "produção"),
    ("condicoes", "condições"),
    ("decisoes", "decisões"),
    ("decisao", "decisão"),
    ("informacao", "informação"),
    ("adaptacao", "adaptação"),
    ("irrigacao", "irrigação"),
    ("tecnicos", "técnicos"),
    ("tecnico", "técnico"),
    ("tecnicas", "técnicas"),
    ("tecnica", "técnica"),
    ("Tecnologias", "Tecnologias"),
    ("publicacoes", "publicações"),
    ("Publicacoes", "Publicações"),
    ("solucoes", "soluções"),
    ("Solucao", "Solução"),
    ("praticas", "práticas"),
    ("Praticas", "Práticas"),
    ("pratica", "prática"),
    ("Pratica", "Prática"),
    ("catalogo", "catálogo"),
    ("Publico", "Público"),
    ("publico", "público"),
    ("alvo", "alvo"),
    ("medio", "médio"),
    ("graduacao", "graduação"),
    ("agricolas", "agrícolas"),
    ("Secundario", "Secundário"),
    ("Terciario", "Terciário"),
    ("sustentabilidade", "sustentabilidade"),
    ("brasileira", "brasileira"),
    ("Explicacao", "Explicação"),
    ("Conexao", "Conexão"),
    ("Questao", "Questão"),
    ("Qual e", "Qual é"),
    ("O que e", "O que é"),
    ("pertence a espécie", "pertence à espécie"),
    ("associados a espécie", "associados à espécie"),
    ("associadas a espécie", "associadas à espécie"),
    ("caféeiros", "cafeeiros"),
    ("correta", "correta"),
    ("xicara", "xícara"),
    ("umido", "úmido"),
    ("Acaia", "Acaiá"),
    ("Catuai", "Catuaí"),
    ("soluvel", "solúvel"),
    ("cafes", "cafés"),
    ("pos-colheita", "pós-colheita"),
    ("alcancar", "alcançar"),
    ("genetica", "genética"),
    ("economica", "econômica"),
    ("genero", "gênero"),
    ("proprias", "próprias"),
    ("mudancas", "mudanças"),
    ("climaticas", "climáticas"),
    ("as novas", "às novas"),
    ("So existe", "Só existe"),
    ("so o nome", "só o nome"),
    ("so existe", "só existe"),
    ("NAO", "NÃO"),
    ("nao", "não"),
    ("esta correta", "está correta"),
    ("esta pergunta", "esta pergunta"),
    ("esta resposta", "esta resposta"),
    ("apos", "após"),
    ("estagios", "estágios"),
    ("maturacao", "maturação"),
    ("contribuicao", "contribuição"),
    ("rotulo", "rótulo"),
    ("Rondonia", "Rondônia"),
    ("area", "área"),
    ("agua", "água"),
    ("relevo", "relevo"),
    ("necessidade", "necessidade"),
    ("um rascunho", "um rascunho"),
]


def pt(text: str) -> str:
    for original, placeholder in PROTECTED_TERMS.items():
        text = text.replace(original, placeholder)
    for original, replacement in PT_REPLACEMENTS:
        text = text.replace(original, replacement)
    for original, placeholder in PROTECTED_TERMS.items():
        text = text.replace(placeholder, original)
    return text


QUESTIONS = [
    {
        "bloco": "Conhecendo as especies",
        "categoria": "arabica",
        "enunciado": "Qual e o nome cientifico do cafe arabica?",
        "alternativas": [
            "Coffea canephora",
            "Coffea arabica",
            "Coffea liberica",
            "Coffea conilon",
        ],
        "resposta": "B",
        "explicacao": "O arabica pertence a especie Coffea arabica.",
        "conexao": "A Embrapa disponibiliza pesquisas e publicacoes que ajudam a diferenciar especies, cultivares e sistemas cafeeiros no Brasil.",
    },
    {
        "bloco": "Conhecendo as especies",
        "categoria": "canefora",
        "enunciado": "Conilon e robusta pertencem principalmente a qual especie?",
        "alternativas": [
            "Coffea arabica",
            "Coffea canephora",
            "Coffea excelsa",
            "Coffea bourbon",
        ],
        "resposta": "B",
        "explicacao": "Conilon e robusta sao grupos associados a especie Coffea canephora.",
        "conexao": "Tecnologias e estudos sobre conilon e robusta, com destaque para cultivares e manejo, dialogam diretamente com a atuacao da Embrapa Rondonia.",
    },
    {
        "bloco": "Clima, altitude e adaptacao",
        "categoria": "arabica",
        "enunciado": "Em geral, qual cafe e mais associado a regioes de maior altitude e clima mais ameno?",
        "alternativas": [
            "Arabica",
            "Canefora",
            "Ambos somente em baixa altitude",
            "Nenhum dos dois",
        ],
        "resposta": "A",
        "explicacao": "O arabica costuma se adaptar melhor a ambientes mais amenos e altitudes mais elevadas.",
        "conexao": "Publicacoes tecnicas da Embrapa Cafe ajudam a relacionar ambiente, especie, qualidade e planejamento da lavoura.",
    },
    {
        "bloco": "Clima, altitude e adaptacao",
        "categoria": "canefora",
        "enunciado": "Em geral, qual cafe apresenta maior adaptacao a regioes mais quentes?",
        "alternativas": [
            "Arabica",
            "Canefora",
            "Apenas cafes descafeinados",
            "Nenhum",
        ],
        "resposta": "B",
        "explicacao": "O canefora tende a tolerar melhor temperaturas mais elevadas.",
        "conexao": "Pesquisas sobre canefora, irrigacao e manejo em regioes quentes ajudam produtores e tecnicos a tomar decisoes mais ajustadas ao territorio.",
    },
    {
        "bloco": "Conhecendo as especies",
        "categoria": "canefora",
        "enunciado": "O cafe canefora inclui quais grupos muito conhecidos no Brasil?",
        "alternativas": [
            "Bourbon e Catuai",
            "Mundo Novo e Acaia",
            "Conilon e robusta",
            "Typica e Geisha",
        ],
        "resposta": "C",
        "explicacao": "Conilon e robusta sao os grupos mais associados ao canefora.",
        "conexao": "A Embrapa Rondonia possui forte conexao com tecnologias voltadas ao cafe canefora, especialmente cultivares e praticas de manejo.",
    },
    {
        "bloco": "Qualidade, uso e mercado",
        "categoria": "arabica",
        "enunciado": "Qual especie costuma ser mais valorizada em mercados de cafes especiais de bebida fina?",
        "alternativas": [
            "Arabica",
            "Canefora",
            "Liberica",
            "Nenhuma pode ter qualidade",
        ],
        "resposta": "A",
        "explicacao": "O arabica tem forte presenca no mercado de cafes especiais, embora o canefora tambem possa alcancar qualidade elevada com bom manejo.",
        "conexao": "A Embrapa contribui com estudos sobre qualidade, pos-colheita e sistemas de producao que apoiam a valorizacao do cafe brasileiro.",
    },
    {
        "bloco": "Qualidade, uso e mercado",
        "categoria": "canefora",
        "enunciado": "O canefora e importante para quais segmentos?",
        "alternativas": [
            "Apenas cafes ornamentais",
            "Cafe soluvel, blends e espresso",
            "Apenas exportacao de sementes",
            "Nenhum uso comercial importante",
        ],
        "resposta": "B",
        "explicacao": "O canefora e muito usado em blends, cafes soluveis e formulacoes para espresso.",
        "conexao": "Tecnologias sobre canefora, qualidade e processamento ajudam a mostrar a importancia economica desse cafe em diferentes mercados.",
    },
    {
        "bloco": "Conhecendo as especies",
        "categoria": "canefora",
        "enunciado": "Verdadeiro ou falso: canefora nao tem importancia para a cafeicultura brasileira.",
        "alternativas": [
            "Verdadeiro",
            "Falso",
            "",
            "",
        ],
        "resposta": "B",
        "explicacao": "O canefora tem grande importancia economica, produtiva e regional no Brasil.",
        "conexao": "A presenca de cultivares, praticas e publicacoes sobre canefora no acervo da Embrapa reforca sua relevancia para a cafeicultura nacional.",
    },
    {
        "bloco": "Clima, altitude e adaptacao",
        "categoria": "comparacao",
        "enunciado": "Qual fator influencia diretamente a escolha entre arabica e canefora em uma propriedade?",
        "alternativas": [
            "Cor da embalagem",
            "Altitude, clima, solo e disponibilidade de agua",
            "Apenas o nome da fazenda",
            "Tipo de xicara usada",
        ],
        "resposta": "B",
        "explicacao": "A escolha depende de condicoes ambientais e do sistema de producao.",
        "conexao": "Ferramentas, metodologias e publicacoes da Embrapa apoiam decisoes sobre aptidao agricola, ambiente e planejamento produtivo.",
    },
    {
        "bloco": "Clima, altitude e adaptacao",
        "categoria": "canefora",
        "enunciado": "Uma area quente, de baixa altitude e com possibilidade de irrigacao tende a favorecer qual sistema?",
        "alternativas": [
            "Canefora",
            "Arabica de altitude",
            "Cafe selvagem",
            "Nenhum cultivo agricola",
        ],
        "resposta": "A",
        "explicacao": "Muitas regioes produtoras de canefora tem clima quente e utilizam irrigacao como tecnologia importante.",
        "conexao": "Praticas de manejo de irrigacao e estudos sobre adaptacao, como os conduzidos por unidades da Embrapa, podem orientar esse tipo de decisao.",
    },
    {
        "bloco": "Clima, altitude e adaptacao",
        "categoria": "arabica",
        "enunciado": "Uma regiao montanhosa, com clima ameno, tende a ser mais favoravel a qual cafe?",
        "alternativas": [
            "Arabica",
            "Canefora exclusivamente",
            "Cacau",
            "Cha",
        ],
        "resposta": "A",
        "explicacao": "O arabica e tradicionalmente cultivado em regioes mais altas e amenas.",
        "conexao": "A pesquisa agropecuaria ajuda a entender como relevo, clima e especie influenciam produtividade e qualidade da bebida.",
    },
    {
        "bloco": "Sistemas de producao",
        "categoria": "comparacao",
        "enunciado": "Qual pratica e importante para os dois sistemas cafeeiros?",
        "alternativas": [
            "Manejo adequado do solo",
            "Colheita sem nenhum criterio",
            "Ausencia total de adubacao",
            "Plantio em qualquer ambiente",
        ],
        "resposta": "A",
        "explicacao": "Conservacao do solo, nutricao e manejo adequado sao importantes para ambos.",
        "conexao": "A Embrapa desenvolve e difunde praticas sobre fertilidade, conservacao do solo e manejo sustentavel aplicaveis a diferentes sistemas cafeeiros.",
    },
    {
        "bloco": "Sistemas de producao",
        "categoria": "comparacao",
        "enunciado": "O que e um sistema cafeeiro?",
        "alternativas": [
            "Apenas a maquina de moer cafe",
            "O conjunto de especie, ambiente, manejo, tecnologia e finalidade produtiva",
            "Uma marca comercial",
            "Uma receita culinaria",
        ],
        "resposta": "B",
        "explicacao": "Sistema cafeeiro envolve a lavoura como um todo, nao apenas a especie plantada.",
        "conexao": "As solucoes tecnologicas da Embrapa costumam integrar especie, ambiente, manejo, pos-colheita e finalidade produtiva.",
    },
    {
        "bloco": "Conhecendo as especies",
        "categoria": "comparacao",
        "enunciado": "Qual das alternativas compara melhor arabica e canefora?",
        "alternativas": [
            "Sao identicos em clima, manejo e mercado",
            "Sao especies diferentes, com exigencias e usos distintos",
            "Um e cafe e o outro nao",
            "Nenhum e cultivado no Brasil",
        ],
        "resposta": "B",
        "explicacao": "Ambos sao cafes importantes, mas tem caracteristicas agronomicas e comerciais diferentes.",
        "conexao": "O acervo tecnico da Embrapa pode ajudar o jogador a aprofundar as diferencas entre especies, cultivares, ambientes e mercados.",
    },
    {
        "bloco": "Qualidade, uso e mercado",
        "categoria": "comparacao",
        "enunciado": "Qual etapa pode melhorar a qualidade final tanto do arabica quanto do canefora?",
        "alternativas": [
            "Pos-colheita bem conduzida",
            "Misturar impurezas",
            "Secagem descontrolada",
            "Armazenamento umido",
        ],
        "resposta": "A",
        "explicacao": "Colheita, processamento, secagem e armazenamento influenciam fortemente a qualidade.",
        "conexao": "Tecnologias e publicacoes sobre colheita, secagem, processamento e armazenamento conectam o quiz a temas de qualidade trabalhados pela Embrapa.",
    },
    {
        "bloco": "Clima, altitude e adaptacao",
        "categoria": "comparacao",
        "enunciado": "Um produtor quer escolher a especie de cafe para uma area de clima quente e baixa altitude. Qual informacao e mais importante considerar primeiro?",
        "alternativas": [
            "A cor dos frutos na embalagem",
            "A adaptacao da especie ao clima local",
            "O nome comercial do cafe torrado",
            "O tamanho da xicara usada no consumo",
        ],
        "resposta": "B",
        "explicacao": "A escolha entre arabica e canefora deve considerar clima, altitude e condicoes da propriedade.",
        "conexao": "A Embrapa produz conhecimentos e ferramentas que apoiam o planejamento da lavoura conforme ambiente, risco climatico e aptidao da area.",
    },
    {
        "bloco": "Clima, altitude e adaptacao",
        "categoria": "arabica",
        "enunciado": "Em uma propriedade com clima ameno e maior altitude, qual sistema tende a ser mais compativel?",
        "alternativas": [
            "Arabica",
            "Canefora exclusivamente",
            "Nenhum sistema cafeeiro",
            "Apenas cafe soluvel",
        ],
        "resposta": "A",
        "explicacao": "O arabica e geralmente mais associado a regioes de maior altitude e temperaturas mais amenas.",
        "conexao": "Publicacoes tecnicas podem ajudar estudantes e produtores a relacionar clima, altitude, cultivar e qualidade da producao.",
    },
    {
        "bloco": "Clima, altitude e adaptacao",
        "categoria": "canefora",
        "enunciado": "Em regioes quentes, o manejo da agua pode ser decisivo especialmente em qual sistema?",
        "alternativas": [
            "Canefora",
            "Arabica de montanha apenas",
            "Cafe descafeinado",
            "Cafe torrado e moido",
        ],
        "resposta": "A",
        "explicacao": "Em muitas regioes produtoras de canefora, a irrigacao e uma tecnologia importante para estabilidade produtiva.",
        "conexao": "Praticas de manejo de irrigacao, como as relacionadas a pesquisas da Embrapa Cerrados, podem entrar como aprofundamento nesta resposta.",
    },
    {
        "bloco": "Sustentabilidade e desafios",
        "categoria": "comparacao",
        "enunciado": "Qual alternativa representa uma boa decisao para melhorar a sustentabilidade em sistemas cafeeiros?",
        "alternativas": [
            "Manter o solo descoberto o ano inteiro",
            "Usar praticas de conservacao do solo e da agua",
            "Ignorar o clima da regiao",
            "Colher e armazenar sem cuidado",
        ],
        "resposta": "B",
        "explicacao": "Conservacao do solo e da agua ajuda a manter produtividade e reduzir impactos ambientais.",
        "conexao": "A Embrapa desenvolve solucoes para manejo sustentavel, conservacao de recursos naturais e adaptacao dos sistemas produtivos.",
    },
    {
        "bloco": "Sustentabilidade e desafios",
        "categoria": "comparacao",
        "enunciado": "Um tecnico visita uma lavoura e observa erosao no terreno. Qual recomendacao geral faz mais sentido?",
        "alternativas": [
            "Melhorar praticas de conservacao do solo",
            "Aumentar a erosao para drenar mais rapido",
            "Abandonar qualquer manejo",
            "Colher os frutos verdes imediatamente",
        ],
        "resposta": "A",
        "explicacao": "Manejo conservacionista, cobertura do solo e praticas adequadas ajudam a reduzir perdas por erosao.",
        "conexao": "Publicacoes e praticas da Embrapa sobre solo, agua e sustentabilidade podem complementar a explicacao com orientacoes tecnicas.",
    },
    {
        "bloco": "Clima, altitude e adaptacao",
        "categoria": "comparacao",
        "enunciado": "O que pode acontecer quando a especie de cafe e plantada em ambiente pouco adequado?",
        "alternativas": [
            "A lavoura sempre melhora automaticamente",
            "Pode haver queda de desempenho e maior dificuldade de manejo",
            "O cafe deixa de ser uma planta",
            "A altitude deixa de importar",
        ],
        "resposta": "B",
        "explicacao": "Ambiente inadequado pode comprometer produtividade, sanidade e qualidade da lavoura.",
        "conexao": "Metodologias de zoneamento, aptidao e planejamento territorial da Embrapa ajudam a reduzir esse tipo de risco.",
    },
    {
        "bloco": "Qualidade, uso e mercado",
        "categoria": "comparacao",
        "enunciado": "Qual pratica contribui para a qualidade do cafe apos a colheita?",
        "alternativas": [
            "Secagem bem conduzida",
            "Armazenamento em local umido",
            "Mistura com impurezas",
            "Falta de controle no processamento",
        ],
        "resposta": "A",
        "explicacao": "A secagem correta e uma das etapas essenciais para preservar a qualidade do cafe.",
        "conexao": "Tecnologias e publicacoes sobre colheita, secagem e processamento podem ser indicadas ao jogador como caminhos para saber mais.",
    },
    {
        "bloco": "Qualidade, uso e mercado",
        "categoria": "comparacao",
        "enunciado": "Um lote de cafe foi colhido com frutos em diferentes estagios de maturacao. Qual aspecto pode ser afetado?",
        "alternativas": [
            "A qualidade final da bebida",
            "O nome cientifico da planta",
            "A existencia da especie",
            "A altitude da propriedade",
        ],
        "resposta": "A",
        "explicacao": "A uniformidade de maturacao e os cuidados na colheita influenciam a qualidade do produto final.",
        "conexao": "A Embrapa pode aparecer aqui por meio de materiais sobre colheita, processamento e boas praticas para qualidade.",
    },
    {
        "bloco": "Qualidade, uso e mercado",
        "categoria": "canefora",
        "enunciado": "Qual afirmacao e mais adequada sobre qualidade em cafe canefora?",
        "alternativas": [
            "Canefora nunca pode ter qualidade",
            "Canefora pode alcancar boa qualidade com genetica, manejo e pos-colheita adequados",
            "Canefora nao e cafe",
            "Canefora so existe fora do Brasil",
        ],
        "resposta": "B",
        "explicacao": "O canefora tem ganhado reconhecimento quando produzido com boas praticas e controle de qualidade.",
        "conexao": "Cultivares, manejo e pos-colheita do canefora sao temas em que tecnologias e pesquisas da Embrapa podem dar respaldo ao aprendizado.",
    },
    {
        "bloco": "Qualidade, uso e mercado",
        "categoria": "comparacao",
        "enunciado": "Qual alternativa melhor descreve o papel do arabica e do canefora na cafeicultura brasileira?",
        "alternativas": [
            "Apenas o arabica tem importancia",
            "Apenas o canefora tem importancia",
            "Ambos sao importantes, com caracteristicas e mercados distintos",
            "Nenhum e cultivado no Brasil",
        ],
        "resposta": "C",
        "explicacao": "Os dois sistemas contribuem para a producao brasileira, cada um com sua adaptacao, uso e importancia economica.",
        "conexao": "A diversidade de solucoes e publicacoes da Embrapa mostra como diferentes unidades contribuem para a cafeicultura brasileira.",
    },
    {
        "bloco": "Qualidade, uso e mercado",
        "categoria": "canefora",
        "enunciado": "Em um blend de cafe, qual pode ser uma contribuicao comum do canefora?",
        "alternativas": [
            "Aumentar corpo e intensidade",
            "Transformar cafe em cha",
            "Eliminar a necessidade de torra",
            "Impedir o preparo de espresso",
        ],
        "resposta": "A",
        "explicacao": "O canefora e frequentemente usado em blends por caracteristicas como corpo, intensidade e rendimento.",
        "conexao": "Materiais sobre qualidade, processamento e mercado podem ajudar a explicar por que o canefora tem papel relevante em blends e soluvel.",
    },
    {
        "bloco": "Clima, altitude e adaptacao",
        "categoria": "comparacao",
        "enunciado": "Qual fator NAO deve ser ignorado ao planejar uma nova lavoura de cafe?",
        "alternativas": [
            "Zoneamento e aptidao da area",
            "Clima e disponibilidade de agua",
            "Solo e relevo",
            "Apenas o desenho do rotulo",
        ],
        "resposta": "D",
        "explicacao": "O planejamento da lavoura depende de fatores tecnicos, ambientais e economicos, nao de aspectos visuais do produto final.",
        "conexao": "Ferramentas e metodologias associadas a territorio, solos e planejamento rural podem ser conectadas a essa pergunta.",
    },
    {
        "bloco": "Conhecendo as especies",
        "categoria": "comparacao",
        "enunciado": "Um estudante afirma: \"Arabica e canefora sao iguais; muda so o nome\". Qual resposta esta correta?",
        "alternativas": [
            "Verdadeiro, sao a mesma especie",
            "Falso, sao especies diferentes com caracteristicas proprias",
            "Verdadeiro, ambos pertencem ao genero milho",
            "Falso, nenhum deles e cafe",
        ],
        "resposta": "B",
        "explicacao": "Arabica e canefora pertencem ao genero Coffea, mas sao especies diferentes.",
        "conexao": "Publicacoes de introducao a cafeicultura e materiais educativos da Embrapa podem apoiar essa diferenca de forma acessivel.",
    },
    {
        "bloco": "Sustentabilidade e desafios",
        "categoria": "comparacao",
        "enunciado": "Qual desafio e comum aos sistemas cafeeiros diante das mudancas climaticas?",
        "alternativas": [
            "Adaptar cultivares, manejo e uso da agua as novas condicoes",
            "Parar de observar o clima",
            "Plantar sempre a mesma especie em qualquer lugar",
            "Ignorar pesquisa e assistencia tecnica",
        ],
        "resposta": "A",
        "explicacao": "Mudancas no clima exigem planejamento, pesquisa, adaptacao tecnologica e manejo adequado.",
        "conexao": "A Embrapa atua em temas como adaptacao, recursos geneticos, manejo de agua, solos e sistemas produtivos, todos relevantes para esse desafio.",
    },
    {
        "bloco": "Sustentabilidade e desafios",
        "categoria": "comparacao",
        "enunciado": "Qual e a principal mensagem do \"Desafio Cafe Brasil: Arabica ou Canefora?\"",
        "alternativas": [
            "So existe um cafe importante no Brasil",
            "Arabica e canefora sao sistemas diferentes, ambos relevantes para a cafeicultura brasileira",
            "Cafe nao depende de ambiente nem manejo",
            "A qualidade nao pode ser melhorada",
        ],
        "resposta": "B",
        "explicacao": "O quiz mostra que os dois sistemas tem papeis importantes e que conhecimento tecnico ajuda a tomar melhores decisoes.",
        "conexao": "A Conexao Embrapa aparece como convite para aprofundar o aprendizado em tecnologias, publicacoes e solucoes para a cafeicultura.",
    },
]


def set_styles(document: Document) -> None:
    section = document.sections[0]
    section.top_margin = Inches(1)
    section.bottom_margin = Inches(1)
    section.left_margin = Inches(1)
    section.right_margin = Inches(1)
    section.header_distance = Inches(0.492)
    section.footer_distance = Inches(0.492)

    styles = document.styles
    normal = styles["Normal"]
    normal.font.name = "Calibri"
    normal.font.size = Pt(11)
    normal.paragraph_format.space_after = Pt(6)
    normal.paragraph_format.line_spacing = 1.25

    title = styles["Title"]
    title.font.name = "Calibri"
    title.font.size = Pt(24)
    title.font.color.rgb = RGBColor(31, 77, 120)
    title.paragraph_format.space_after = Pt(6)

    for style_name, size, color, before, after in [
        ("Heading 1", 16, RGBColor(46, 116, 181), 18, 10),
        ("Heading 2", 13, RGBColor(46, 116, 181), 14, 7),
        ("Heading 3", 12, RGBColor(31, 77, 120), 10, 5),
    ]:
        style = styles[style_name]
        style.font.name = "Calibri"
        style.font.size = Pt(size)
        style.font.color.rgb = color
        style.paragraph_format.space_before = Pt(before)
        style.paragraph_format.space_after = Pt(after)


def add_label_paragraph(document: Document, label: str, text: str) -> None:
    paragraph = document.add_paragraph()
    run = paragraph.add_run(f"{pt(label)}: ")
    run.bold = True
    paragraph.add_run(pt(text))


def add_question(document: Document, index: int, question: dict) -> None:
    document.add_heading(f"Questão {index}", level=3)
    add_label_paragraph(document, "Bloco", question["bloco"])
    add_label_paragraph(document, "Categoria", question["categoria"])
    add_label_paragraph(document, "Enunciado", question["enunciado"])

    letters = ["A", "B", "C", "D"]
    for letter, alt in zip(letters, question["alternativas"]):
        if alt:
            document.add_paragraph(pt(f"{letter}) {alt}"), style="List Bullet")

    add_label_paragraph(document, "Resposta correta", question["resposta"])
    add_label_paragraph(document, "Explicacao", question["explicacao"])
    add_label_paragraph(document, "Conexao Embrapa", question["conexao"])


def main() -> None:
    document = Document()
    set_styles(document)

    document.add_paragraph("Desafio Café Brasil: Arábica ou Canéfora?", style="Title")
    document.add_paragraph(
        "Roteiro editorial v1.0 - 30 questões com explicação curta e Conexão Embrapa"
    )

    document.add_heading("Conceito", level=1)
    document.add_paragraph(
        pt("Quiz educativo sobre os dois principais sistemas cafeeiros, com linguagem acessivel, brasileira e voltada ao aprendizado. A Conexao Embrapa aparece como ponte de aprofundamento, sem transformar o jogo em catalogo institucional.")
    )

    document.add_heading("Público-alvo", level=1)
    for item in [
        "Principal: estudantes de ensino medio, graduacao, escolas agricolas e cursos tecnicos.",
        "Secundario: produtores, extensionistas, tecnicos agricolas e agentes de ATER.",
        "Terciario: publico geral interessado em cafe, consumo, sustentabilidade e producao brasileira.",
    ]:
        document.add_paragraph(pt(item), style="List Bullet")

    document.add_heading("Formato da pergunta", level=1)
    for item in [
        "Bloco",
        "Categoria",
        "Enunciado",
        "Quatro alternativas",
        "Resposta correta",
        "Explicacao curta",
        "Conexao Embrapa",
    ]:
        document.add_paragraph(pt(item), style="List Bullet")

    current_block = None
    for index, question in enumerate(QUESTIONS, start=1):
        if question["bloco"] != current_block:
            current_block = question["bloco"]
            document.add_heading(pt(current_block), level=2)
        add_question(document, index, question)

    document.add_page_break()
    document.add_heading("Observação editorial", level=1)
    document.add_paragraph(
        pt("As conexoes com a Embrapa foram redigidas como indicacoes gerais de aprofundamento. Na implementacao web, elas podem ser ligadas a publicacoes, tecnologias, cultivares, praticas, softwares ou unidades responsaveis conforme a curadoria final do acervo.")
    )

    document.save(OUTPUT)


if __name__ == "__main__":
    main()
