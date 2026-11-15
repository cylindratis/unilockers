# UniLockers

Site de apresentação e estudo de viabilidade econômica do projeto acadêmico UniLockers.

## Publicação

Site estático, sem instalação ou build. GitHub Pages: publicar a raiz da branch `main`.

Para prévia local: `python -m http.server 8000` e acessar `http://localhost:8000`.

## Conteúdo

- Problema, proposta de valor, demanda, segmentos de clientes, possibilidade de automação, aspectos locacionais e roadmap, com trechos literais das duas apresentações fornecidas.
- Projeção determinística de 60 meses e comparação de financiamento.
- Monte Carlo com trajetórias, média, faixa central de 90% e distribuição final estimada por kernel gaussiano.
- Comparação das médias de 180 combinações de preço/mix, com destaque na vencedora pela amostra de seleção.
- Planilha e relatório completos em `downloads/`.

Dados em `assets/data.json`: 10.000 trajetórias, semente 20261115; 5.000 para seleção e 5.000 para validação. O gráfico de trajetórias exibe 120 realizações distribuídas pela amostra de validação, e os percentis são calculados sobre as 5.000 realizações. Nenhum caminho foi escolhido por ser o mais lucrativo. A média destacada representa a combinação comercial vencedora, não o melhor resultado aleatório.

A comparação comercial usa um módulo, sem dívida, um ano no lucro real e os seguintes no Simples. A seção de orçamento-base usa 50% de financiamento. Esses universos são identificados na página. Não há calibração específica de demanda por instituição, parceria universitária, financiamento aprovado ou oferta comercial ativa.

Referência visual indicada pelo autor: https://cylindratis.github.io/sin/ — Geist, fundos claros/escuros e contraste tipográfico, com identidade UniLockers e azul #349bd5. Logos fornecidas pelo usuário. Imagens conceituais do produto e de aplicações em campus fornecidas pelo usuário; não comprovam instalações ou configuração comercial. Sistema visual documentado em design.md.

O pitch registra a origem de cada trecho em `data-copy-source="apresentação:página"`. A análise financeira anterior foi preservada por solicitação do autor. `assets/pitch.css` e `assets/pitch.js` refinam a composição, a entrada em máscara, a transição de foco do corredor e a proposta de valor expansível. Há suporte a movimento reduzido; as descrições do pitch ficam visíveis sem JavaScript.

Os valores são cenários acadêmicos, condicionais a premissas de demanda e custos. O estudo inclui limitações de enquadramento tributário, importação, contratos e acesso a crédito.
