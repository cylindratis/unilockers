'use strict';
(() => {
  const $ = id => document.getElementById(id);
  const money = new Intl.NumberFormat('pt-BR', {style:'currency',currency:'BRL',maximumFractionDigits:0});
  const percent = new Intl.NumberFormat('pt-BR', {style:'percent',minimumFractionDigits:2,maximumFractionDigits:2});
  let data, mode='fan', selected, hover=null;
  const canvas=$('mc-chart'), ctx=canvas.getContext('2d');
  const root=document.documentElement;
  $('theme').addEventListener('click',()=>{
    root.classList.toggle('dark');
    try{localStorage.setItem('unilockers-theme',root.classList.contains('dark')?'dark':'light')}catch{}
    draw();
  });
  $('menu').addEventListener('click',()=>{
    const open=$('nav-links').classList.toggle('open');
    $('menu').setAttribute('aria-expanded',String(open));
  });
  $('nav-links').querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    $('nav-links').classList.remove('open');$('menu').setAttribute('aria-expanded','false');
  }));
  const useMap=$('use-map');
  for(let n=1;n<=8;n++){const el=document.createElement('span');el.textContent=String(n);useMap.append(el)}
  function use(month){
    $('use-hour').classList.toggle('active',!month);$('use-month').classList.toggle('active',month);
    $('use-hour').setAttribute('aria-pressed',String(!month));$('use-month').setAttribute('aria-pressed',String(month));
    [...useMap.children].forEach((el,i)=>el.classList.toggle('active',month?i<4:i>=4));
    $('use-copy').textContent=month?'Para quem volta todos os dias. Um compartimento reservado durante o mês, respeitando os horários de acesso ao campus.':'Para um treino, uma aula ou um intervalo. O espaço fica disponível para o próximo usuário após a retirada.';
  }
  $('use-hour').addEventListener('click',()=>use(false));$('use-month').addEventListener('click',()=>use(true));use(false);
  function setMode(next){
    mode=next;hover=null;
    $('show-fan').classList.toggle('active',mode==='fan');$('show-options').classList.toggle('active',mode==='options');
    $('show-fan').setAttribute('aria-pressed',String(mode==='fan'));$('show-options').setAttribute('aria-pressed',String(mode==='options'));
    $('commercial-controls').hidden=mode!=='options';$('band-legend').hidden=mode!=='fan';
    $('legend-sample').textContent=mode==='fan'?'120 trajetórias ilustradas':'180 médias de combinações';
    $('chart-subtitle').textContent=mode==='fan'?'Trajetórias do cenário comercial vencedor, sem dívida.':'Todas as combinações de tarifa, mensalidade e distribuição das portas.';
    $('chart-explanation').textContent=mode==='fan'?'Linhas finas: 120 trajetórias da validação. Faixa: percentis 5–95 das 5.000 trajetórias. A curva lateral representa a distribuição final estimada.':'Cada linha é a média de 5.000 trajetórias de validação para uma combinação comercial. A vencedora na seleção permanece em azul; sua escolha aparece em traço escuro.';
    updateResult();draw();
  }
  $('show-fan').addEventListener('click',()=>setMode('fan'));
  $('show-options').addEventListener('click',()=>setMode('options'));
  ['price','monthly','allocation'].forEach(id=>$(id).addEventListener('change',()=>{
    if(!data)return;
    selected=data.comparisons.find(c=>c.price===+$('price').value&&c.monthly===+$('monthly').value&&c.m===+$('allocation').value);
    updateResult();draw();
  }));
  function isBest(c){return c.price===data.best.price&&c.monthly===data.best.monthly&&c.m===data.best.m}
  function updateResult(){
    if(!data)return;
    const c=mode==='fan'?data.best:selected, v=c.validation;
    $('result-label').textContent=isBest(c)?'Melhor combinação comercial na seleção':'Combinação selecionada';
    $('result-name').textContent=`R$ ${c.price}/h · R$ ${c.monthly}/mês · ${c.m} mensais + ${c.h} temporárias`;
    $('result-npv').textContent=money.format(v.mean);$('result-p10').textContent=money.format(v.p10);$('result-risk').textContent=percent.format(v.probability_cash_shortfall);
    $('selected-legend').hidden=mode!=='options'||isBest(c);
  }
  function finance(){
    if(!data)return;
    const micro=$('credit').value==='micro';
    const records=data.financial.slice(micro?5:0,micro?10:5);
    const body=$('funding-body');body.replaceChildren();
    records.forEach(f=>{
      const o=f.options.find(o=>o.cut===12), d=o.deterministic;
      const row=document.createElement('tr');
      [percent.format(f.fraction),money.format(d.equity),money.format(d.first_amort),d.cet_annual===null?'Não se aplica':percent.format(d.cet_annual),percent.format(o.validation.probability_cash_shortfall)].forEach(value=>{const td=document.createElement('td');td.textContent=value;row.append(td)});
      body.append(row);
    });
    $('credit-note').textContent=micro?'Estresse: teto de 4% ao mês, 36 meses SAC, sem carência. Prazo hipotético e encargos estimados para comparação; não é uma proposta bancária. Risco calculado com lucro real por um ano e migração ao Simples.':'Referência: 60 meses SAC, 12 de carência do principal e juros pagos. TR mensal de referência de 0,1693% + 6,068% a.a.; cadastro de R$ 500, 2% iniciais e renovação anual estimada. Custo efetivo calculado, sem proposta bancária. Valores sujeitos a enquadramento e aprovação.';
  }
  $('credit').addEventListener('change',finance);
  let geometry;
  function draw(){
    if(!data||!ctx)return;
    const rect=canvas.getBoundingClientRect(), width=rect.width,height=rect.height;
    if(!width||!height)return;
    const dpr=Math.min(window.devicePixelRatio||1,2);
    canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
    const css=getComputedStyle(root),ink=css.getPropertyValue('--ink').trim(),muted=css.getPropertyValue('--muted').trim(),blue=css.getPropertyValue('--accent').trim(),grid=css.getPropertyValue('--line').trim();
    const mobile=width<600, left=mobile?44:63,top=35,bottom=43,right=mode==='fan'?(mobile?50:100):18;
    const plotWidth=width-left-right,plotHeight=height-top-bottom, end=left+plotWidth;
    const paths=mode==='fan'?data.fan.paths:data.series.map(s=>s.path);
    let lo=Math.min(-20000,...paths.map(p=>Math.min(...p))),hi=Math.max(...paths.map(p=>Math.max(...p)));
    if(mode==='fan'){
      lo=Math.min(lo,...data.fan.p05,data.fan.density[0][0]);
      hi=Math.max(hi,...data.fan.p95,data.fan.density.at(-1)[0]);
    }
    const step=(hi-lo)/(mobile?4:5),magnitude=10**Math.floor(Math.log10(step)),nice=Math.ceil(step/magnitude)*magnitude;
    lo=Math.floor(lo/nice)*nice;hi=Math.ceil(hi/nice)*nice;
    const x=t=>left+t/60*plotWidth,y=v=>top+(hi-v)/(hi-lo)*plotHeight;
    geometry={left,end,width,top,height};
    ctx.clearRect(0,0,width,height);ctx.font='12px Geist, Arial, sans-serif';ctx.textBaseline='middle';
    ctx.fillStyle=muted;ctx.textAlign='left';ctx.fillText('Retorno descontado (R$ mil)',left,13);
    ctx.lineWidth=1;
    for(let v=lo;v<=hi+.1;v+=nice){
      ctx.strokeStyle=grid;ctx.globalAlpha=.65;ctx.beginPath();ctx.moveTo(left,y(v));ctx.lineTo(end,y(v));ctx.stroke();ctx.globalAlpha=1;
      ctx.fillStyle=muted;ctx.textAlign='right';ctx.fillText(new Intl.NumberFormat('pt-BR',{maximumFractionDigits:0}).format(v/1000),left-9,y(v));
    }
    for(const t of mobile?[0,30,60]:[0,12,24,36,48,60]){ctx.fillStyle=muted;ctx.textAlign='center';ctx.fillText(String(t),x(t),height-25)}
    ctx.fillStyle=muted;ctx.textAlign='right';ctx.fillText('Meses',end,height-7);
    function pathLine(p,color,lineWidth,alpha=1,dash=[]){ctx.beginPath();p.forEach((v,t)=>t?ctx.lineTo(x(t),y(v)):ctx.moveTo(x(t),y(v)));ctx.strokeStyle=color;ctx.lineWidth=lineWidth;ctx.globalAlpha=alpha;ctx.setLineDash(dash);ctx.stroke();ctx.globalAlpha=1;ctx.setLineDash([])}
    ctx.save();ctx.beginPath();ctx.rect(left,top,plotWidth,plotHeight);ctx.clip();
    if(mode==='fan'){
      ctx.beginPath();data.fan.p05.forEach((v,t)=>t?ctx.lineTo(x(t),y(v)):ctx.moveTo(x(t),y(v)));
      for(let t=60;t>=0;t--)ctx.lineTo(x(t),y(data.fan.p95[t]));ctx.closePath();ctx.fillStyle=blue;ctx.globalAlpha=.11;ctx.fill();ctx.globalAlpha=1;
      paths.forEach(p=>pathLine(p,blue,.8,.30));
      pathLine(data.fan.p05,muted,1,.65,[5,5]);pathLine(data.fan.p95,muted,1,.65,[5,5]);pathLine(data.fan.mean,blue,3.5);
    }else{
      paths.forEach(p=>pathLine(p,muted,.9,.25));
      const b=data.series.find(s=>s.price===data.best.price&&s.monthly===data.best.monthly&&s.m===data.best.m);
      pathLine(b.path,blue,3.5);
      if(selected&&!isBest(selected)){const s=data.series.find(s=>s.price===selected.price&&s.monthly===selected.monthly&&s.m===selected.m);pathLine(s.path,ink,2,1,[6,4])}
    }
    ctx.restore();
    if(mode==='fan'){
      const dwidth=right-10;
      ctx.save();ctx.beginPath();ctx.rect(end,top,right,plotHeight);ctx.clip();
      ctx.beginPath();ctx.moveTo(end,y(data.fan.density[0][0]));data.fan.density.forEach(([v,d])=>ctx.lineTo(end+d*dwidth,y(v)));ctx.lineTo(end,y(data.fan.density.at(-1)[0]));ctx.closePath();ctx.fillStyle=blue;ctx.globalAlpha=.12;ctx.fill();ctx.globalAlpha=1;ctx.strokeStyle=blue;ctx.lineWidth=1.5;ctx.stroke();ctx.restore();
      ctx.fillStyle=muted;ctx.textAlign='left';ctx.fillText('Final',end+8,13);
    }
    ctx.strokeStyle=muted;ctx.globalAlpha=.6;ctx.setLineDash([4,5]);ctx.beginPath();ctx.moveTo(left,y(0));ctx.lineTo(end,y(0));ctx.stroke();ctx.setLineDash([]);ctx.globalAlpha=1;
    if(hover!==null){ctx.strokeStyle=muted;ctx.globalAlpha=.5;ctx.beginPath();ctx.moveTo(x(hover),top);ctx.lineTo(x(hover),height-bottom);ctx.stroke();ctx.globalAlpha=1}
    canvas.dataset.mode=mode;canvas.dataset.lines=String(paths.length);canvas.dataset.ready='true';
    const t=hover??60;
    const chosen=mode==='fan'?data.fan.mean:data.series.find(s=>s.price===selected.price&&s.monthly===selected.monthly&&s.m===selected.m).path;
    $('chart-reading').textContent=`Mês ${t} · ${mode==='fan'?'média da melhor opção':'média da opção selecionada'}: ${money.format(chosen[t])}`+(mode==='fan'?` · faixa central: ${money.format(data.fan.p05[t])} a ${money.format(data.fan.p95[t])}`:'');
  }
  canvas.addEventListener('pointermove',e=>{if(!geometry)return;const r=canvas.getBoundingClientRect();hover=Math.round(Math.max(0,Math.min(60,(e.clientX-r.left-geometry.left)/(geometry.end-geometry.left)*60)));draw()});
  canvas.addEventListener('pointerleave',()=>{hover=null;draw()});
  new ResizeObserver(()=>draw()).observe(canvas.parentElement);
  fetch('assets/data.json').then(r=>{if(!r.ok)throw new Error('Resultados indisponíveis');return r.json()}).then(d=>{
    data=d;selected=d.best;finance();updateResult();draw();
  }).catch(()=>{$('chart-reading').textContent='Não foi possível carregar o gráfico. A planilha e o estudo completo continuam disponíveis para download.';$('funding-body').replaceChildren();const row=document.createElement('tr');const td=document.createElement('td');td.colSpan=5;td.textContent='Consulte a tabela de financiamento na planilha.';row.append(td);$('funding-body').append(row)});
})();
