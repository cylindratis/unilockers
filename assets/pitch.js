'use strict';
(() => {
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const logoSlot=document.querySelector('.hero-logo-slot');
  const flyingLogo=document.querySelector('.hero-logo-flight');
  const navLogo=document.querySelector('.brand img');
  const footerLogo=document.querySelector('.footer-logo-slot');
  if(logoSlot&&flyingLogo&&navLogo){
    // One visible logo travels between its reserved hero slot and the header.
    document.body.append(flyingLogo);
    let logoFrame=0;
    function positionLogo(){
      logoFrame=0;
      const start=logoSlot.getBoundingClientRect(),end=navLogo.getBoundingClientRect();
      const distance=Math.max(100,Math.min(240,start.top+scrollY-end.top));
      const progress=Math.max(0,Math.min(1,scrollY/distance));
      const t=reduce.matches?(progress>0?1:0):progress;
      let x=start.left+(end.left-start.left)*t;
      let y=start.top+(end.top-start.top)*t;
      let width=start.width+(end.width-start.width)*t;
      if(footerLogo){
        const destination=footerLogo.getBoundingClientRect();
        const startScroll=destination.top+scrollY-innerHeight*.9;
        const availableScroll=Math.max(1,document.documentElement.scrollHeight-innerHeight-startScroll);
        const travel=Math.min(innerHeight*.4,availableScroll);
        const footerProgress=Math.max(0,Math.min(1,(scrollY-startScroll)/travel));
        const f=reduce.matches?(footerProgress>=.5?1:0):footerProgress;
        x+=(destination.left-x)*f;y+=(destination.top-y)*f;
        width+=(destination.width-width)*f;
      }
      const scale=width/start.width;
      flyingLogo.style.width=`${start.width}px`;
      flyingLogo.style.transform=`translate3d(${x}px,${y}px,0) scale(${scale})`;
    }
    function requestLogoPosition(){if(!logoFrame)logoFrame=requestAnimationFrame(positionLogo)}
    document.documentElement.classList.add('brand-morph-ready');positionLogo();
    addEventListener('scroll',()=>{
      if(scrollY>10)document.documentElement.classList.remove('hero-motion');
      requestLogoPosition();
    },{passive:true});
    addEventListener('resize',requestLogoPosition,{passive:true});
    new ResizeObserver(requestLogoPosition).observe(logoSlot);
    if(footerLogo)new ResizeObserver(requestLogoPosition).observe(footerLogo);
    document.fonts.ready.then(requestLogoPosition);
    reduce.addEventListener('change',requestLogoPosition);
  }
  const pointerMode=matchMedia('(hover: hover) and (pointer: fine) and (min-width: 701px)');
  const glow=document.querySelector('.blue-glow-pointer');
  let glowController,glowFrame=0;
  function configureGlow(){
    glowController?.abort();cancelAnimationFrame(glowFrame);glowFrame=0;
    glow?.classList.remove('is-visible');
    if(!glow||reduce.matches||!pointerMode.matches)return;
    glowController=new AbortController();
    const options={passive:true,signal:glowController.signal};
    let x=innerWidth*.5,y=innerHeight*.45,targetX=x,targetY=y;
    function paintGlow(){
      x+=(targetX-x)*.075;y+=(targetY-y)*.075;
      glow.style.setProperty('--glow-x',`${x}px`);glow.style.setProperty('--glow-y',`${y}px`);
      glowFrame=Math.abs(targetX-x)+Math.abs(targetY-y)>.2?requestAnimationFrame(paintGlow):0;
    }
    function hideGlow(){glow.classList.remove('is-visible');cancelAnimationFrame(glowFrame);glowFrame=0}
    addEventListener('pointermove',event=>{
      if(event.pointerType==='touch')return;
      targetX=event.clientX;targetY=event.clientY;glow.classList.add('is-visible');
      if(!glowFrame)glowFrame=requestAnimationFrame(paintGlow);
    },options);
    addEventListener('pointerout',event=>{if(!event.relatedTarget)hideGlow()},options);
    addEventListener('blur',hideGlow,options);
    document.addEventListener('visibilitychange',()=>{if(document.hidden)hideGlow()},options);
  }
  configureGlow();pointerMode.addEventListener('change',configureGlow);reduce.addEventListener('change',configureGlow);
  document.addEventListener('visibilitychange',()=>document.documentElement.classList.toggle('is-page-hidden',document.hidden));
  const steps=[...document.querySelectorAll('.value-step details')];
  const stepObserver=new IntersectionObserver(entries=>{
    for(const entry of entries){
      if(!entry.isIntersecting)continue;
      const details=entry.target;stepObserver.unobserve(details);details.open=true;
      const body=details.querySelector('.value-step-body');
      if(!reduce.matches)body.animate([{height:'0px',opacity:0},{height:`${body.scrollHeight}px`,opacity:1}],{duration:600,easing:'cubic-bezier(.16,1,.3,1)'});
    }
  },{rootMargin:'0px 0px -18% 0px',threshold:.5});
  if(!reduce.matches)steps.forEach(details=>{details.open=false;stepObserver.observe(details)});

  const rollingAnimations=new Set();
  function rollNumber(el){
    if(el.dataset.rollDone)return;el.dataset.rollDone='true';
    if(reduce.matches)return;
    const final=el.textContent;el.dataset.rollFinal=final;
    const accessible=document.createElement('span');accessible.className='sr-only';accessible.textContent=final;
    const visible=document.createElement('span');visible.className='number-reels';visible.setAttribute('aria-hidden','true');
    let digitIndex=0;
    for(const char of final){
      const cell=document.createElement('span');
      if(/\d/.test(char)){
        cell.className='number-digit';const reel=document.createElement('span');reel.className='number-reel';
        const turns=20+Number(char);
        for(let value=0;value<=turns;value++){const row=document.createElement('span');row.dataset.digit=String(value%10);reel.append(row)}
        reel.style.transform=`translateY(-${turns}em)`;cell.append(reel);visible.append(cell);
        const animation=reel.animate([{transform:'translateY(0)'},{transform:`translateY(-${turns}em)`}],{duration:1300,delay:digitIndex++*55,easing:'cubic-bezier(.16,1,.3,1)',fill:'backwards'});
        rollingAnimations.add(animation);animation.finished.then(()=>rollingAnimations.delete(animation)).catch(()=>rollingAnimations.delete(animation));
      }else{cell.className='number-literal';cell.textContent=char;visible.append(cell)}
    }
    el.replaceChildren(accessible,visible);
  }
  const numberObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){numberObserver.unobserve(entry.target);rollNumber(entry.target)}});
  },{threshold:.35});
  document.querySelectorAll('[data-roll]').forEach(el=>numberObserver.observe(el));
  reduce.addEventListener('change',()=>{
    if(!reduce.matches)return;
    stepObserver.disconnect();steps.forEach(details=>details.open=true);
    rollingAnimations.forEach(animation=>animation.finish());
    document.getAnimations().forEach(animation=>{if(Number.isFinite(animation.effect?.getComputedTiming().endTime))animation.finish()});
  });
  if(!reduce.matches){
    const observer=new IntersectionObserver(entries=>{
      if(reduce.matches)return;
      for(const entry of entries){
        if(!entry.isIntersecting)continue;
        const el=entry.target;observer.unobserve(el);
        if(el.classList.contains('context-image')){
          const blurred=el.querySelector('.context-blur');
          blurred.animate([{opacity:1},{opacity:0}],{duration:1100,easing:'cubic-bezier(.16,1,.3,1)'});
          el.querySelector('.context-sharp').animate([{transform:'scale(1.055)'},{transform:'scale(1)'}],{duration:1300,easing:'cubic-bezier(.16,1,.3,1)'});
        }else if(el.tagName==='FIGURE'){
          el.animate([{clipPath:'inset(0 7% 0 0)',transform:'translateY(15px)'},{clipPath:'inset(0)',transform:'translateY(0)'}],{duration:850,easing:'cubic-bezier(.16,1,.3,1)'});
        }else if(el.tagName==='H2'){
          el.animate([{clipPath:'inset(0 0 65% 0)',transform:'translateY(18px)'},{clipPath:'inset(0)',transform:'translateY(0)'}],{duration:700,easing:'cubic-bezier(.16,1,.3,1)'});
        }else{
          el.animate([{opacity:.45,transform:'translateY(14px)'},{opacity:1,transform:'translateY(0)'}],{duration:550,easing:'cubic-bezier(.16,1,.3,1)'});
        }
      }
    },{threshold:.16});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  }
})();
