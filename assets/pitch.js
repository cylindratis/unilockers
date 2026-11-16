'use strict';
(() => {
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const logoSlot=document.querySelector('.hero-logo-slot');
  const flyingLogo=document.querySelector('.hero-logo-flight');
  const navLogo=document.querySelector('.brand img');
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
      const x=start.left+(end.left-start.left)*t;
      const y=start.top+(end.top-start.top)*t;
      const scale=1+(end.width/start.width-1)*t;
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
  const choices=[...document.querySelectorAll('.value-choice')];
  function selectValue(choice){
    choices.forEach(c=>{const on=c===choice;const button=c.querySelector('button');c.classList.toggle('active',on);button.classList.toggle('active',on);button.setAttribute('aria-expanded',String(on))});
    if(!reduce.matches){const p=choice.querySelector('p');p.getAnimations().forEach(a=>a.cancel());p.animate([{opacity:.4,transform:'translateY(7px)'},{opacity:1,transform:'translateY(0)'}],{duration:260,easing:'cubic-bezier(.16,1,.3,1)'})}
  }
  selectValue(choices[0]);document.documentElement.classList.add('pitch-ready');
  choices.forEach(c=>c.querySelector('button').addEventListener('click',()=>selectValue(c)));
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
    let visible=false,frame=0;
    const image=document.querySelector('.problem-image img');
    const scope=document.querySelector('.pitch-problem');
    new IntersectionObserver(e=>{visible=e[0].isIntersecting},{rootMargin:'100px'}).observe(scope);
    function move(){frame=0;if(reduce.matches||!visible)return;const r=scope.getBoundingClientRect();const p=Math.max(-1,Math.min(1,(r.top+r.height/2-innerHeight/2)/innerHeight));image.style.transform=`translateY(${p*14}px) scale(1.04)`}
    addEventListener('scroll',()=>{if(visible&&!frame)frame=requestAnimationFrame(move)},{passive:true});
    reduce.addEventListener('change',()=>{if(reduce.matches){document.getAnimations().forEach(a=>{if(Number.isFinite(a.effect?.getComputedTiming().endTime))a.finish()});image.style.transform='none'}});
  }
})();
