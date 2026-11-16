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

Dados em `assets/data.json`: 10.000 trajetórias, semente 20261116; 5.000 para seleção e 5.000 para validação. O gráfico de trajetórias exibe 120 realizações distribuídas pela amostra de validação, e os percentis são calculados sobre as 5.000 realizações. Nenhum caminho foi escolhido por ser o mais lucrativo. A média destacada representa a combinação comercial vencedora, não o melhor resultado aleatório.

A comparação comercial e o orçamento-base usam um módulo, sem dívida e Simples desde a abertura. A seção de crédito compara cinco parcelas financiadas separadamente. Esses universos são identificados na página. Não há calibração específica de demanda por instituição, parceria universitária, financiamento aprovado ou oferta comercial ativa.

Referência visual indicada pelo autor: https://cylindratis.github.io/sin/ — Geist, fundos claros/escuros e contraste tipográfico, com identidade UniLockers e azul #349bd5. Logos fornecidas pelo usuário. Imagens conceituais do produto e de aplicações em campus fornecidas pelo usuário; não comprovam instalações ou configuração comercial. Sistema visual documentado em design.md.

O pitch registra a origem de cada trecho em `data-copy-source="apresentação:página"`. A análise financeira anterior foi preservada por solicitação do autor. `assets/pitch.css` e `assets/pitch.js` refinam a composição, a entrada em máscara, a transição de foco do corredor e a proposta de valor expansível. Há suporte a movimento reduzido; as descrições do pitch ficam visíveis sem JavaScript.

Os valores são cenários acadêmicos, condicionais a premissas de demanda e custos. O estudo inclui limitações de enquadramento tributário, importação, contratos e acesso a crédito.

Revisão de 15/11/2026 com a 3ª Avaliação: modelo inteligente de oito portas, honorários contábeis atualizados, locação pura como hipótese, partilhas do Simples sem ISS e comparação de Real/Presumido/híbrido. Cenário principal sem dívida e no Simples. Semente atual: 20261116; resultados anteriores são históricos. Demanda local do segundo módulo usa as matrículas distintas da Unisinos de Porto Alegre e de São Leopoldo.

A abertura risca “livros molhados” e “dor nas costas” com o azul da marca e apresenta o logo, a mensagem e o smart locker azul e cinza com tela branca. O PNG `assets/smart-locker-white-transparent.png` veio da última versão fornecida pelo autor e tem transparência real. Um único logo visível se desloca da abertura ao cabeçalho conforme a rolagem e retorna ao subir. No computador, a luz azul acompanha o cursor; em telas pequenas ou dispositivos de toque, três luzes se deslocam lentamente. Movimento reduzido apresenta a solução imediatamente e interrompe os efeitos contínuos; sem JavaScript, o conteúdo continua disponível.
