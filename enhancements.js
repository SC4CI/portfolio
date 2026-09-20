(function(){
  const $=id=>document.getElementById(id);
  function currentAr(){return document.documentElement.lang==='ar';}

  function enhanceEducation(){
    const items=document.querySelectorAll('#educationList .timeline');
    if(items.length<2)return;
    const diploma=items[1];
    if(diploma.querySelector('.edu-doc'))return;
    const target=diploma.querySelector('div:last-child')||diploma;
    const box=document.createElement('div');
    box.className='edu-doc';
    box.innerHTML=`
      <button class="edu-doc-thumb doc-open" type="button" data-doc="assets/education/psau-diploma-certificate.png" data-title="Graduation document">
        <img src="assets/education/psau-diploma-certificate.png" alt="">
      </button>
      <div class="edu-doc-copy">
        <div class="doc-caption">${currentAr()?'وثيقة التخرج – دبلوم أمن المعلومات':'Graduation document — Information Security Diploma'}</div>
        <button class="doc-button doc-open" type="button" data-doc="assets/education/psau-diploma-certificate.png" data-title="${currentAr()?'وثيقة التخرج — دبلوم أمن المعلومات':'Graduation document — Information Security Diploma'}">${currentAr()?'عرض وثيقة التخرج':'View graduation document'}</button>
      </div>`;
    target.appendChild(box);
  }

  function recommendations(){
    const skills=$('skills'); if(!skills)return;
    let s=$('recommendationsSection');
    if(!s){
      s=document.createElement('section');
      s.id='recommendationsSection';s.className='section';
      skills.parentNode.insertBefore(s,skills);
    }
    const ar=currentAr();
    s.innerHTML=`
      <div class="shell">
        <div class="section-head"><div>
          <div class="eyebrow">${ar?'التوصيات':'REFERENCES'}</div>
          <h2>${ar?'خطابات وتوصيات':'References & Recommendation Letters'}</h2>
          <p>${ar?'خطابات أكاديمية من أعضاء هيئة تدريس درّسوني واطلعوا على أدائي الأكاديمي ومهاراتي التقنية.':'Academic letters from faculty members who taught me and observed my academic and technical performance.'}</p>
        </div></div>
        <div class="recommendations-grid">
          <article class="recommendation-card">
            <button class="rec-media doc-open" type="button" data-doc="resources/recommendation-alameen.html" data-title="Prof. Abdalla Abdarahim Alameen">
              <img src="assets/recommendations/alameen-letter-preview.png" alt="">
            </button>
            <div class="rec-copy">
              <span class="rec-kicker">${ar?'توصية أكاديمية':'Academic recommendation'}</span>
              <h3>Prof. Abdalla Abdarahim Alameen</h3>
              <p class="rec-role">${ar?'الكلية التطبيقية — جامعة الأمير سطام بن عبدالعزيز':'Applied College — Prince Sattam bin Abdulaziz University'}</p>
              <p>${ar?'توصية أكاديمية مبنية على أدائي في مقررات أمن البرمجيات والتشفير وأمن الشبكات وأساسيات أمن الحاسب، وتبرز التزامي الأكاديمي وقوة الأساس النظري والتفكير النقدي والرغبة في مواصلة التعلم.':'An academic recommendation based on my performance in Software Security, Cryptography, Network & Web Security, and Computer Security Fundamentals, highlighting academic commitment, theoretical foundations, critical thinking, and continued learning.'}</p>
              <button class="doc-button doc-open" type="button" data-doc="resources/recommendation-alameen.html" data-title="Prof. Abdalla Abdarahim Alameen">${ar?'عرض الخطاب':'Open letter'}</button>
            </div>
          </article>
          <article class="recommendation-card">
            <button class="rec-media doc-open" type="button" data-doc="resources/recommendation-aldossary.html" data-title="Dr. Mohammad Mubark Aldossary">
              <img src="assets/recommendations/aldossary-letter-preview.png" alt="">
            </button>
            <div class="rec-copy">
              <span class="rec-kicker">${ar?'توصية أكاديمية':'Academic recommendation'}</span>
              <h3>Dr. Mohammad Mubark Aldossary</h3>
              <p class="rec-role">${ar?'جامعة الأمير سطام بن عبدالعزيز':'Prince Sattam bin Abdulaziz University'}</p>
              <p>${ar?'توصية أكاديمية مبنية على أدائي في مقرر إدارة المخاطر بشقيه النظري والعملي، وتبرز فهمي لتحديد المخاطر وتقييم التهديدات واستراتيجيات المعالجة، إلى جانب حل المشكلات والالتزام الأكاديمي والأخلاقيات المهنية.':'An academic recommendation based on my theoretical and practical Risk Management coursework, highlighting risk identification, threat assessment, mitigation strategies, problem-solving, academic commitment, and professional ethics.'}</p>
              <button class="doc-button doc-open" type="button" data-doc="resources/recommendation-aldossary.html" data-title="Dr. Mohammad Mubark Aldossary">${ar?'عرض الخطاب':'Open letter'}</button>
            </div>
          </article>
        </div>
      </div>`;
    const nav=$('mainNav');
    if(nav){
      const old=nav.querySelector('a[href="#recommendationsSection"]');if(old)old.remove();
      const a=document.createElement('a');a.href='#recommendationsSection';
      a.innerHTML=`<span class="nav-mini-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 4h12v16H6z"/><path d="M9 8h6M9 12h6M9 16h4"/></svg></span><span>${ar?'التوصيات':'References'}</span>`;
      const skillsLink=nav.querySelector('a[href="#skills"]');nav.insertBefore(a,skillsLink||null);
    }
  }

  function apply(){enhanceEducation();recommendations();}
  window.addEventListener('load',()=>{
    apply();
    const btn=$('langBtn');if(btn)btn.addEventListener('click',()=>setTimeout(apply,30));
  });
})();

(function(){
  // Make project cards clickable, align footer, and keep actions working
  function bindProjectCards(){
    document.querySelectorAll('#projectGrid .project-card').forEach(card=>{
      if(card.dataset.bound==='1') return;
      card.dataset.bound='1';
      card.style.cursor='pointer';
      card.tabIndex=0;
      const btn = card.querySelector('[data-project]');
      if(!btn) return;
      const open = ()=>btn.click();
      card.addEventListener('click', e=>{ if(e.target.closest('button,a')) return; open(); });
      card.addEventListener('keydown', e=>{ if((e.key==='Enter' || e.key===' ') && !e.target.closest('button,a')){ e.preventDefault(); open(); } });
    });
  }




  function openResumeModal(){
    if(window.openDocViewer){
      window.openDocViewer('assets/Abdullah_AlMsan_CV.pdf', '', false);
      return;
    }
  }
  function closeResumeModal(){
    const m=document.getElementById('resumeModal');
    if(!m) return;
    m.classList.remove('open');
    m.setAttribute('aria-hidden','true');
    document.body.style.overflow='';
  }
  function bindCVHero(){
    document.querySelectorAll('.cv-hero').forEach(a=>{
      if(a.dataset.boundCv==='1') return;
      a.dataset.boundCv='1';
      a.addEventListener('click', e=>{ e.preventDefault(); openResumeModal(); });
    });
  }

  // Add Virtual Lab button to PenGuide modal
  function addLabLink(){
    const links = document.getElementById('modalLinks');
    const modal = document.getElementById('projectModal');
    if(!links || !modal) return;
    const isPenguide = modal.dataset.projectId==='penguide';
    if(!isPenguide || links.querySelector('.virtual-lab-link')) return;
    const a=document.createElement('button');
    a.type='button';
    a.className='gold-button virtual-lab-link';
    a.textContent = document.documentElement.lang==='ar' ? 'عرض المختبر الافتراضي ↗' : 'Open virtual lab ↗';
    a.onclick=()=>{const ar=document.documentElement.lang==='ar';window.openDocViewer && window.openDocViewer(ar?'resources/virtual-lab.html':'resources/virtual-lab-en.html', ar?'المختبر الافتراضي — PenGuide':'Virtual Lab — PenGuide', false);};
    links.appendChild(a);
  }

  function bindDocOpeners(){
    document.querySelectorAll('.doc-open').forEach(el=>{
      if(el.dataset.boundDoc==='1')return;el.dataset.boundDoc='1';
      el.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();if(window.openDocViewer)window.openDocViewer(el.dataset.doc,el.dataset.title||'',false);});
    });
  }
  function initMutations(){
    bindProjectCards(); bindCVHero(); addLabLink(); bindDocOpeners();
    const observer = new MutationObserver(()=>{
      bindProjectCards(); bindCVHero(); addLabLink(); bindDocOpeners();
    });
    observer.observe(document.body,{childList:true,subtree:true});
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', initMutations);
  else initMutations();
})();


/* ===== Beta 21 REVIEW — one clear Kali scroll marker per active surface ===== */
(function(){
  const KALI='assets/brands/kali-linux.svg';

  function anyOverlayOpen(){
    return ['projectModal','docModal','resumeModal','downloadSafetyModal']
      .some(id=>document.getElementById(id)?.classList.contains('open'));
  }

  function ensureMainScrollIndicator(){
    let el=document.querySelector('.main-scroll-indicator');
    if(!el){
      el=document.createElement('div');
      el.className='main-scroll-indicator';
      el.setAttribute('aria-hidden','true');
      el.innerHTML=`<span><img src="${KALI}" alt=""></span>`;
      document.body.appendChild(el);
    }
    const update=()=>{
      const max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
      document.documentElement.style.setProperty('--main-scroll',Math.min(1,Math.max(0,window.scrollY/max)));
      el.classList.toggle('hidden-for-modal',anyOverlayOpen());
    };
    if(el.dataset.beta21Bound!=='1'){
      el.dataset.beta21Bound='1';
      window.addEventListener('scroll',update,{passive:true});
      window.addEventListener('resize',update);
    }
    update();
    return update;
  }

  function ensureProjectIndicator(){
    const modal=document.getElementById('projectModal');
    const panel=modal?.querySelector('.modal-panel');
    if(!modal||!panel)return;

    modal.querySelectorAll('.modal-scroll-indicator').forEach(x=>x.remove());

    let ind=modal.querySelector(':scope > .project-scroll-indicator');
    if(!ind){
      ind=document.createElement('div');
      ind.className='project-scroll-indicator';
      ind.setAttribute('aria-hidden','true');
      ind.innerHTML=`<span><img src="${KALI}" alt=""></span>`;
      modal.appendChild(ind);
    }

    const update=()=>{
      const open=modal.classList.contains('open');
      const max=Math.max(0,panel.scrollHeight-panel.clientHeight);
      const ratio=max>0?Math.min(1,Math.max(0,panel.scrollTop/max)):0;
      ind.style.setProperty('--project-scroll',ratio);
      ind.classList.toggle('is-scrollable',open && max>2);

      const r=panel.getBoundingClientRect();
      const top=Math.max(18,r.top+72);
      const bottom=Math.min(window.innerHeight-18,r.bottom-18);
      ind.style.top=`${top}px`;
      ind.style.height=`${Math.max(120,bottom-top)}px`;
      const rtl=document.documentElement.dir==='rtl';
      if(rtl){
        ind.style.left=`${Math.max(8,r.left+10)}px`;
        ind.style.right='auto';
      }else{
        ind.style.right=`${Math.max(8,window.innerWidth-r.right+10)}px`;
        ind.style.left='auto';
      }
    };

    if(panel.dataset.beta21Scroll!=='1'){
      panel.dataset.beta21Scroll='1';
      panel.addEventListener('scroll',update,{passive:true});
      window.addEventListener('resize',update);
      try{new ResizeObserver(update).observe(panel)}catch(_){}
    }
    update();
  }

  function refresh(){
    ensureMainScrollIndicator();
    ensureProjectIndicator();
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',refresh);
  else refresh();

  const surfaceObserver=new MutationObserver(refresh);
  surfaceObserver.observe(document.body,{childList:true,subtree:true});
  const projectModal=document.getElementById('projectModal');
  const docModal=document.getElementById('docModal');
  if(projectModal)new MutationObserver(refresh).observe(projectModal,{attributes:true,attributeFilter:['class']});
  if(docModal)new MutationObserver(refresh).observe(docModal,{attributes:true,attributeFilter:['class']});
  new MutationObserver(refresh).observe(document.documentElement,{attributes:true,attributeFilter:['dir','lang']});
})();

/* ===== Version 35 final UI ownership: close icons + document scroll cue ===== */
(function(){
  const CLOSE_ICON='<span class="v35-close-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M7.25 7.25 16.75 16.75M16.75 7.25 7.25 16.75"></path></svg></span>';
  function decorateClose(btn){
    if(!btn)return;
    if(btn.classList.contains('v35-close') && btn.querySelector('.v35-close-icon'))return;
    btn.classList.remove('v34-close');btn.classList.add('v35-close');
    btn.replaceChildren();
    btn.insertAdjacentHTML('beforeend',CLOSE_ICON);
  }
  function decorateMain(){
    decorateClose(document.getElementById('closeModal'));
    decorateClose(document.getElementById('closeDocModal'));
    decorateClose(document.getElementById('closeResumeModal'));
    document.querySelectorAll('.safety-x').forEach(decorateClose);
  }
  function skinInner(d){
    if(!d)return false;
    if(d.readyState==='loading'&&!d.head){
      d.addEventListener('DOMContentLoaded',()=>skinInner(d),{once:true});
      return false;
    }
    const host=d.head||d.documentElement;
    if(!host)return false;
    let style=d.getElementById('v35-inner-ui');
    if(!style){
      style=d.createElement('style');style.id='v35-inner-ui';
      style.textContent=`
        .v35-close{position:relative!important;width:46px!important;height:46px!important;min-width:46px!important;border-radius:14px!important;border:1px solid rgba(226,190,72,.5)!important;background:linear-gradient(145deg,#111211,#080909)!important;box-shadow:0 10px 26px rgba(0,0,0,.38),inset 0 0 0 1px rgba(255,255,255,.025)!important;color:transparent!important;font-size:0!important;display:grid!important;place-items:center!important;overflow:hidden!important;cursor:pointer!important}.v35-close:before,.v35-close:after{content:none!important;display:none!important}.v35-close-icon{display:block!important;width:25px!important;height:25px!important;pointer-events:none!important}.v35-close-icon svg{width:25px!important;height:25px!important;display:block!important}.v35-close-icon path{fill:none!important;stroke:#f5f3eb!important;stroke-width:2.15!important;stroke-linecap:round!important}.v35-close:hover{border-color:#efca55!important;background:#17150d!important}.v35-close:hover path{stroke:#efca55!important}
        html,body,[data-scroll-root],.viewer-scroll,.viewport,.pages{scrollbar-width:none!important;-ms-overflow-style:none!important}html::-webkit-scrollbar,body::-webkit-scrollbar,[data-scroll-root]::-webkit-scrollbar,.viewer-scroll::-webkit-scrollbar,.viewport::-webkit-scrollbar,.pages::-webkit-scrollbar{display:none!important;width:0!important;height:0!important}
      `;
      host.appendChild(style);
    }
    d.querySelectorAll('.cert-close,.library-viewer-close').forEach(decorateClose);
    try{
      const siteLang=document.documentElement.lang==='ar'?'ar':'en';
      if(/recommendation-(?:alameen|aldossary)\.html/i.test(String(d.location?.pathname||''))){
        d.documentElement.lang=siteLang;d.documentElement.dir=siteLang==='ar'?'rtl':'ltr';
        const tag=d.querySelector('.tag');if(tag)tag.textContent=siteLang==='ar'?'للاطلاع فقط':'View only';
        const fit=d.getElementById('fit');if(fit && !/%/.test(fit.textContent||''))fit.textContent=siteLang==='ar'?'ملاءمة':'Fit';
      }
    }catch(_){ }
    return true;
  }

  decorateMain();
  const closeObserver=new MutationObserver(records=>{
    for(const record of records){
      for(const node of record.addedNodes){
        if(!(node instanceof Element))continue;
        if(node.matches?.('#closeModal,#closeDocModal,#closeResumeModal,.safety-x'))decorateClose(node);
        node.querySelectorAll?.('#closeModal,#closeDocModal,#closeResumeModal,.safety-x').forEach(decorateClose);
      }
    }
  });
  closeObserver.observe(document.body,{childList:true,subtree:true});

  const modal=document.getElementById('docModal'),frame=document.getElementById('docViewerFrame');
  if(!modal||!frame)return;
  modal.querySelectorAll(':scope > .v31-doc-scroll,:scope > .v34-doc-scroll,:scope > .beta27-doc-scroll').forEach(x=>x.style.display='none');
  let ind=modal.querySelector(':scope > .v35-doc-scroll');
  if(!ind){ind=document.createElement('div');ind.className='v35-doc-scroll';ind.setAttribute('aria-hidden','true');ind.innerHTML='<span><img src="assets/ui/scroll-terminal.svg" alt=""></span>';modal.appendChild(ind);}
  function safeDoc(f){try{return f?.contentDocument||null}catch(_){return null}}
  function safeWin(f){try{return f?.contentWindow||null}catch(_){return null}}
  function state(f,depth=0){
    const d=safeDoc(f),w=safeWin(f);if(!d||!w)return {range:0,top:0};
    skinInner(d);
    if(depth<2){
      try{const overlay=d.querySelector('.library-viewer.open'),nested=d.getElementById('libraryViewerFrame');if(overlay&&nested&&safeDoc(nested)){const s=state(nested,depth+1);if(s.range>2)return s;}}catch(_){ }
    }
    const roots=[d.querySelector('[data-scroll-root]'),d.querySelector('.viewer-scroll'),d.querySelector('.viewport'),d.querySelector('.pages'),d.scrollingElement,d.documentElement,d.body].filter(Boolean);
    let best={range:0,top:0};
    for(const el of [...new Set(roots)]){
      const root=el===d.scrollingElement||el===d.documentElement||el===d.body;
      const client=Math.max(1,root?(w.innerHeight||d.documentElement.clientHeight||f.clientHeight||1):(el.clientHeight||1));
      const range=Math.max(0,(el.scrollHeight||0)-client);
      let top=el.scrollTop||0;if(root)top=Math.max(top,w.scrollY||0,d.documentElement?.scrollTop||0,d.body?.scrollTop||0);
      if(range>best.range)best={range,top};
    }
    return best;
  }
  function place(){
    const panel=modal.querySelector('.doc-panel'),head=modal.querySelector('.doc-viewer-head');if(!panel)return;
    const r=panel.getBoundingClientRect(),hr=head?.getBoundingClientRect();const top=Math.max(12,(hr?.bottom||r.top+60)+8),bottom=Math.min(innerHeight-14,r.bottom-14);
    ind.style.top=top+'px';ind.style.height=Math.max(120,bottom-top)+'px';
    if(document.documentElement.dir==='rtl'){ind.style.left=Math.max(7,r.left+8)+'px';ind.style.right='auto';}else{ind.style.right=Math.max(7,innerWidth-r.right+8)+'px';ind.style.left='auto';}
  }
  function update(){
    if(!modal.classList.contains('open')){ind.classList.remove('is-scrollable');return;}
    place();const s=state(frame);ind.style.setProperty('--v35-doc-scroll',s.range?Math.min(1,Math.max(0,s.top/s.range)):0);ind.classList.toggle('is-scrollable',s.range>4);
  }
  window.__refreshViewerScroll=update;
  function bind(f){
    const d=safeDoc(f),w=safeWin(f);if(!d||!w)return;skinInner(d);
    if(f.dataset.v35Bound!=='1'){f.dataset.v35Bound='1';w.addEventListener('scroll',update,{passive:true});d.addEventListener('scroll',update,true);}
    d.querySelectorAll('[data-scroll-root],.viewer-scroll,.viewport,.pages').forEach(el=>{if(el.dataset.v35Bound==='1')return;el.dataset.v35Bound='1';el.addEventListener('scroll',update,{passive:true});});
    const nested=d.getElementById('libraryViewerFrame');
    if(nested&&nested.dataset.v35Frame!=='1'){
      nested.dataset.v35Frame='1';
      nested.addEventListener('load',()=>{bind(nested);setTimeout(update,50)});
    }
    const overlay=d.querySelector('.library-viewer');
    if(overlay&&overlay.dataset.v35Observed!=='1'){
      overlay.dataset.v35Observed='1';
      new MutationObserver(()=>{try{if(overlay.classList.contains('open')&&nested)bind(nested)}catch(_){ }update();})
        .observe(overlay,{attributes:true,attributeFilter:['class']});
    }
  }
  frame.addEventListener('load',()=>{setTimeout(()=>{bind(frame);update()},60);setTimeout(update,350)});
  addEventListener('resize',update,{passive:true});
  new MutationObserver(()=>{if(modal.classList.contains('open')){try{bind(frame)}catch(_){ }}update();})
    .observe(modal,{attributes:true,attributeFilter:['class']});
})();
