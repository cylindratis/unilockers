'use strict';
(() => {
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
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
    reduce.addEventListener('change',()=>{if(reduce.matches){document.getAnimations().forEach(a=>a.finish());image.style.transform='none'}});
  }
})();
