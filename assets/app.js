(function(){
  var d=document,$=function(i){return d.getElementById(i)};
  var ENDERECO="Delta Engenharia e Projetos, R. Jesus Vilela Oliveira, 94, Edna, Prata, MG, 38140-000";
  if(window.matchMedia&&matchMedia("(hover:hover) and (pointer:fine)").matches)d.documentElement.classList.add("hv");
  var tt;function toast(m){var t=$("toast");t.textContent=m;t.classList.add("show");clearTimeout(tt);tt=setTimeout(function(){t.classList.remove("show")},2200)}
  $("btn-copy").addEventListener("click",async function(){
    var b=this,ok=false;
    try{await navigator.clipboard.writeText(ENDERECO);ok=true}catch(e){
      try{var ta=d.createElement("textarea");ta.value=ENDERECO;ta.style.cssText="position:fixed;opacity:0";d.body.appendChild(ta);ta.select();ok=d.execCommand("copy");ta.remove()}catch(_){}}
    if(ok){b.classList.add("done");$("copy-label").textContent="Copiado!";toast("Endereço copiado");
      setTimeout(function(){b.classList.remove("done");$("copy-label").textContent="Copiar endereço"},2200)}
    else toast("Não foi possível copiar");
  });
})();
