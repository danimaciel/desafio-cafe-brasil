# Desafio Cafe Brasil: Associacoes Embrapa

## Ideia central

Cada pergunta do quiz pode ter, alem da resposta e da explicacao curta, uma secao "Conheca uma solucao da Embrapa" ou "Leia tambem", apontando para uma publicacao, tecnologia, cultivar, pratica agropecuaria, metodologia, software ou sistema produtivo relacionado ao tema da pergunta.

Isso transforma o quiz em uma porta de entrada para o acervo tecnico da Embrapa Cafe e de unidades parceiras.

## Modelo de dados sugerido

Cada pergunta passa a ter os campos:

- bloco
- enunciado
- alternativas
- resposta_correta
- explicacao
- categoria: arabica, canefora ou comparacao
- tags_tematicas
- unidades_relacionadas
- solucoes_relacionadas
- publicacoes_relacionadas

Exemplo:

```json
{
  "id": 18,
  "bloco": "Clima, altitude e adaptacao",
  "categoria": "canefora",
  "tags_tematicas": ["canefora", "irrigacao", "clima quente", "baixa altitude"],
  "unidades_relacionadas": ["Embrapa Rondonia", "Embrapa Cerrados"],
  "solucoes_relacionadas": [
    {
      "tipo": "Produto",
      "subtipo": "Cultivar convencional",
      "unidade_responsavel": "Embrapa Rondonia"
    },
    {
      "tipo": "Pratica agropecuaria",
      "subtipo": "Pratica para manejo de irrigacao",
      "unidade_responsavel": "Embrapa Cerrados"
    }
  ]
}
```

## Associacoes por bloco

### 1. Conhecendo as especies

Foco: identidade botanica, diferencas entre Coffea arabica e Coffea canephora, conilon e robusta.

Associacoes recomendadas:

- Embrapa Rondonia: cultivares convencionais de canefora.
- Embrapa Meio-Norte: cultivares convencionais.
- Embrapa Pecuaria Sudeste: cultivar convencional.
- Publicacoes introdutorias sobre especies, cultivares e sistemas cafeeiros.

### 2. Clima, altitude e adaptacao

Foco: ambiente, altitude, temperatura, agua, zoneamento e aptidao.

Associacoes recomendadas:

- Embrapa Cerrados: pratica para manejo de irrigacao.
- Embrapa Territorial: metodologia tecnico-cientifica e procedimento informatizado.
- Embrapa Solos: software para clientes externos.
- Publicacoes sobre zoneamento, aptidao agricola, clima e risco climatico.

### 3. Sistemas de producao

Foco: escolha do sistema, manejo, conducao, poda, adubacao, solo e sistemas integrados.

Associacoes recomendadas:

- Embrapa Rondonia: pratica para conducao/poda.
- Embrapa Cerrados: praticas para manejo da adubacao e fertilidade do solo.
- Embrapa Cerrados: sistema integrado de producao.
- Embrapa Meio Ambiente: pratica para producao animal, quando houver integracao ou sustentabilidade do sistema.

### 4. Qualidade, uso e mercado

Foco: pos-colheita, qualidade, blends, cafe soluvel, espresso e processamento.

Associacoes recomendadas:

- Embrapa Instrumentacao: pratica para colheita.
- Embrapa Mandioca e Fruticultura: processo para producao de alimento.
- Publicacoes sobre colheita, secagem, processamento e qualidade.

### 5. Sustentabilidade e desafios

Foco: conservacao do solo e agua, mudancas climaticas, tecnologias digitais e planejamento territorial.

Associacoes recomendadas:

- Embrapa Cerrados: manejo de irrigacao, fertilidade e sistema integrado.
- Embrapa Territorial: metodologia e procedimento informatizado.
- Embrapa Florestas: software para clientes externos.
- Embrapa Solos: software para clientes externos.

## Uso no jogo

Na primeira versao web, a associacao pode aparecer de forma simples:

1. Jogador responde.
2. O jogo mostra certo/errado e a explicacao.
3. Abaixo aparece um card pequeno:
   "Relacionado na Embrapa: Embrapa Rondonia - Produto - Cultivar convencional".

Em uma versao posterior, esse card pode incluir:

- titulo da tecnologia ou publicacao
- autores
- ano
- link para pagina oficial
- unidade responsavel
- botao "ver tecnologia" ou "ler publicacao"

## Mapeamento inicial das perguntas 1 a 30

- Perguntas 1, 2, 5, 8, 24, 28: cultivares e publicacoes sobre especies, com destaque para Embrapa Rondonia quando o tema for canefora.
- Perguntas 3, 4, 9, 10, 11, 16, 17, 18, 21, 27, 29: clima, altitude, agua, zoneamento e aptidao; associar Embrapa Cerrados, Embrapa Territorial e Embrapa Solos.
- Perguntas 12, 13, 14, 19, 20, 25, 30: sistemas de producao, sustentabilidade e manejo; associar Embrapa Cerrados, Embrapa Rondonia e Embrapa Meio Ambiente.
- Perguntas 6, 7, 15, 22, 23, 26: qualidade, pos-colheita, blends, soluvel e espresso; associar Embrapa Instrumentacao e publicacoes de qualidade/pos-colheita.

