// Edite aqui os links e o caminho da foto
var LINKS={linkedin:"https://www.linkedin.com/in/jessica-silva-devfront/",github:"https://github.com/JessicaSilva14",cliente:"https://github.com/JessicaSilva14/spring-boot-cliente-api","efood-gh":"https://github.com/JessicaSilva14/EFOOD","efood-demo":"https://efood-five-xi.vercel.app/"};
var PHOTO="images/foto.jpg";
document.querySelectorAll("[data-link]").forEach(function(a){var u=LINKS[a.dataset.link];a.href=u;if(u!=="#"){a.target="_blank";a.rel="noopener"}});
if(PHOTO)document.getElementById("avatar").innerHTML='<img src="'+PHOTO+'" alt="Foto de Jessica Silva">';

var reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
var S=function(t){return '<span class="s">"'+t+'"</span>'},K=function(t){return '  <span class="k">"'+t+'"</span>: '};
var L={
 pt:['<span class="ok">200 OK</span>','{',K("nome")+S("Jessica Silva")+',',K("formacao")+S("ADS (Uninter) + Full Stack Java (EBAC)")+',',K("stack")+'['+["Java","Spring Boot","React","TypeScript"].map(S).join(", ")+'],',K("origem")+S("gestão e logística")+',',K("busca")+S("estágio ou vaga júnior"),'}'],
 en:['<span class="ok">200 OK</span>','{',K("name")+S("Jessica Silva")+',',K("education")+S("Systems Analysis (Uninter) + Full Stack Java (EBAC)")+',',K("stack")+'['+["Java","Spring Boot","React","TypeScript"].map(S).join(", ")+'],',K("background")+S("management and logistics")+',',K("looking_for")+S("internship or junior role"),'}']
};
var lang="pt",out=document.getElementById("out"),caret='<span class="caret"></span>',timer;
function show(n){var l=L[lang];out.innerHTML=l.slice(0,n).join("\n")+(n<l.length?"\n":"")+caret}
function play(delay){clearTimeout(timer);if(reduce){show(L[lang].length);return}var i=0;show(0);timer=setTimeout(function t(){i++;show(i);if(i<L[lang].length)timer=setTimeout(t,420)},delay)}
play(1300);

var tr=[].slice.call(document.querySelectorAll("[data-en]"));
tr.forEach(function(el){el.dataset.pt=el.innerHTML});
document.getElementById("lang").onclick=function(){
  lang=lang==="pt"?"en":"pt";
  tr.forEach(function(el){el.innerHTML=lang==="en"?el.dataset.en:el.dataset.pt});
  document.documentElement.lang=lang==="en"?"en":"pt-BR";
  document.title=lang==="en"?"Jessica Silva | Junior Full Stack Java Developer":"Jessica Silva | Desenvolvedora Full Stack Java Júnior";
  this.textContent=lang==="en"?"PT":"EN";
  play(200);
};

var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll(".rv").forEach(function(el){io.observe(el)});

var track=document.getElementById("track"),fill=document.getElementById("fill"),stops=[].slice.call(track.querySelectorAll(".stop"));
function upd(){
  var r=track.getBoundingClientRect(),h=Math.max(0,Math.min(r.height,innerHeight*.6-r.top));
  fill.style.height=h+"px";
  stops.forEach(function(s){s.classList.toggle("on",s.offsetTop<=h)});
}
addEventListener("scroll",upd,{passive:true});addEventListener("resize",upd);upd();
