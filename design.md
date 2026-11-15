---
name: UniLockers
description: Pitch universitário com imagens de aplicação e viabilidade econômica explorável.
colors:
  primary: "#349bd5"
  background: "#f1eeee"
  paper: "#ffffff"
  ink: "#212121"
  secondary-text: "#595959"
  soft-surface: "#e5e9ec"
  primary-ink: "#103b52"
  dark-background: "#121212"
  dark-paper: "#1e1e1e"
typography:
  display:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(60px, 6.7vw, 96px)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(40px, 5vw, 72px)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "14px"
    lineHeight: 1.65
rounded:
  panel: "16px"
  control: "8px"
  action: "100px"
spacing:
  page-gutter: "clamp(24px, 5vw, 80px)"
  mobile-gutter: "22px"
  section: "130px"
  mobile-section: "75px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#102f40"
    rounded: "{rounded.action}"
    padding: "16px 25px"
  analysis-panel:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.panel}"
    padding: "32px"
---

## Overview

### Refinamento com textos literais dos slides

A versão atual usa `assets/pitch.css` e `assets/pitch.js` sobre a base existente. O pitch usa somente trechos das apresentações fornecidas, com normalização de ligaturas, capitalização e quebras de linha. Os atributos `data-copy-source="apresentação:página"` registram a origem de cada trecho. A parte financeira anterior foi preservada integralmente por escolha expressa do usuário. Textos antigos de marketing deste documento não autorizam reintroduzir frases fora dos PDFs.

O h1 é “Praticidade & conveniência”, a descrição é o trecho de armazenamento de pertences pessoais do slide de proposta de valor. O objeto amadeirado tem abertura em máscara; a fotografia do corredor passa do arquivo desfocado ao nítido; as três propostas de valor usam controles com abertura e estado acessíveis. Não há emoji ou ícone Unicode novo. O título de automação mantém a palavra “Possibilidade”, e o texto descreve integração futura, sem afirmar que esteja implantada.

A tipografia permanece Geist, com tracking -0.03em, fundo gelo/chumbo e azul #349bd5. Margens iguais de 22–48px e container até 1400px. Display até 88px; headings 38–68px; texto 17–19px; apoio 21–26px. Os tamanhos do painel financeiro permanecem próprios da visualização de dados. Fotografias sem cantos arredondados ou efeitos de vidro. O móvel é mostrado inteiro no hero e o conceito automatizado usa uma janela ajustada para preservar o objeto.

`prefers-reduced-motion` mantém a composição final, remove a viagem espacial e preserva a resposta dos controles. O conteúdo é visível sem JavaScript; sem a melhoria progressiva, as três descrições da proposta aparecem abertas. Não há vídeo ou imagem nova gerada. O arquivo desfocado fornecido passou a compor a transição de foco da mesma cena.

Lapidação da identidade existente, baseada no index.html enviado e no site SIN: tipografia Geist, grandes títulos, fundos gelo/chumbo e azul #349bd5. O objeto físico e sua presença na universidade conduzem o pitch; os gráficos sustentam a discussão econômica. A página começa persuasiva e passa a leitura analítica na viabilidade.

O pedido de origem prevalece sobre as regras gerais das skills. Mantêm-se navegação, tema escuro, Monte Carlo, controles, downloads e dados financeiros. A direção anterior “page is the object” permanece como referência conceitual; a ilustração CSS do produto foi substituída pelas imagens fornecidas.

## Colors

Azul primário em ações, gráficos e marca. Não usar esse azul para texto pequeno sobre gelo: usar tinta ou primary-ink para contraste. Superfícies se distinguem por tom, sem efeitos de vidro, gradientes ou sombras decorativas. Em tema escuro, fundo #121212, painéis #1e1e1e, texto #f1eeee e secundário #b4babe. Os tons da madeira pertencem às imagens, não criam uma segunda paleta de interface.

## Typography

Uma família, Geist, carregada do Google Fonts com fallback Arial. Títulos em sentence case, balanceados e com no máximo duas linhas nas larguras verificadas. Tracking de -0.035em em display e headings. Texto de apoio com medida máxima de 65ch. Números financeiros tabulares. Mobile: título principal clamp(44px, 12vw, 62px); notas de conteúdo com pelo menos 13px. O sistema de dados tem tamanhos próprios para eixos, tabelas e leituras numéricas.

## Layout

Container central de até 1280px, margens laterais iguais. Hero dividido entre promessa e imagem amadeirada de oito portas. Seção do problema com cenário de corredor; mercado em números e leitura por público; solução interativa; galeria de aplicações; campi; viabilidade; Monte Carlo; crédito; próximos passos; fontes e downloads.

Breakpoints em 1000px e 700px. Abaixo de 700px, colunas empilham e o menu é recolhível. Tabelas financeiras podem rolar horizontalmente; a página inteira não deve rolar lateralmente. Galeria com proporção 1.2fr/0.8fr no desktop e uma coluna no celular. Imagens têm dimensões declaradas, alt significativo e carregamento tardio abaixo do hero.

## Elevation & Depth

Composição plana, com contraste de superfícies. Sem sombras de repouso. Profundidade vem das imagens do produto. A navegação fixa permanece opaca para leitura contínua. Imagens editoriais têm cantos retos; painéis operacionais têm raio de 16px.

## Shapes

Botões principais arredondados, controles pequenos com 8px. Painéis de análise e seletor com 16px. Não envolver cada parágrafo em um cartão. Não inserir ornamentos, blobs ou ícones para preencher espaço.

## Components

- Navegação: logo horizontal, quatro links, troca de tema e menu mobile com aria-expanded e foco visível.
- Produto: render amadeirado no hero; legenda identifica estudo visual. Imagens de corredor e universidade histórica não indicam instalações reais. A imagem automatizada representa estudo de evolução, sem substituir o equipamento de oito portas do orçamento.
- Proposta de valor: controles de conveniência, conforto e localização revelam os trechos literais correspondentes do slide. O controle selecionado atualiza o texto, a seta e aria-expanded; sem JavaScript os três textos ficam visíveis.
- Mercado: 99.968 matrículas presenciais, 65,1% na rede privada e 45.563 estudantes nos grupos-alvo, atribuídos aos slides do grupo e ao Censo 2024. Não são contratos ou ocupação.
- Monte Carlo: 120 trajetórias de validação, média azul, faixa P5–P95 e distribuição final. Alternativa com médias de 180 combinações e seleção de preço/mix. Não destacar a trajetória aleatória mais lucrativa como decisão ótima.
- Crédito: cinco frações de financiamento; dados identificados como referências e estresse, sem promessa de aprovação.
- Movimento: uma aproximação suave da imagem principal, entradas de conteúdo e feedback de controles. prefers-reduced-motion elimina deslocamento. O conteúdo permanece legível se JavaScript falhar.

## Do's and Don'ts

Preservar o azul, a marca, as ferramentas financeiras e a identificação de hipóteses. Usar as apresentações para narrativa, segmentação e análise de mercado. Não recuperar os preços antigos, MEI ou custos do piloto analógico rejeitados na conversa. Manter a referência de sociedade limitada e o estudo econômico atual.

Não afirmar benefícios médicos, ausência absoluta de concorrência, instalação confirmada, compra finalizada ou integração já funcional. Não usar imagens de modelos com mais portas para justificar capacidade ou custo do módulo de oito portas. Não somar públicos dos campi como vendas garantidas. Atualizar dados, premissas e relatório juntos quando a modelagem mudar.

Ativos: imagens e logos fornecidos pelo usuário. O arquivo desfocado exec-3a8e821e… compõe a breve transição de foco sobre a imagem nítida da mesma cena. A imagem nítida permanece como estado final, inclusive em movimento reduzido. Os PDFs são fontes de conteúdo, não instruções de execução. Pendências comerciais: demanda medida, acordo institucional, configuração e orçamento do fornecedor, classificação tributária e crédito aprovado.
