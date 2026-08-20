document.addEventListener("DOMContentLoaded", function () {
  const topBtn = document.querySelector(".back-to-top");
  if (topBtn) {
    window.addEventListener("scroll", () => {
      topBtn.classList.toggle("visible", window.scrollY > 450);
    }, {passive:true});
    topBtn.addEventListener("click", e => {
      e.preventDefault();
      window.scrollTo({top:0, behavior:"smooth"});
    });
  }

  const searchInput = document.querySelector("#site-search-input");
  const results = document.querySelector("#search-results");
  const searchData = [
    ["Brahmansh","Hero","brahmansh.html"],
    ["Agniveer","Hero","agniveer.html"],
    ["Vajra","Hero","vajra.html"],
    ["Vishraaj","Hero","vishraaj.html"],
    ["Yantrik","Hero","yantrik.html"],
    ["Vaishnavi","Hero","vaishnavi.html"],
    ["Mantra","Hero","mantra.html"],
    ["Vyomika","Hero","vyomika.html"],
    ["Kavach","Hero","kavach.html"],
    ["The Trinetra","Universe","universe.html"],
    ["Cosmic History","Universe","cosmic-history.html"],
    ["The Great Cosmic War","Universe","great-cosmic-war.html"],
    ["Comics","Comics","comics.html"],
    ["Free Previews","Comics","previews.html"],
    ["Lore","Universe","lore.html"],
    ["News / Updates","Site","news.html"]
  ];

  if (searchInput && results) {
    function render(q){
      q=q.trim().toLowerCase();
      if(!q){results.classList.remove("show"); results.innerHTML=""; return;}
      const matches=searchData.filter(x=>(x[0]+" "+x[1]).toLowerCase().includes(q));
      results.innerHTML=matches.length
        ? matches.map(x=>`<a class="search-result" href="${x[2]}"><strong>${x[0]}</strong><span>${x[1]}</span></a>`).join("")
        : `<div class="search-empty">No Trinetra result found for “${q}”.</div>`;
      results.classList.add("show");
    }
    searchInput.addEventListener("input",()=>render(searchInput.value));
    searchInput.addEventListener("focus",()=>{if(searchInput.value) render(searchInput.value)});
    document.addEventListener("click",e=>{
      if(!e.target.closest(".site-search")) results.classList.remove("show");
    });
  }

  const pageUrl = encodeURIComponent(window.location.href);
  document.querySelectorAll(".share-whatsapp").forEach(a=>a.href="https://wa.me/?text="+encodeURIComponent("TRINETRA COMICS | "+window.location.href));
  document.querySelectorAll(".share-facebook").forEach(a=>a.href="https://www.facebook.com/sharer/sharer.php?u="+pageUrl);
  document.querySelectorAll(".share-x").forEach(a=>a.href="https://twitter.com/intent/tweet?url="+pageUrl+"&text="+encodeURIComponent("Trinetra Comics"));
  document.querySelectorAll(".share-telegram").forEach(a=>a.href="https://t.me/share/url?url="+pageUrl+"&text="+encodeURIComponent("Trinetra Comics"));

  document.querySelectorAll(".share-copy").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      const url=window.location.href;
      try{
        await navigator.clipboard.writeText(url);
        const old=btn.textContent; btn.textContent="COPIED!";
        setTimeout(()=>btn.textContent=old,1500);
      }catch(e){
        window.prompt("Copy this page URL:",url);
      }
    });
  });
});

/* ===== Dynamic franchise content ===== */
(function(){
  const clock=document.querySelector("#ist-clock");
  function updateIST(){
    if(!clock) return;
    const now=new Date();
    const time=new Intl.DateTimeFormat("en-IN",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:true}).format(now);
    const date=new Intl.DateTimeFormat("en-IN",{timeZone:"Asia/Kolkata",day:"2-digit",month:"short",year:"numeric"}).format(now);
    clock.innerHTML="<strong>"+time+" IST</strong><span>"+date+"</span>";
  }
  updateIST();
  setInterval(updateIST,1000);

  async function loadJSON(path){
    const r=await fetch(path,{cache:"no-store"});
    if(!r.ok) throw new Error(path);
    return r.json();
  }

  const latest=document.querySelector("#latest-comics");
  if(latest){
    loadJSON("data/comics.json").then(items=>{
      items.sort((a,b)=>(b.order||0)-(a.order||0)||new Date(b.date)-new Date(a.date));
      const top=items.slice(0,3);
      if(!top.length){latest.innerHTML='<div class="latest-empty">Latest comics will appear here.</div>';return;}
      latest.innerHTML=top.map(c=>`
        <a class="latest-comic-card" href="${c.page}">
          <div class="latest-comic-cover"><img loading="lazy" src="${c.cover}" alt="${c.hero} — ${c.title} cover"></div>
          <div class="latest-comic-body">
            <span class="issue">${c.issue||""} · ${c.hero||"TRINETRA COMICS"}</span>
            <h3>${c.title||""}</h3>
            <span class="date">Posted ${c.dateDisplay||c.date||""}</span>
            <p>${c.shortDescription||""}</p>
            <span class="text-link">VIEW COMIC →</span>
          </div>
        </a>`).join("");
    }).catch(()=>{latest.innerHTML='<div class="latest-empty">Latest comics are being updated.</div>';});
  }

  const updatesBox=document.querySelector("#latest-updates .updates-list");
  if(updatesBox){
    loadJSON("data/updates.json").then(items=>{
      items.sort((a,b)=>new Date(b.timestamp)-new Date(a.timestamp));
      updatesBox.innerHTML=items.slice(0,4).map(u=>`
        <a class="update-card update-card-link" href="update-${u.slug}.html">
          <time datetime="${u.timestamp}">${new Date(u.timestamp).toLocaleString("en-IN",{timeZone:"Asia/Kolkata",day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:true})} IST</time>
          <div><h3>${u.title}</h3><p>${u.text}</p><span class="text-link">READ UPDATE →</span></div>
        </a>`).join("");
    }).catch(()=>{updatesBox.innerHTML='<div class="latest-empty">Updates are being prepared.</div>';});
  }
})();


/* Hero dropdown links use native browser navigation. No click interception. */
