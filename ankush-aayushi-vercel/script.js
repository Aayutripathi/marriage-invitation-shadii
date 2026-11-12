document.getElementById('dl').innerHTML='<div class="gi" style="left:0"></div>';document.getElementById('dr').innerHTML='<div class="gi" style="right:0"></div>';
/* events */
var E=[{n:'Sangeet & Haldi',h:'संगीत और हल्दी',q:'Sunshine, songs & happy hearts',d:'Come with a little mischief and leave with a little haldi. An evening of music, dance, laughter and family stories.',dt:'23 November 2026',c:'#d4a017',dc:'Marigold yellow & jewel tones',img:'/assets/image-11.jpg'},
{n:'Shubh Vivah',h:'शुभ विवाह',q:'Two hearts. Seven promises. Forever.',d:'From the arrival of the baraat to the sacred saat phere, join our families as we begin our most beautiful chapter.',dt:'25 November 2026',c:'#8b2a3c',dc:'Traditional silk, rich reds & gold',img:'/assets/image-12.jpg'},
{n:'Vidai',h:'विदाई',q:'A tearful goodbye, a joyful beginning',d:'A tender farewell, with blessings and bright new beginnings. Stay with us to shower the couple with your love.',dt:'26 November 2026',c:'#c9a27e',dc:'Soft pastels & touches of gold',img:'/assets/image-13.jpg'}];
var tb=document.getElementById('tabs'),ev=document.getElementById('ev');
function showE(i){[].forEach.call(tb.children,function(b,j){b.className=j==i?'a':''});var e=E[i];ev.style.opacity=0;setTimeout(function(){ev.innerHTML='<div class="im" style="background-image:url('+e.img+')"><div><b>'+e.dt.split(' ').slice(0,2).join(' ')+'</b></div></div><div class="tx"><div class="h hi">'+e.h+'</div><h3>'+e.n+'</h3><div class="q">'+e.q+'</div><p class="d">'+e.d+'</p><div class="g2"><div><small>DATE</small>'+e.dt+'</div><div><small>THE SETTING</small>Ornate Lucknow</div></div><div class="dress"><i style="background:'+e.c+'"></i><div><small>Dress for the occasion</small>'+e.dc+'</div></div><a class="lk" target="_blank" rel="noopener" href="#venue" onclick="document.getElementById(\'venue\').scrollIntoView();return false">Find your way ↗</a></div>';ev.style.opacity=1},250)}
E.forEach(function(e,i){var b=document.createElement('button');b.innerHTML='<span>0'+(i+1)+'</span>'+e.n;b.onclick=function(){showE(i)};tb.appendChild(b)});showE(0);
/* vows */
var V=[['स्नेह','Care','A home filled with care','To nourish each other with kindness, and make the ordinary feel like home.'],['विश्वास','Strength','Strength, side by side','To stand beside each other through every season, with patience and courage.'],['सपने','Dreams','Dreams we build together','To share our hopes, celebrate small joys, and grow with generosity.'],['आनंद','Joy','A lifetime of happiness','To keep laughter close, and choose tenderness in everyday moments.'],['परिवार','Family','Love for our families','To cherish those who raised us, and welcome a larger circle of love.'],['साथ','Together','Always, together','To walk every road hand in hand, in sunshine and in storm.'],['अनंत','Forever','Friends for always','To be each other’s best friend today, tomorrow and always.']];
var vl=document.getElementById('vl'),dw=document.getElementById('dw'),arc=document.getElementById('arc'),C=2*Math.PI*140,nd=[];
arc.style.strokeDasharray=C;
V.forEach(function(v,i){vl.insertAdjacentHTML('beforeend','<div class="it"><div class="n">0'+(i+1)+'</div><div><div class="hw hi">'+v[0]+'</div><h5>'+v[2]+'</h5><p>'+v[3]+'</p></div></div>');
 var a=(-90+i*360/7)*Math.PI/180,n=document.createElement('div');n.className='nd';n.style.left=(170+140*Math.cos(a))+'px';n.style.top=(170+140*Math.sin(a))+'px';n.innerHTML='0'+(i+1)+'<small>'+v[1]+'</small>';n.onclick=function(){vl.children[i].scrollIntoView({block:'center',behavior:'smooth'})};dw.appendChild(n);nd.push(n)});
function act(i){nd.forEach(function(n,j){n.classList.toggle('a',j==i)});[].forEach.call(vl.children,function(c,j){c.classList.toggle('a',j==i)});arc.style.strokeDashoffset=C*(1-(i+.02)/7);document.getElementById('pc').textContent='Phera 0'+(i+1)+' of 07';document.getElementById('pt').textContent=V[i][2]}
act(0);arc.style.transition='stroke-dashoffset .8s';
var vo=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)act([].indexOf.call(vl.children,e.target))})},{rootMargin:'-42% 0px -42% 0px'});
[].forEach.call(vl.children,function(c){vo.observe(c)});
/* misc */
/* music */
var ctx,on=false,timer,nodes=[];
function startMusic(){try{ctx=ctx||new (window.AudioContext||window.webkitAudioContext)();ctx.resume();
 [130.8,196].forEach(function(f){var o=ctx.createOscillator(),g=ctx.createGain();o.frequency.value=f;g.gain.value=.035;o.connect(g);g.connect(ctx.destination);o.start();nodes.push(o)});
 var sc=[523.3,587.3,659.3,784,880,784,659.3,587.3,523.3,659.3,784,1046.5,880,784,659.3,587.3],i=0;
 timer=setInterval(function(){var o=ctx.createOscillator(),g=ctx.createGain(),t=ctx.currentTime;o.type='triangle';o.frequency.value=sc[i++%sc.length];g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.09,t+.04);g.gain.exponentialRampToValueAtTime(.001,t+1.1);o.connect(g);g.connect(ctx.destination);o.start(t);o.stop(t+1.2)},520);
 on=true;document.getElementById('mus').textContent='♪'}catch(e){}}
function stopMusic(){clearInterval(timer);nodes.forEach(function(n){try{n.stop()}catch(e){}});nodes=[];on=false;document.getElementById('mus').textContent='✕'}
document.getElementById('mus').onclick=function(){on?stopMusic():startMusic()};
document.getElementById('seal').onclick=function(){var g=document.getElementById('gate');g.classList.add('open');startMusic();document.getElementById('mus').style.display='block';setTimeout(function(){g.classList.add('done');document.body.classList.remove('lock')},2500)};

var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add('in')})},{threshold:.1});
document.querySelectorAll('.reveal').forEach(function(e){io.observe(e)});
var T=new Date('2026-11-23T00:00:00+05:30');
function tick(){var s=Math.max(0,(T-new Date())/1000),v=[['Days',86400,1e5],['Hours',3600,24],['Minutes',60,60],['Seconds',1,60]],h='';
 v.forEach(function(x){var n=Math.floor(s/x[1])%x[2];h+='<div><b>'+(n<10?'0'+n:n)+'</b><span>'+x[0]+'</span></div>'});document.getElementById('cd').innerHTML=h}
tick();setInterval(tick,1000);
document.getElementById('cp').onclick=function(){var t=document.getElementById('adr').textContent,b=this;try{navigator.clipboard.writeText(t)}catch(e){}b.textContent='✓ Copied';setTimeout(function(){b.textContent='❐ Copy address'},1800)};
document.getElementById('sb').onclick=function(){document.getElementById('fm').style.display='none';document.getElementById('ok').style.display='block'};