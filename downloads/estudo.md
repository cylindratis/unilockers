# UNILOCKERS — REVISÃO COM TARIFAS ATÉ R$ 15/HORA

**Referência: 15/11/2026. Calendário ilustrativo: janeiro de 2027 a dezembro de 2031.**

Esta versão incorpora as anotações do grupo, compara preços e distribuição das oito portas, simula cinco participações de financiamento e avalia a sequência lucro real → Simples Nacional. Os resultados anteriores não devem ser combinados com os desta revisão: custos, horários, demanda e preços mudaram.

## 1. Decisão que o modelo permite examinar

A melhor combinação na grade de maior valor presente esperado foi **R$ 15/hora, R$ 300/mês e quatro portas mensais com quatro temporárias**. Foram testadas tarifas de R$ 5, R$ 8, R$ 10, R$ 12 e R$ 15/hora, mensalidades de R$ 120, R$ 180, R$ 240 e R$ 300 e as nove divisões possíveis das portas. O resultado é o melhor entre as 180 combinações avaliadas, e não uma prova de preço ótimo fora da grade.

A disposição a pagar R$ 15/hora foi tratada como teto autorizado para teste, não como contratação observada. A demanda diminui quando o preço sobe, por uma elasticidade ainda estimada. Mesmo que o público possua renda maior, sua adesão nesse preço precisa ser validada.

No cenário-base de um módulo, início no lucro real, migração ao Simples no segundo ano e 50% financiado:

- Implantação estimada: **R$ 9.394,00**.
- Reserva de giro: **R$ 4.830,00**.
- Aporte total antes de encargos financeiros: **R$ 14.224,00**.
- Recursos próprios: **R$ 7.112,00**.
- Principal do empréstimo, incluindo encargos iniciais: **R$ 7.767,35**.
- Receita do primeiro ano: **R$ 50.167,05**.
- Caixa do primeiro ano após tributos e parcelas: **R$ 11.699,93**.
- VPL do fluxo disponível após dívida, deduzido o aporte próprio: **R$ 108.192,85**.

Esse VPL usa retorno exigido de 12% real ao ano, combinado com inflação de 4% para formar desconto nominal de 16,48% ao ano. Os fluxos são nominais. O caixa fica retido na empresa e não representa dividendos efetivamente pagos ao sócio. Não há venda final do equipamento nem liberação do giro para atingir a meta de cinco anos.

### Recuperação do investimento e volume mínimo

Sem dívida, o investimento integral de R$ 14.224 é recuperado no **mês 14**, tanto no payback simples quanto no descontado. Com 50% financiado, o aporte próprio de R$ 7.112 é recuperado no **mês 8 pelo critério simples e no mês 9 pelo descontado**. O prazo menor do capital próprio não quita antecipadamente a dívida: o contrato continua sendo pago até o mês 60. Os indicadores são o primeiro mês de saldo acumulado não negativo, com fluxos retidos na empresa, e não datas de dividendos pagos.

| Participação financiada | Payback simples do aporte próprio | Payback descontado do aporte próprio |
|---:|---:|---:|
| 100,00% | Não se aplica | Não se aplica |
| 75,00% | 6 meses | 6 meses |
| 50,00% | 8 meses | 9 meses |
| 10,00% | 11 meses | 14 meses |
| 0,00% | 14 meses | 14 meses |

Para calcular um limite de procura sem impor tarifa mínima, mantiveram-se R$ 15/h, R$ 300/mês, mix 4/4, 50% financiado e a sequência real → Simples. Reduziu-se proporcionalmente a procura de ambas as modalidades, preservando sazonalidade, rampa e crescimento:

- **Retorno de 12% real recuperado até o mês 60:** o limite de VPL zero ocorre com 32,37% da procura-base. No primeiro ano, isso representa média de 26,32 sessões de três horas por mês e 0,61 mensalista ocupado por mês, com receita anual de R$ 16.402,90. Contudo, essa trajetória apresenta falta máxima de caixa de R$ 4.440,27.
- **Retorno no prazo e caixa não negativo com a reserva inicial prevista:** exige cerca de 44,24% da procura-base, ou 35,97 sessões/mês e 0,83 mensalista/mês no primeiro ano. A receita anual correspondente é R$ 22.410,24. Esse é um limite matemático sem folga adicional, não uma meta comercial prudente.

Os mensalistas fracionários representam médias de ocupação ao longo dos meses. Essas combinações não são mínimos independentes: dependem dos dois serviços contribuírem conjuntamente e da evolução prevista após o primeiro ano. Um saldo final positivo pode coexistir com falta de caixa anterior, daí a diferença entre os dois limites. No cenário-base completo, as médias do primeiro ano são 81,02 sessões/mês e 1,78 mensalista/mês.

## 2. Premissas incorporadas e pendências

| Tema | Tratamento nesta revisão |
|---|---|
| Produto | Armário de oito portas documentado no PDF lockerss.pdf fornecido pelo grupo. O material menciona API/SDK e acesso remoto, mas a inclusão desses recursos na configuração de oito portas e no preço exibido depende de confirmação. |
| Compra | R$ 1.700 brutos como referência; preço varia de R$ 1.500 a R$ 2.500 no Monte Carlo. Não há cotação firme de compra. |
| Horário | Segunda a sábado, 7h30–21h30: 14 horas diárias. |
| Calendário | Contagem real dos dias de segunda a sábado de 2027–2031. Feriados e bloqueios institucionais não informados; a sazonalidade permanece estimada. |
| Energia, internet, instalação e adequações | Custo direto zero para a empresa, conforme cessão informada. |
| Segurança | Ambiente interno e monitorado por câmera. |
| Repasse à instituição | Indefinido. Hipótese-base de 10% da receita; triangular entre 0%, 10% e 20% no Monte Carlo. Não se presume gratuidade definitiva. |
| Contrato | Prazo e renovação indefinidos. A projeção de cinco anos pressupõe continuidade; foi acrescentado teste de interrupção antecipada. |
| Divulgação | Desembolso zero; realizada pelo sócio. |
| Retiradas | Zero; resultado reinvestido. Não se atribuiu salário fictício ao caixa. O resultado depende de trabalho inicialmente não remunerado. |
| Limpeza e manutenção | Terceirizadas; hipóteses de R$ 200 e R$ 80 por módulo/mês. Não há contratos ou cotações confirmados. |
| Peças e reparos | Reposição extraordinária de R$ 800 por módulo no mês 37, além de manutenção rotineira e risco de incidentes. |
| Seguro | Prêmio contratado zero. Mantém-se uma perda eventual de R$ 1.000, com frequência assumida de 0,10/ano por módulo. |
| Forma jurídica e local | Sociedade limitada com um único sócio, em Porto Alegre. |
| CNAE | 5211-7/02, conforme o trabalho. O código futuro 7729-2/02 para eventos não foi usado para substituir a atividade principal. |
| Depreciação | Física gerencial de 5% a.a.; integração amortizada em 60 meses por hipótese. Aceitação fiscal e vidas úteis precisam de validação contábil. |

O produto indicado é [este anúncio do Alibaba](https://www.alibaba.com/product-detail/8-Door-Smart-Lockers-for-Gyms_1601673821852.html), agora documentado no PDF **lockerss.pdf**, de 12 páginas, enviado pelo grupo. Trata-se de uma captura comercial, não de uma proposta individual aceita pelo fornecedor.

### Complemento: informações extraídas do PDF

| Informação | Evidência no documento e tratamento |
|---|---|
| Configuração principal | Oito portas e dimensões externas de 1.800 × 850 × 460 mm, nas páginas 1, 2 e 4. Dimensões internas úteis não informadas. |
| Preço exibido | R$ 1.475,09 por peça para 1–99 peças; R$ 1.341,39 a partir de 100 peças, na página 1. Comprar duas unidades permanece na mesma faixa anunciada. |
| Condição de entrega | A página 1 diz que frete e prazo de entrega serão negociados. O preço exibido não estabelece, por si só, condição FOB nem custo entregue no Brasil. |
| Estrutura | Metal/aço laminado a frio, fechadura eletrônica, montagem no piso, fechamento manual e chapa de 0,6–1,2 mm na tabela da página 2. O material promocional também menciona aço galvanizado e pintura a pó; especificação final precisa constar da proposta. |
| Acesso | O material menciona senha/PIN, QR, RFID/cartões, biometria e controle remoto por aplicativo. São capacidades/opções anunciadas, não comprovação de que todas estejam incluídas no modelo de oito portas. |
| Integração | A FAQ da página 10 afirma disponibilização de documentação API/SDK para clientes de projeto. Não informa preço de licença, acesso à API, hospedagem ou integração com pagamentos brasileiros. |
| Idioma | FAQ da página 10: inglês e chinês como padrão; outros idiomas por customização. Português e seu custo precisam de confirmação. |
| Garantia | FAQ da página 11: um ano para o hardware principal, suporte técnico de software sem prazo final anunciado e reposição gratuita de peças eletrônicas com falha em uso normal. Frete das peças, instalação local e prazo de atendimento não estão definidos. |
| Embalagem | Ilustrações de caixas/reforços de madeira. Peso e dimensões embaladas não são apresentados como ficha numérica suficiente para cotar transporte. |

As páginas 4–7 alternam o modelo de oito portas com ilustrações e FAQ de **12 portas**, inclusive reconhecimento facial. Portanto, a configuração comercial deve identificar explicitamente controladora, fechaduras, conectividade, acesso à API e licenças incluídas. O PDF não demonstra o fluxo completo de pagamento, liberação, expiração de acesso e gestão simultânea de mensalistas e usuários por hora.

**Efeito no orçamento:** foi mantida a referência de compra de R$ 1.700 e a faixa de R$ 1.500–2.500 solicitadas pelo grupo. O anúncio dá suporte à ordem de grandeza, mas não substitui cotação com configuração e condição de entrega. A provisão de R$ 1.200 para integração também permanece: a existência anunciada de uma API reduz uma incerteza técnica, sem demonstrar custo de implantação igual a zero. Nenhum novo cálculo foi atribuído a funcionalidades ainda não confirmadas.

Quanto à responsabilidade pelos objetos, a simulação segue sem seguro contratado, mas não transforma a cláusula de isenção em risco jurídico igual a zero. A eventual responsabilidade por defeito do serviço não é automaticamente afastada por essa cláusula. [CDC, especialmente arts. 14, 25 e 51, na publicação oficial do Ministério da Justiça](https://www.gov.br/mj/pt-br/assuntos/seus-direitos/consumidor/defesadoconsumidor/Biblioteca/manuais-upload/a-defesa-do-consumidor-na-argentina-e-no-peru-2007.pdf).

## 3. Investimento e custos operacionais

| Implantação | Cenário-base |
|---|---:|
| Armário bruto FOB | R$ 1.700 |
| Frete e seguro internacional estimados | R$ 1.500 |
| Provisão agregada de importação: 70% dos dois itens anteriores | R$ 2.240 |
| Desembaraço e transporte local | R$ 900 |
| Integração digital | R$ 1.200 |
| Formalização, registros e implantação | R$ 1.000 |
| Instalação cedida | R$ 0 |
| Contingência de 10% | R$ 854 |
| **Total** | **R$ 9.394** |

A provisão de importação não é uma alíquota fiscal validada. Deve ser substituída pelo custo completo apurado com o produto, sua classificação fiscal e a operação efetiva. O valor de integração é mantido porque, embora o PDF mencione API/SDK, não comprova uma solução completa já incluída de reservas, acesso e pagamentos.

Custos fixos mensais, a preços iniciais:

| Custo | Simples | Lucro real |
|---|---:|---:|
| Limpeza terceirizada | R$ 200 | R$ 200 |
| Manutenção terceirizada | R$ 80 | R$ 80 |
| Plataforma | R$ 80 | R$ 80 |
| Administração | R$ 50 | R$ 50 |
| Contabilidade estimada | R$ 200 | R$ 1.200 |
| **Total fixo mensal** | **R$ 610** | **R$ 1.610** |

Os preços contábeis são estimativas por regime. A referência para o lucro presumido foi R$ 700/mês, registrada na planilha, embora esse regime não integre a estratégia solicitada. A limitada unipessoal não deve receber automaticamente uma mensalidade de MEI. Como referência comercial, o fornecedor Contabilix divulga planos para serviços no Simples a partir de R$ 136, sujeitos à atividade e ao plano; a Contabilidade Zen indica faixa de R$ 150–300 para PJ simples sem funcionários e maior complexidade no lucro real. A estimativa de R$ 1.200 para o real não é uma proposta obtida para a UniLockers. [Tabela Contabilix](https://www.contabilix.com.br/wp-content/uploads/2026/04/Planos.pdf), [referência de mensalidades](https://www.contabilidadezen.com.br/blog/quanto-custa-mensalidade-contabilidade-online-2026/).

Além dos fixos, entram 3% de meios de pagamento, o repasse institucional, R$ 0,75 por sessão, tributos, perdas e encargos de crédito. A reserva inicial corresponde a três meses dos fixos do regime de partida: R$ 4.830 no real e R$ 1.830 no Simples. Ao migrar, a reserva não foi liberada como distribuição ao sócio.

## 4. Demanda: uso dos dados da segunda avaliação

O trabalho informa 11.969 matrículas presenciais na PUCRS e participação de 34,4% de estudantes com renda domiciliar per capita acima de dois salários mínimos na rede privada da RMPA. Foi usado um campus desse porte como referência de escala, sem pressupor parceria com a PUCRS. Aplicar a proporção regional a esse campus é uma aproximação, não um resultado do levantamento por instituição.

O modelo parte de aproximadamente 4.117 estudantes no segmento de renda e supõe que o ponto alcance 20% deles, ou **823,5 pessoas**. Daí decorrem duas hipóteses de conversão:

- 0,5% de mensalistas ao preço de referência de R$ 180/mês;
- 6% de usuários temporários, com quatro sessões mensais por usuário, ao preço de referência de R$ 8/hora.

Esses percentuais não foram estimados no arquivo: são hipóteses que convertem mercado potencial em procura operacional. No Monte Carlo, alcance varia entre 10% e 35%, conversão mensal entre 0,2% e 0,9%, conversão temporária entre 3% e 10% e frequência entre duas e seis sessões por mês.

As procuras reagem ao preço pela expressão `procura = procura de referência × (preço / referência)^(−elasticidade)`. A elasticidade tem distribuição triangular de 0,3 a 1,8, com moda 0,9. Assim, cobrar R$ 15/hora reduz a quantidade procurada em relação a R$ 8/hora. Não há evidência empírica suficiente para afirmar que essa faixa de elasticidade descreve o público real. Também não foi estimada a migração de usuários entre mensalidade e uso temporário quando os preços relativos mudam.

Sessões padrão duram três horas, com quinze minutos de intervalo. Nas 14 horas de acesso cabem quatro janelas por porta/dia. As quatro portas temporárias oferecem 16 sessões/dia, antes de indisponibilidade. A cobrança neste exercício é a tarifa horária multiplicada por três: a sessão custa R$ 45 no preço de R$ 15/hora. Não há tarifa diária ou desconto automático por permanência prolongada.

O mix fica fixo ao longo do estudo e as portas mensais não são revendidas por hora durante contratos ativos. Pedidos por janela seguem Poisson e são limitados à capacidade. A disponibilidade é de 98%. Mantiveram-se sazonalidade acadêmica estimada, rampa de 50% a 100% em seis meses e crescimento real de procura de 3% ao ano.

## 5. Comparação comercial

Cada linha mostra a melhor mensalidade e divisão encontradas para a tarifa indicada. A escolha foi feita em 5.000 trajetórias e avaliada em outras 5.000, mantendo o cenário de começar no real e migrar após um ano. Nesta tabela, não há dívida, para comparar o negócio antes do financiamento.

| Tarifa/hora | Mensalidade | Portas mensais/temporárias | VPL médio na validação | VPL ≥ 0 e sem insuficiência de caixa |
|---:|---:|---:|---:|---:|
| R$ 5,00 | R$ 300,00 | 2/6 | R$ 95.268,89 | 96,88% |
| R$ 8,00 | R$ 300,00 | 3/5 | R$ 106.792,54 | 98,24% |
| R$ 10,00 | R$ 300,00 | 3/5 | R$ 110.841,98 | 98,32% |
| R$ 12,00 | R$ 300,00 | 3/5 | R$ 113.648,57 | 98,00% |
| R$ 15,00 | R$ 300,00 | 4/4 | R$ 117.346,08 | 97,58% |

R$ 15/hora maximiza o VPL médio da grade. Preços intermediários apresentaram indicadores de caixa ligeiramente melhores em algumas comparações. A diferença entre R$ 12 e R$ 15 não permite dispensar o teste comercial: a aceitação efetiva pode alterar a ordem. Não há recomendação de limitar o preço ao mínimo de equilíbrio calculado anteriormente.

## 6. Financiamento de 100%, 75%, 50%, 10% e 0%

A referência pública da Finep para micro e pequenas empresas é de até TR + 6,068% a.a., até 96 meses totais e até 24 meses de carência. Isso não confirma aprovação, valor mínimo operacional, garantias ou financiamento de todos os gastos do orçamento. [Finep — crédito por agentes](https://www.finep.gov.br/credito-operado-por-agentes).

Adotaram-se 60 meses SAC, com 12 meses de carência apenas do principal e juros pagos desde o início. A TR de referência de 0,1693% ao mês, divulgada pelo BCB para um período de novembro de 2026, combinada com a remuneração anual, corresponde a aproximadamente **8,24% a.a.**, antes dos demais encargos. Essa repetição da TR é uma referência de cálculo, não previsão da taxa futura; no Monte Carlo ela varia. [BCB, Comunicado 46.259](https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?numero=46259&tipo=Comunicado).

A tabela pública do BRDE informa cadastro de R$ 500 para micro e pequenas empresas, análise de 0,4% e fiscalização de 0,4% a 1,5%, além de outras tarifas conforme o caso. Para o exercício foram usados R$ 500 iniciais, 2% variáveis iniciais e R$ 500 de renovação anual enquanto houver dívida. Dos 2%, parte é reserva estimada para garantias e encargos, não uma tarifa única publicada. Reduções do Jovem Empreendedor não foram presumidas. [Tarifas do BRDE](https://www.brde.com.br/area-do-cliente/tarifas/).

| Aporte financiado | Recursos próprios, base | Dívida com encargos, base | Juros no primeiro mês, base | Primeira parcela com amortização, base | Custo efetivo anual estimado | Insuficiência de caixa na validação |
|---:|---:|---:|---:|---:|---:|---:|
| 100,00% | R$ 0,00 | R$ 15.024,49 | R$ 99,50 | R$ 412,51 | 15,32% | 4,36% |
| 75,00% | R$ 3.556,00 | R$ 11.395,92 | R$ 75,47 | R$ 312,89 | 17,35% | 3,90% |
| 50,00% | R$ 7.112,00 | R$ 7.767,35 | R$ 51,44 | R$ 213,26 | 21,34% | 3,58% |
| 10,00% | R$ 12.801,60 | R$ 1.961,63 | R$ 12,99 | R$ 53,86 | 64,85% | 3,22% |
| 0,00% | R$ 14.224,00 | R$ 0,00 | R$ 0,00 | R$ 0,00 | Não se aplica | 2,42% |

O percentual financiado incide sobre o aporte antes de encargos. O principal inclui os custos iniciais financiados, por isso pode exceder a parcela correspondente do aporte. No caso de 100%, o aporte próprio inicial é zero; não se calcula uma TIR ou payback do capital próprio sobre denominador zero. Ainda pode haver necessidade de aporte adicional se faltar caixa.

O custo efetivo anual estimado foi calculado pela taxa interna dos fluxos líquidos do empréstimo: entrada disponível para investir e pagamentos de juros, principal e tarifas consideradas. Ele não é um CET bancário contratado. Como há custos fixos de cadastro e renovação, financiar um valor pequeno pode ter custo percentual elevado, mesmo usando a mesma taxa básica.

Financiar 100% de compra, giro e encargos é uma hipótese solicitada para comparação. A elegibilidade desse pacote não foi confirmada. O BRDE Jovem Empreendedor admite equipamentos importados e o perfil de idade informado pelo grupo, mas limita o giro a 20% da receita anterior e remete a taxa final à análise de crédito. Sem receita anterior, não se deve pressupor financiamento do giro nessa linha. [BRDE Jovem Empreendedor](https://www.brde.com.br/linha-financiamento/jovem-empreendedor/).

Não foi encontrado CET individual aprovado para a UniLockers. O modelo entrega taxa, indexador, cronograma e encargos identificados; não os apresenta como proposta bancária. Fundos garantidores, garantias exigidas e eventuais seguros prestamistas continuam sujeitos à proposta do agente.

### Adequação das instituições à fase atual

| Instituição e caminho | Aplicação à UniLockers sem CNPJ e sem receita |
|---|---|
| BRDE Jovem Empreendedor | O perfil de 18–29 anos e a previsão de equipamentos importados tornam a linha pertinente à consulta inicial. Aprovação, garantia, ticket mínimo e taxa precisam de análise. O giro vinculado à receita anterior não deve ser presumido disponível. |
| Finep por agentes, incluindo BRDE/Badesul | Exige enquadramento em projeto apoiável de inovação e análise do agente. A taxa pública usada na simulação não demonstra que um pedido de cerca de R$ 14 mil seria contratado. Comprar um armário inteligente pronto não comprova, sozinho, mérito de inovação. |
| Badesul: Inovacred e fundos para startups | O Badesul divulga apoio à inovação e investimento por fundos. Não foi confirmada contratação de dívida para esse orçamento, empresa pré-operacional e equipamento. Fundos envolvem participação no negócio e seleção por gestores. |
| BNDES Microcrédito | Alternativa a avaliar com operador local. Taxa, prazo, garantia e aceitação da operação específica são definidos pelo agente. O teto foi usado apenas como estresse. |
| BNDES Finame | A modalidade ordinária atende máquinas e equipamentos nacionais credenciados. Não foi usada para presumir financiamento do módulo chinês indicado. |

Referências: [BRDE Jovem Empreendedor](https://www.brde.com.br/linha-financiamento/jovem-empreendedor/), [Finep por agentes](https://www.finep.gov.br/credito-operado-por-agentes), [Badesul Inovacred](https://www.badesul.com.br/empresa/inovacred-), [Badesul fundos para startups](https://www.badesul.com.br/inovacao/fundos-invest-startups), [BNDES Finame](https://www.bndes.gov.br/wps/portal/site/home/financiamento/produto/bndes-finame).

Para o piloto, a prioridade de consulta é o BRDE Jovem Empreendedor e operadores de microcrédito, comparando custo efetivo e garantias com o uso de recursos próprios. A Finep e o Badesul ficam como alternativas condicionadas à estruturação e ao enquadramento do projeto. Nenhuma destas linhas foi tratada como dinheiro já disponível, nem foi enviado pedido de crédito em nome do grupo.

### Crédito caro: teste de estresse

O BNDES divulga teto de juros de até 4% ao mês para microcrédito. Foi simulado esse teto, com prazo hipotético de 36 meses SAC, sem carência, para medir o risco de contratar crédito caro. O prazo não é uma oferta confirmada, e as tarifas foram mantidas apenas para comparação com a estrutura anterior. [BNDES Microcrédito](https://www.bndes.gov.br/wps/portal/site/home/financiamento/produto/bndes-microcredito-empreendedor).

| Participação financiada | Probabilidade condicional de insuficiência de caixa |
|---:|---:|
| 100,00% | 32,32% |
| 75,00% | 21,92% |
| 50,00% | 14,02% |
| 10,00% | 4,30% |
| 0,00% | 2,42% |

O resultado mostra que a taxa e o cronograma podem ser mais importantes que o simples percentual financiado. Um empréstimo com VPL final positivo pode exigir dinheiro adicional nos primeiros meses. A simulação continua após a falta de caixa; esses caminhos não podem ser tratados como operação viável sem fonte adicional de liquidez.

## 7. Quando sair do lucro real

A comparação usa 50% de financiamento, os mesmos preços e o mesmo conjunto de trajetórias. Cada estratégia é escolhida antes de conhecer as realizações futuras.

| Estratégia | VPL médio na validação | Tributos médios em cinco anos | Insuficiência de caixa |
|---|---:|---:|---:|
| Simples desde a abertura | R$ 139.487,42 | R$ 20.544,90 | 0,00% |
| Real por 1 ano(s); Simples no ano 2 | R$ 116.864,73 | R$ 29.529,77 | 3,58% |
| Real por 2 ano(s); Simples no ano 3 | R$ 97.452,42 | R$ 41.137,86 | 6,78% |
| Real por 3 ano(s); Simples no ano 4 | R$ 79.762,06 | R$ 53.786,51 | 8,12% |
| Real por 4 ano(s); Simples no ano 5 | R$ 63.648,34 | R$ 67.543,74 | 8,62% |
| Real por cinco anos | R$ 48.941,97 | R$ 82.557,44 | 8,80% |

**Dentro da sequência de começar no real, a melhor migração testada foi no início do segundo ano. Na comparação completa, começar no Simples foi melhor.** O lucro real não ganhou apenas porque há investimento inicial: a compra dos bens não é despesa integral imediata, a compensação é limitada e a contabilidade custa mais.

O modelo apura IRPJ/CSLL trimestralmente, com pagamento simplificado no encerramento do trimestre. Usa IRPJ de 15%, adicional de 10% acima de R$ 60 mil de base trimestral e CSLL de 9%, sob bases iguais por simplificação. Controla prejuízos anteriores e limita sua utilização a 30% do lucro positivo ajustado. A soma compensada no cenário-base foi de **R$ 1.203,51**, dedução da base tributável, não dinheiro devolvido ao negócio. O saldo não vira abatimento do DAS quando ocorre a migração. [Receita Federal — perguntas e respostas PJ](https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/publicacoes/perguntas-e-respostas/ecf/perguntas-e-respostas-da-pessoa-juridica-2025.pdf).

O Simples usa a tabela do Anexo III e RBT12, com anualização nos primeiros meses. É uma hipótese de enquadramento do serviço indicado no trabalho, ainda sujeita a confirmação. [LC 123 e tabelas](https://legis.senado.gov.br/norma/572878/publicacao/34621013).

### Limite tributário material desta projeção

O horizonte 2027–2031 atravessa a transição da tributação do consumo. Para evitar tratar as antigas regras de PIS/Cofins/ISS como certeza por cinco anos, foi usada no lucro real uma **carga efetiva líquida sobre consumo de 15% da receita**, variando entre 12% e 20% no Monte Carlo. Esse percentual representa conjuntamente a incerteza de CBS/IBS/ISS e créditos; não é uma alíquota legal apurada para a UniLockers. A escolha precisa ser revisada com classificação, contratos e regras vigentes. Portanto, a data de migração é a melhor das alternativas modeladas, não uma conclusão tributária definitiva. [Calendário de transição da Receita Federal](https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/reforma-tributaria-do-consumo/entenda/entenda-a-reforma-tributaria-do-consumo).

A depreciação física de 5% a.a. atende à orientação gerencial do grupo. Foi usada também como hipótese da apuração, sem afirmar sua aceitação fiscal automática. Formalização é tratada como despesa fiscal inicial; o caixa desse gasto já saiu no investimento e não é desembolsado uma segunda vez. Capital de giro não foi deduzido como despesa. Integração foi amortizada em 60 meses, hipótese a validar.

Créditos sobre importação e aquisição de ativos não foram apurados individualmente: o orçamento inicial não atribui uma recuperação específica por regime. A carga líquida de consumo é um parâmetro agregado e não substitui essa apuração. A vantagem do Simples nesta comparação é influenciada pela diferença estimada de honorários e de carga líquida; não deve ser generalizada para qualquer empresa. Uma proposta contábil e a tributação efetiva da importação podem mudar essa comparação.

As opções de regime dependem das janelas e requisitos legais. O modelo testa marcos anuais de planejamento, não presume liberdade para migrar em qualquer mês nem autorização para optar depois do prazo. Não há distribuição de lucro, retirada ou remuneração do sócio no fluxo, conforme orientação recebida.

## 8. Fluxo anual do cenário-base

| Ano | Receita bruta | Tributos | Parcelas | Caixa após dívida | Caixa retido ao final |
|---:|---:|---:|---:|---:|---:|
| 1 | R$ 50.167,05 | R$ 10.678,92 | R$ 617,28 | R$ 11.699,93 | R$ 16.529,93 |
| 2 | R$ 59.912,64 | R$ 3.594,76 | R$ 2.488,39 | R$ 36.931,68 | R$ 53.461,61 |
| 3 | R$ 64.041,25 | R$ 3.842,48 | R$ 2.334,07 | R$ 40.040,15 | R$ 93.501,76 |
| 4 | R$ 68.437,70 | R$ 4.106,26 | R$ 2.179,75 | R$ 42.448,52 | R$ 135.950,28 |
| 5 | R$ 73.079,57 | R$ 4.384,77 | R$ 2.025,43 | R$ 47.423,11 | R$ 183.373,39 |

Há R$ 4.830 de caixa inicial de giro. Cadastro renovado e perdas esperadas entram nas despesas, além dos tributos e parcelas mostrados. O resultado econômico para alguém que exija remuneração imediata pelo trabalho seria menor: o caixa apresentado pressupõe dedicação sem retirada durante a projeção.

## 9. Escala e contrato

**Configuração de expansão esclarecida pelo grupo:** cada módulo ficará em uma localização diferente, por exemplo um na PUCRS e outro na Unisinos. A tabela abaixo de novos pontos é a referência pertinente. As instituições são exemplos de implantação; não se presume contrato ou autorização de uso do espaço.

| Módulos | Portas | Aporte total, base | VPL do fluxo após dívida, base |
|---:|---:|---:|---:|
| 1 | 8 | R$ 14.224,00 | R$ 108.192,85 |
| 2 | 16 | R$ 21.048,00 | R$ 246.913,12 |
| 3 | 24 | R$ 27.872,00 | R$ 384.031,06 |

Essa comparação pressupõe **um novo ponto com procura equivalente para cada módulo**, capacidade de compartilhar plataforma, administração e contabilidade e limpeza/manutenção crescendo por módulo. Não inclui contratação adicional de gestor ou rota logística: esses custos precisam ser acrescentados se a operação exigir. Comprar mais portas para o mesmo público não multiplica a procura e não produz os valores dessa tabela.

Como comparação auxiliar, fora do plano de expansão esclarecido pelo grupo, também se calculou a compra de mais módulos **no mesmo ponto, sem aumentar a procura**, mantendo quatro portas mensais e quatro temporárias por módulo. A capacidade adicional reduz pedidos recusados, mas não gera novos interessados:

| Módulos no mesmo ponto | Receita do primeiro ano | VPL após dívida, base |
|---:|---:|---:|
| 1 | R$ 50.167,05 | R$ 108.192,85 |
| 2 | R$ 50.688,15 | R$ 91.575,91 |
| 3 | R$ 50.691,19 | R$ 72.598,04 |

Nesse teste auxiliar, o segundo módulo aumenta a receita do primeiro ano em apenas cerca de R$ 521 e reduz o VPL em aproximadamente R$ 16,6 mil frente ao módulo único. Essa restrição de procura compartilhada não descreve o plano de um módulo em cada campus.

Para PUCRS + Unisinos, a estimativa anterior de R$ 21.048 de aporte total e R$ 246.913,12 de VPL após dívida é um **cenário ilustrativo de dois pontos com procura equivalente**, sob a mesma política de 50% financiado e real por um ano. Não é uma previsão calibrada para as duas universidades. Precisa de procura, preços/mix, repasse, início de operação e custos de atendimento próprios por campus. A parcela de renda usada para um campus de referência não foi validada para cada instituição.

A plataforma e a administração podem compartilhar despesas, conforme seus contratos; limpeza e manutenção já crescem por módulo. Deslocamentos, atendimentos emergenciais, integração e licença por equipamento podem acrescentar custos não cotados. Frete, desembaraço e integração compartilhados no orçamento dependem de uma compra e implantação compatíveis com essa economia. A demanda dos campi também pode cair conjuntamente nas férias e recessos: locais diferentes não tornam todos os riscos independentes.

Como o prazo de uso do campus segue indefinido, também foi calculada interrupção no final de cada prazo abaixo, com quitação imediata do saldo devedor e sem receitas posteriores, venda do equipamento ou recuperação do giro:

| Prazo efetivo da operação | VPL com interrupção, cenário-base |
|---:|---:|
| 12 meses | R$ -3.133,55 |
| 24 meses | R$ 28.409,32 |
| 36 meses | R$ 57.391,77 |
| 60 meses | R$ 108.192,85 |

É um teste conservador de prazo, não uma previsão de encerramento. Uma possibilidade real de realocar o módulo deve ser orçada com transporte, tempo sem receita e novo contrato. A negociação do espaço continua sendo uma condição necessária para confiar no horizonte de cinco anos.

## 10. O que significa o Monte Carlo entregue

Foram geradas **10.000 trajetórias de 60 meses**, com semente 20261115. Metade foi usada para selecionar a combinação comercial e a estratégia; a outra metade foi reservada para validação. Os mixes e políticas enfrentam as mesmas trajetórias de demanda e custos. A demanda temporária foi reduzida por afinamento de Poisson quando o preço aumenta, preservando comparabilidade entre tarifas.

Além de preços, alcance, conversão e frequência, variam custos, frete, preço do armário, inflação, repasse, TR, incidentes e procura mensal. Cada trajetória recebe elasticidades persistentes, choque mensal de demanda de média 1 e disponibilidade por janela de 98%. A inadimplência não foi modelada porque o recebimento é antecipado no mês do uso. Não se supõe retirada de lucro além dos pagamentos operacionais e da dívida.

Na validação do cenário ativo com 50% de crédito de referência, **96,42% das trajetórias tiveram VPL não negativo e não precisaram de caixa adicional**. Esse percentual é condicional às distribuições escolhidas. Ele não valida comercialmente a ideia, não inclui todos os riscos e não constitui probabilidade empírica de sucesso da empresa. O mercado potencial do trabalho não elimina a incerteza sobre adesão e preço.

O contrato indefinido e a aceitação de R$ 300/mês são riscos relevantes ainda não calibrados. Um corte inesperado de acesso, novas exigências de integração ou preço contábil maior podem alterar os resultados. Por isso, os valores devem orientar negociação e piloto, sem serem usados como retorno garantido.

## 11. Planilha entregue e verificações

A nova planilha possui Resumo, Fluxo mensal, Preços e mix, Financiamento, Regimes, Premissas e Monte Carlo. O fluxo-base contém fórmulas para receitas, reajustes, dívida SAC, tributação, compensação e caixa. Entradas amarelas recalculam o fluxo. Os resultados de comparação e do Monte Carlo são capturas identificadas; há controle de desatualização quando suas premissas são alteradas. É necessário refazer as simulações para gerar novas comparações.

Receitas, depreciação, tributos, dívida, prejuízos e caixa foram reconciliados entre cálculos independentes e planilha em meses representativos, inclusive virada de regime e reposição. Foram testados alteração de preço, ausência de financiamento e alerta de captura desatualizada. A revisão visual foi feita nas sete abas. O recálculo foi verificado no ambiente de geração, não em uma instalação do Microsoft Excel.

O arquivo anterior foi preservado. A revisão não modifica cadastros fiscais nem envia pedidos a bancos. Os valores sem cotação continuam explícitos para que possam ser substituídos quando houver propostas formais.
