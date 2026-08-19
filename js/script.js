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
    ["Agniveer","Hero","heroes.html#agniveer"],
    ["Vajra","Hero","heroes.html#vajra"],
    ["Vishraaj","Hero","heroes.html#vishraaj"],
    ["Yantrik","Hero","heroes.html#yantrik"],
    ["Vaishnavi","Hero","heroes.html#vaishnavi"],
    ["Mantra","Hero","heroes.html#mantra"],
    ["Vyomika","Hero","heroes.html#vyomika"],
    ["Kavach","Hero","heroes.html#kavach"],
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
