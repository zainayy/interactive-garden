const TOOLS=[
{id:'flower',name:'Flowers',key:'1',hint:'Flowers — click or drag to sow. Sow on a pond for lily pads.'},
{id:'water',name:'Water',key:'2',hint:'Water — hold and drag over flowers to make them grow faster.'},
{id:'sheep',name:'Sheep',key:'3',hint:'Sheep — click to add one. Sweep the cursor fast to herd them.'},
{id:'picnic',name:'Picnic',key:'4',hint:'Picnic — click to lay out a blanket. A dog comes along.'},
{id:'tree',name:'Tree',key:'5',hint:'Tree — click to plant. Click a tree to shake out the birds.'},
{id:'fence',name:'Fence',key:'6',hint:'Fence — drag to build a fence line.'},
{id:'path',name:'Path',key:'7',hint:'Path — drag to lay a dirt path.'},
{id:'pond',name:'Pond',key:'8',hint:'Pond — click to dig, drag to make it bigger. Ducks and frogs move in.'},
{id:'shovel',name:'Shovel',key:'9',hint:'Shovel — click or drag to clear things away.'}];
const KEY='pocket-meadow-v2',GKEY='pocket-meadow-goals-v2';
const GOALS=[
{id:'bloom',text:'Grow 20 flowers of your own'},{id:'flock',text:'Gather a flock of 15 sheep'},{id:'picnic',text:'Host 3 picnics at once'},
{id:'wood',text:'Plant a little wood of 8 trees'},{id:'pond',text:'Dig a pond'},{id:'path',text:'Lay a long winding path'},
{id:'fed',text:'Let a sheep eat a flower'},{id:'frog',text:'Say hello to a frog'},{id:'fireflies',text:'Watch fireflies on a summer night'},
{id:'seasons',text:'See all four seasons'},{id:'rainbow',text:'Catch a rainbow after the rain'},{id:'fox',text:'Spot the fox that comes out at night'},
{id:'clover',text:'Find the hidden four-leaf clover'}];
const SEED_MAX=40;
const SEASONS=['Spring','Summer','Autumn','Winter'];
const SEASON_BG=['#F7B7C4','#F4C542','#F28C38','#e3ebf1'];
const GRASS=[
 {C:['#5a9a40','#68a84a','#78b555','#88c160'],Y:'#F7B7C4',L:'#fffaf0',BC:['#68a84a','#78b555','#88c160','#9ccd70']},
 {C:['#528c39','#5e9b42','#6ba74a','#79b354'],Y:'#c9d65a',L:'#9cc767',BC:['#5e9b42','#6ba74a','#79b354','#8cc063']},
 {C:['#7a8a3a','#8f9440','#a39a48','#b8a452'],Y:'#e08a2e',L:'#c4621c',BC:['#8f9440','#a39a48','#b8a452','#c9b060']},
 {C:['#dfe7ee','#e9eff4','#f2f6f9','#fbfcfd'],Y:'#c9d6e2',L:'#b9c6d2',BC:['#e9eff4','#f2f6f9','#ffffff','#ffffff']}];
const TREEP=[['#9ccd70','#6aa845','#4f8a34','#3a6e2a'],['#86c057','#5f9d3c','#477f2f','#356628'],['#f2b450','#e08a2e','#c4621c','#8a4a1f'],['#ffffff','#e3ebf1','#5d7a5e','#3c5541']];
const FCOL=[['#F4C542','#d99a1e','#8a5a2b'],['#F28C38','#c4621c','#F4C542'],['#F7B7C4','#de8aa0','#F4C542'],['#fffaf0','#e6dcc4','#F4C542'],['#e0533d','#a8332a','#F4C542'],['#b9a0f0','#8a6fd0','#fffaf0']];
const BLANK=[['#3f66b8','#7f9ee0','#c8d6f5'],['#c9372c','#e6867e','#fff7e6'],['#8b5fc9','#b896e6','#ece2fa'],['#e07a9a','#f2b3c6','#fff7e6'],['#2f8f8a','#79c3bd','#e0f3f0']];
const SHIRTS=['#e0533d','#3f66b8','#F4C542','#fffaf0','#F28C38','#8b5fc9','#2f8f8a'];
const HAIR=['#2b2420','#6b3e1f','#c98a3a','#1a1a1a'];
const SKIN=['#f2c9a0','#d9a070','#a8703f','#7a4a28'];
const PERSON=['.h.','.s.','sts','.t.','.p.','p.p','p.p'];
const PERSONH=PERSON[0].split('').map((_,i)=>PERSON.map(r=>r[i]).join(''));
const SP={
 sheep1:['.wwwww...','wwwwwwwkk','wwwwwwwkk','dwwwwwd..','.ddddd...'],
 sheep2:['.wwwww...','wwwwwww..','wwwwwwwkk','dwwwwwdkk','.ddddd...'],
 sheepS:['.wwwww..','wwwwwwwk','wwwwwwwk','.ddddd..'],
 bloom:[['..p..','.pqp.','pqcqp','.pqp.','..p..'],['p.p.p','.pqp.','pqcqp','.pqp.','p.p.p'],['.p.p.','ppqpp','.qcq.','ppqpp','.p.p.']],
 bud:['.q.','qcq','.q.'],sprout:['l.l','.g.'],
 bfo:['c.c','cbc','c.c'],bfc:['.c.','.b.','.c.'],
 walk1:['.h.','tst','.p.','p..'],walk2:['.h.','tst','.p.','..p'],
 dog1:['.....e.','tbbbbhh','.bbbbhh','.l..l..'],dog2:['.....e.','tbbbbhh','.bbbbhh','..l..l.'],dogS:['.bbbe','bbbhh','tbbbb'],
 duck:['.www..','wwwwgy','.www..'],
 fox1:['.......oo','woooooook','.oooooo..','.k...k...'],fox2:['.......oo','woooooook','.oooooo..','..k...k..'],
 frog:['e.e','ggg','g.g'],
 bird1:['k.k','.k.'],bird2:['.k.','k.k'],
 plane:['.....#......','.....##.....','#....##.....','############','#....##.....','.....##.....','.....#......'],
 can:['...kkk......','..k...k.....','.bbbbbbb...d','kbbbbbbbb.d.','kbbbbbbbbb..','kbbbbbbb....','.bbbbbbb....','..bbbbb.....'],
 shovel:['..........kk','.........kk.','........kk..','.......kk...','......kk....','..ss.kk.....','.sssss......','sssss.......','ssss........','.ss.........']
};
const SHEEPC={w:'#fffaf0',d:'#ddd2b8',k:'#2b2420'};
const DOGC={b:'#a8703f',h:'#8a5a2b',e:'#6b3e1f',t:'#a8703f',l:'#6b3e1f'};
const FOXC={o:'#e07a2e',w:'#fffaf0',k:'#2b2420'};
const MAJ=[0,2,4,7,9],MIN=[0,3,5,7,10];
const hash=(i,j,s)=>{const v=Math.sin(i*127.1+j*311.7+s*74.7)*43758.5453;return v-Math.floor(v);};
const vnoise=(x,y,s)=>{const i=Math.floor(x),j=Math.floor(y),fx=x-i,fy=y-j,u=fx*fx*(3-2*fx),v=fy*fy*(3-2*fy);
 const a=hash(i,j,s),b=hash(i+1,j,s),c=hash(i,j+1,s),d=hash(i+1,j+1,s);return a+(b-a)*u+(c-a)*v+(a-b-c+d)*u*v;};
const rnd=(a,b)=>a+Math.random()*(b-a);
const pick=a=>a[Math.floor(Math.random()*a.length)];
function drawMap(ctx,map,x,y,cols,flip,s=1){for(let j=0;j<map.length;j++){const r=map[j];for(let i=0;i<r.length;i++){const ch=flip?r[r.length-1-i]:r[i];if(ch==='.')continue;if(cols)ctx.fillStyle=cols[ch];ctx.fillRect(x+i*s,y+j*s,s,s);}}}
function hex(h){return [parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)];}
const treeCache=new Map();
function treeCanvas(r,seed,season){const k=r+'_'+seed+'_'+season;if(treeCache.has(k))return treeCache.get(k);
 const S=2*r+5,c=document.createElement('canvas');c.width=c.height=S;const g=c.getContext('2d');const o=r+2,P=TREEP[season];
 for(let y=-r-2;y<=r+2;y++)for(let x=-r-2;x<=r+2;x++){const a=Math.atan2(y,x),d=Math.hypot(x,y);
  const edge=r+(vnoise(a*2.2+seed,seed,3)-0.5)*3.2;if(d>edge)continue;
  let l=(-x-y)/(r*1.5)+(vnoise((x+seed*9)/3.2,(y)/3.2,5)-0.5)*0.9;if((x+y)&1)l+=0.08;
  let col=l>0.5?P[0]:l>0.12?P[1]:l>-0.3?P[2]:P[3];
  if(season===0&&l>-0.25){const h=hash(x,y,seed);if(h<0.14)col=h<0.04?'#fffaf0':'#F7B7C4';}
  if(season===2&&hash(x,y,seed)<0.06)col='#e0533d';
  g.fillStyle=col;g.fillRect(o+x,o+y,1,1);}
 treeCache.set(k,c);return c;}

class Component extends DCLogic {
  state={goalsOpen:true,done:{},toast:'',toastLabel:'',seeds:30,tool:'flower',rain:false,night:false,sound:true,music:true,season:0,stats:[],hint:TOOLS[0].hint,icons:{}};
  canvasRef=React.createRef(); wrapRef=React.createRef();
  season=0;flowers=[];sheep=[];blankets=[];trees=[];fences=[];paths=[];ponds=[];lilies=[];frogs=[];ducks=[];
  walkers=[];birds=[];bflies=[];parts=[];drops=[];wet=[];bubbles=[];flies=[];tracks=[];plane=null;fox=null;dog=null;rainbow=0;
  clouds=[];mouse={x:-99,y:-99,in:false,spd:0};down=false;nightT=0;rainT=0;time=0;dirty=false;terrainDirty=true;mi=4;beat=0;

  componentDidMount(){
    const boot=()=>{if(this.unmounted)return;if(this.canvasRef.current&&this.wrapRef.current){try{this.init();}catch(e){console.error('meadow init',e&&e.stack||e);}}else requestAnimationFrame(boot);};boot();
  }
  init(){
    try{const g=JSON.parse(localStorage.getItem(GKEY)||'null');if(g){this.seen=new Set(g.seen||[]);this.setState({done:g.done||{},seeds:g.seeds??30});}}catch(e){}
    if(!this.seen)this.seen=new Set();
    if(window.innerWidth<760||window.innerHeight<720)this.setState({goalsOpen:false});
    this.ctx=this.canvasRef.current.getContext('2d');
    this.makeIcons();
    this.resize(true);
    const pos=e=>{const r=this.canvasRef.current.getBoundingClientRect();return{x:(e.clientX-r.left)*this.W/r.width,y:(e.clientY-r.top)*this.H/r.height};};
    this.onDown=e=>{if(e.target!==this.canvasRef.current)return;this.audio();const p=pos(e);this.mouse.x=p.x;this.mouse.y=p.y;this.mouse.in=true;this.down=true;this.last={x:p.x,y:p.y};this.press(p.x,p.y);};
    this.onMove=e=>{const cv=this.canvasRef.current;if(!cv)return;if(e.target!==cv&&!this.down){this.mouse.in=false;return;}const p=pos(e);const d=Math.hypot(p.x-this.mouse.x,p.y-this.mouse.y);this.mouse.spd=Math.max(this.mouse.spd,d);this.mouse.x=p.x;this.mouse.y=p.y;this.mouse.in=true;if(this.down)this.drag(p.x,p.y);};
    this.onUp=()=>{if(!this.down)return;this.down=false;
      if(this.curFence){if(this.curFence.length<2)this.fences.pop();this.curFence=null;}
      if(this.curPond){if(this.curPond.n>=3&&this.ducks.length<5)this.addDuck(this.curPond.x,this.curPond.y);this.curPond=null;}};
    this.onKey=e=>{if(e.target&&/input|textarea/i.test(e.target.tagName))return;const k=e.key.toLowerCase();const t=TOOLS.find(t=>t.key===k);
      if(t)this.setTool(t.id);else if(k==='r')this.toggleRain();else if(k==='n')this.toggleNight();else if(k==='p')this.launchPlane();else if(k==='m')this.toggleSound();else if(k==='s')this.nextSeason();else if(k==='b')this.toggleMusic();};
    window.addEventListener('pointerdown',this.onDown);window.addEventListener('pointermove',this.onMove);
    window.addEventListener('pointerup',this.onUp);window.addEventListener('keydown',this.onKey);
    this.nextPlane=rnd(12,25);this.nextFox=rnd(5,10);this.nextFlock=rnd(8,16);this.statT=0;this.saveT=0;this.sizeT=0;this.errN=0;this.trackT=0;this.walkT=0;
    this.prev=performance.now();
    this.watch=setInterval(()=>{const t=performance.now();if(t-this.prev>150)tick(t);},60);
    const loop=t=>{this.raf=requestAnimationFrame(loop);tick(performance.now());};
    const tick=t=>{const dt=Math.min(0.05,Math.max(0,(t-this.prev)/1000));this.prev=t;
      try{this.sizeT-=dt;if(this.sizeT<=0){this.sizeT=0.5;this.resize(false);if(!this.seeded&&this.wrapRef.current.getBoundingClientRect().width>10){this.seeded=true;if(!this.load())this.starter();this.placeClover();this.seen.add(this.season);}}
        if(this.seeded){this.step(dt);this.draw();this.musicTick();}}catch(e){if(this.errN++<5)console.error('meadow',e);}};
    this.raf=requestAnimationFrame(loop);
  }
  componentWillUnmount(){clearTimeout(this.toastTO);this.unmounted=true;cancelAnimationFrame(this.raf);clearInterval(this.watch);window.removeEventListener('pointerup',this.onUp);window.removeEventListener('keydown',this.onKey);window.removeEventListener('pointerdown',this.onDown);window.removeEventListener('pointermove',this.onMove);this.drone(false);this.rainSound(false);this.save();}

  resize(first){
    const w=this.wrapRef.current;if(!w)return;const r=w.getBoundingClientRect();const P=this.props.pixelSize??4;
    const W=Math.max(80,Math.ceil(r.width/P)),H=Math.max(60,Math.ceil(r.height/P));
    if(!first&&W===this.W&&H===this.H)return;
    if(!first&&r.width<10)return;
    const oW=this.W,oH=this.H;this.W=W;this.H=H;
    if(!first&&oW&&this.seeded){const sx=W/oW,sy=H/oH;const sc=o=>{o.x=Math.round(o.x*sx);o.y=Math.round(o.y*sy);};
      [this.flowers,this.sheep,this.blankets,this.trees,this.ponds,this.lilies,this.frogs,this.ducks].forEach(a=>a.forEach(sc));this.fences.forEach(f=>f.forEach(sc));
      this.paths=this.paths.map(([x,y])=>[Math.round(x*sx),Math.round(y*sy)]);this.walkers=[];this.blankets.forEach(b=>b.people.forEach(p=>p.away=false));this.ducks.forEach(d=>{d.trail=[];d.kids.forEach(k=>{k.x=d.x;k.y=d.y;});});}
    this.makeGrass();this.terrainDirty=true;
    if(!this.clouds.length)this.clouds=[0,1,2].map(i=>({x:rnd(0,W),y:rnd(0,H),rx:rnd(30,55),ry:rnd(16,26),v:rnd(2,4)}));
  }
  makeGrass(){
    const W=this.W,H=this.H,g=document.createElement('canvas');g.width=W;g.height=H;const x2=g.getContext('2d');const img=x2.createImageData(W,H);
    const G=GRASS[this.season],C=G.C.map(hex),Y=hex(G.Y),L=hex(G.L),blades=[];
    for(let y=0;y<H;y++)for(let x=0;x<W;x++){
      const n=vnoise(x/34,y/34,1)*0.65+vnoise(x/9,y/9,2)*0.35;const patch=vnoise(x/12,y/12,7);
      let idx=n<0.4?0:n<0.52?1:n<0.64?2:3;
      if(((x*2+y+Math.floor(patch*12))%7)===0)idx=Math.min(3,idx+1);
      if(((x+y*3+Math.floor(patch*9))%11)===0)idx=Math.max(0,idx-1);
      let col=C[idx];const h=hash(x,y,3);
      if(vnoise(x/26,y/26,9)>0.66&&h<0.07)col=Y;else if(h<0.004)col=L;
      const o=(y*W+x)*4;img.data[o]=col[0];img.data[o+1]=col[1];img.data[o+2]=col[2];img.data[o+3]=255;
      if(hash(x,y,5)<0.025)blades.push(x,y,idx);}
    x2.putImageData(img,0,0);this.grass=g;this.blades=blades;
  }
  makeTerrain(){
    const W=this.W,H=this.H,N=W*H,m=new Uint8Array(N),dep=new Float32Array(N);
    for(const p of this.ponds){const R=p.r+2;for(let y=Math.max(0,p.y-R);y<=Math.min(H-1,p.y+R);y++)for(let x=Math.max(0,p.x-R);x<=Math.min(W-1,p.x+R);x++){
      const d=Math.hypot(x-p.x,y-p.y)+(hash(x,y,11)-0.5)*0.8,i=y*W+x;if(d<=p.r){m[i]=3;dep[i]=Math.max(dep[i],p.r-d);}else if(d<=R&&m[i]<3)m[i]=2;}}
    for(const [px,py] of this.paths){for(let y=py-2;y<=py+2;y++)for(let x=px-2;x<=px+2;x++){if(x<0||y<0||x>=W||y>=H)continue;if(Math.hypot(x-px,y-py)>2.3)continue;const i=y*W+x;if(m[i]===0)m[i]=1;}}
    const win=this.season===3;
    const PATH=win?['#d9d4c8','#c6bfae']:['#c9a66b','#ad8550'],SAND=win?'#e6e9ec':'#d9c58a',WS=win?'#cfe4f2':'#6aa6e0',WD=win?'#b4d2e8':'#4f8ccc';
    const cv=document.createElement('canvas');cv.width=W;cv.height=H;const g=cv.getContext('2d');const img=g.createImageData(W,H);const water=[];
    const cache={};const col=h=>cache[h]||(cache[h]=hex(h));
    for(let i=0;i<N;i++){const v=m[i];if(!v)continue;const x=i%W,y=(i/W)|0;let c;
      if(v===1){const ed=(x>0&&!m[i-1])||(x<W-1&&!m[i+1])||(y>0&&!m[i-W])||(y<H-1&&!m[i+W]);c=ed||hash(x,y,13)<0.12?PATH[1]:PATH[0];}
      else if(v===2)c=SAND;else{c=dep[i]>3.5?WD:WS;if(hash(x,y,17)<0.06)water.push(x,y);}
      const cc=col(c),o=i*4;img.data[o]=cc[0];img.data[o+1]=cc[1];img.data[o+2]=cc[2];img.data[o+3]=255;}
    g.putImageData(img,0,0);this.terrain=cv;this.mask=m;this.waterPx=water;this.terrainDirty=false;
    this.ducks=this.ducks.filter(d=>this.isWater(d.x,d.y));this.lilies=this.lilies.filter(l=>this.isWater(l.x,l.y));
    this.frogs=this.frogs.filter(f=>this.nearWater(f.x,f.y));
  }
  isWater(x,y){const m=this.mask;if(!m)return false;x=Math.round(x);y=Math.round(y);if(x<0||y<0||x>=this.W||y>=this.H)return false;return m[y*this.W+x]===3;}
  nearWater(x,y){for(let dy=-3;dy<=3;dy+=3)for(let dx=-3;dx<=3;dx+=3)if(this.isWater(x+dx,y+dy))return true;return false;}
  makeIcons(){
    const mk=f=>{const c=document.createElement('canvas');c.width=c.height=12;const g=c.getContext('2d');f(g);return c;};
    const ic={
      flower:mk(g=>{g.fillStyle='#3f7a2c';g.fillRect(5,7,1,4);g.fillRect(6,9,2,1);g.fillRect(3,8,2,1);drawMap(g,SP.bloom[0],3,2,{p:'#F28C38',q:'#c4621c',c:'#F4C542'});}),
      water:mk(g=>drawMap(g,SP.can,0,2,{k:'#2f4f8a',b:'#5d8fd6',d:'#9cc7f0'})),
      sheep:mk(g=>{g.fillStyle='#b8ad94';g.fillRect(2,9,7,1);drawMap(g,SP.sheep1,1,4,SHEEPC);}),
      picnic:mk(g=>{const B=BLANK[1];for(let y=0;y<8;y++)for(let x=0;x<10;x++){const a=(x>>1)&1,b=(y>>1)&1;g.fillStyle=a&&b?B[0]:a||b?B[1]:B[2];g.fillRect(1+x,2+y,1,1);}}),
      tree:mk(g=>g.drawImage(treeCanvas(5,3,1),-1,-1)),
      fence:mk(g=>{g.fillStyle='#c98a3a';g.fillRect(0,4,12,1);g.fillRect(0,7,12,1);g.fillStyle='#8a5a2b';[1,5,9].forEach(x=>g.fillRect(x,2,2,8));}),
      path:mk(g=>{g.fillStyle='#c9a66b';[[1,10],[2,9],[3,8],[4,8],[5,7],[6,6],[7,5],[7,4],[8,3],[9,2],[10,1]].forEach(([x,y])=>g.fillRect(x-1,y-1,3,3));g.fillStyle='#ad8550';[[2,10],[5,8],[8,4]].forEach(([x,y])=>g.fillRect(x,y,1,1));}),
      pond:mk(g=>{g.fillStyle='#d9c58a';g.beginPath();g.ellipse(6,6,6,5,0,0,6.29);g.fill();g.fillStyle='#6aa6e0';g.beginPath();g.ellipse(6,6,5,4,0,0,6.29);g.fill();g.fillStyle='#4f8ccc';g.fillRect(4,5,4,3);g.fillStyle='#4f8a34';g.fillRect(7,3,2,2);g.fillStyle='#F7B7C4';g.fillRect(8,3,1,1);}),
      shovel:mk(g=>drawMap(g,SP.shovel,0,1,{k:'#8a5a2b',s:'#9aa3a8'}))};
    this.iconCv=ic;const urls={};for(const k in ic)urls[k]=ic[k].toDataURL();this.setState({icons:urls});
  }

  // sound
  audio(){if(this.ac){if(this.ac.state==='suspended')this.ac.resume();return;}const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;
    const ac=this.ac=new AC();this.master=ac.createGain();this.master.gain.value=this.state.sound?0.8:0;this.master.connect(ac.destination);
    this.musicG=ac.createGain();this.musicG.gain.value=this.state.music?0.55:0;this.musicG.connect(this.master);
    const b=ac.createBuffer(1,ac.sampleRate,ac.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;this.noise=b;
    if(this.state.rain)this.rainSound(true);}
  tone(f,d,type='square',v=0.035,f2,delay=0){const ac=this.ac;if(!ac)return;const o=ac.createOscillator(),g=ac.createGain(),t=ac.currentTime+delay;o.type=type;o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+d);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(0.0001,t+d);o.connect(g);g.connect(this.master);o.start(t);o.stop(t+d+0.02);}
  note(n,t,d,type,v){const ac=this.ac,o=ac.createOscillator(),g=ac.createGain();o.type=type;o.frequency.value=440*Math.pow(2,(n-69)/12);g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(v,t+0.015);g.gain.exponentialRampToValueAtTime(0.0001,t+d);o.connect(g);g.connect(this.musicG);o.start(t);o.stop(t+d+0.05);}
  hiss(d,freq,v,type='highpass'){const ac=this.ac;if(!ac)return;const s=ac.createBufferSource(),f=ac.createBiquadFilter(),g=ac.createGain(),t=ac.currentTime;s.buffer=this.noise;f.type=type;f.frequency.value=freq;g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(0.0001,t+d);s.connect(f);f.connect(g);g.connect(this.master);s.start(t,Math.random()*0.5);s.stop(t+d);}
  baa(){const ac=this.ac;if(!ac)return;const t=ac.currentTime,o=ac.createOscillator(),l=ac.createOscillator(),lg=ac.createGain(),f=ac.createBiquadFilter(),g=ac.createGain();const p=rnd(0.85,1.2);
    o.type='sawtooth';o.frequency.setValueAtTime(430*p,t);o.frequency.exponentialRampToValueAtTime(330*p,t+0.5);l.frequency.value=26;lg.gain.value=22;l.connect(lg);lg.connect(o.frequency);
    f.type='lowpass';f.frequency.value=1500;g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(0.06,t+0.04);g.gain.exponentialRampToValueAtTime(0.0001,t+0.55);
    o.connect(f);f.connect(g);g.connect(this.master);o.start(t);l.start(t);o.stop(t+0.6);l.stop(t+0.6);}
  rainSound(on){const ac=this.ac;if(!ac)return;if(on&&!this.rainSrc){const s=ac.createBufferSource(),f=ac.createBiquadFilter(),g=ac.createGain();s.buffer=this.noise;s.loop=true;f.type='bandpass';f.frequency.value=this.season===3?500:1100;f.Q.value=0.4;g.gain.value=0.0001;g.gain.exponentialRampToValueAtTime(this.season===3?0.02:0.05,ac.currentTime+1);s.connect(f);f.connect(g);g.connect(this.master);s.start();this.rainSrc={s,g};}
    else if(!on&&this.rainSrc){const {s,g}=this.rainSrc;g.gain.exponentialRampToValueAtTime(0.0001,ac.currentTime+0.8);s.stop(ac.currentTime+0.9);this.rainSrc=null;}}
  drone(on){const ac=this.ac;if(!ac)return;if(on&&!this.droneN){const o=ac.createOscillator(),o2=ac.createOscillator(),f=ac.createBiquadFilter(),g=ac.createGain();o.type=o2.type='sawtooth';o.frequency.value=68;o2.frequency.value=71;f.type='lowpass';f.frequency.value=260;g.gain.value=0.0001;g.gain.exponentialRampToValueAtTime(0.05,ac.currentTime+1.2);o.connect(f);o2.connect(f);f.connect(g);g.connect(this.master);o.start();o2.start();this.droneN={o,o2,g};}
    else if(!on&&this.droneN){const {o,o2,g}=this.droneN,t=ac.currentTime;g.gain.exponentialRampToValueAtTime(0.0001,t+1);o.stop(t+1.1);o2.stop(t+1.1);this.droneN=null;}}
  musicTick(){
    const ac=this.ac;if(!ac||!this.state.music||!this.state.sound||ac.state!=='running')return;
    if(!this.musN||this.musN<ac.currentTime)this.musN=ac.currentTime+0.05;
    const night=this.nightT>0.5,s=this.season,rain=this.state.rain;
    const bpm=night?62:s===3?70:s===1?88:80,sd=60/bpm/2;const minor=s>=2||night;const sc=minor?MIN:MAJ;
    const base=[60,62,57,64][s]-(night?5:0);const prog=minor?[0,8,3,10]:[0,9,5,7];
    while(this.musN<ac.currentTime+0.2){const t=this.musN,st=this.beat%8,bar=Math.floor(this.beat/8)%4,ch=base+prog[bar];
      if(st===0){this.note(ch-24,t,sd*7,'sine',0.07);const th=minor?3:4;[0,th,7].forEach(i=>this.note(ch-12+i,t,sd*8,'sine',rain?0.02:0.013));}
      if(st===4&&!night)this.note(ch-17,t,sd*3,'sine',0.035);
      const p=(night?0.3:0.55)*(rain?0.6:1);
      if(Math.random()<p&&!(st%2&&Math.random()<0.4)){this.mi=Math.max(0,Math.min(9,this.mi+pick([-2,-1,-1,0,1,1,2])));
        this.note(base+sc[this.mi%5]+12*Math.floor(this.mi/5),t,sd*(night?3:1.8),night||s===3?'sine':'triangle',night?0.04:0.03);}
      if(s===3&&Math.random()<0.08)this.note(base+24+pick(sc),t,0.7,'sine',0.015);
      this.musN+=sd*(st%2?0.9:1.1);this.beat++;}
  }

  // world
  addFlower(x,y,g=0,u=false){if(this.isWater(x,y)){if(this.lilies.length<80)this.lilies.push({x:Math.round(x),y:Math.round(y),f:Math.random()<0.4});return;}
    if(this.flowers.length>700)this.flowers.shift();this.flowers.push({x:Math.round(x),y:Math.round(y),c:Math.floor(Math.random()*FCOL.length),s:Math.floor(Math.random()*3),g,wet:0,b:g>=0.65,u});}
  addSheep(x,y){if(this.sheep.length>=(this.limits()?20:40))return false;this.sheep.push({x,y,vx:0,vy:0,f:Math.random()<0.5?1:-1,st:'graze',t:rnd(0.5,3),hop:0,ph:Math.random()*9});return true;}
  addBlanket(x,y,np){if(this.blankets.length>=14)this.blankets.shift();const w=12+2*Math.floor(rnd(0,5)),h=9+2*Math.floor(rnd(0,3));const b={x:Math.round(x-w/2),y:Math.round(y-h/2),w,h,c:Math.floor(Math.random()*BLANK.length),people:[],items:[]};
    const n=np??Math.floor(rnd(1,3));for(let i=0;i<n;i++){const hz=Math.random()<0.5;b.people.push({dx:hz?Math.floor(rnd(-4,w-3)):Math.floor(rnd(1,w-3)),dy:hz?Math.floor(rnd(1,h-3)):Math.floor(rnd(-3,h-5)),hz,shirt:pick(SHIRTS),hair:pick(HAIR),skin:pick(SKIN),away:false});}
    const m=Math.floor(rnd(1,4));for(let i=0;i<m;i++)b.items.push({dx:Math.floor(rnd(1,w-3)),dy:Math.floor(rnd(1,h-3)),t:pick(['basket','plate','fruit','bottle'])});this.blankets.push(b);}
  addTree(x,y,r){if(this.trees.length>=30)this.trees.shift();this.trees.push({x:Math.round(x),y:Math.round(y),r:r||Math.floor(rnd(8,15)),seed:Math.floor(rnd(1,99)),shake:0,birds:Math.floor(rnd(1,4))});}
  addPond(x,y,r){this.ponds.push({x:Math.round(x),y:Math.round(y),r:r||Math.round(rnd(4,7))});if(this.ponds.length>80)this.ponds.shift();this.terrainDirty=true;}
  addFrog(x,y){if(this.frogs.length>=10)return;this.frogs.push({x:Math.round(x),y:Math.round(y),t:rnd(2,6),hop:0,sx:x,sy:y,tx:x,ty:y});}
  addDuck(x,y){const kids=[];const n=this.season===0?Math.floor(rnd(2,4)):Math.random()<0.3?2:0;for(let i=0;i<n;i++)kids.push({x,y});this.ducks.push({x,y,a:Math.random()*6.28,kids,trail:[],tt:0});}
  limits(){return this.props.limits??true;}
  useSeed(x,y){if(!this.limits())return true;const n=this.state.seeds;if(n<=0){if(!this.noSeedT||this.time-this.noSeedT>1){this.noSeedT=this.time;this.bubble(x,y,'no seeds');this.tone(160,0.12,'square',0.03);}return false;}this.setState({seeds:n-1});this.seedsDirty=true;return true;}
  addSeeds(n){if(!this.limits())return;this.setState(s=>({seeds:Math.min(SEED_MAX,s.seeds+n)}));this.seedsDirty=true;}
  saveGoals(){try{localStorage.setItem(GKEY,JSON.stringify({done:this.state.done,seen:[...this.seen],seeds:this.state.seeds}));}catch(e){}}
  goal(id){if(this.state.done[id])return;const g=GOALS.find(g=>g.id===id);if(!g)return;const done={...this.state.done,[id]:true};const all=Object.keys(done).length===GOALS.length;
    this.setState({done,toast:all?'Every goal complete. The meadow is yours.':g.text,toastLabel:all?'meadow complete':'goal complete'},()=>this.saveGoals());
    clearTimeout(this.toastTO);this.toastTO=setTimeout(()=>this.setState({toast:''}),all?5000:2600);
    [659,784,988,1319].forEach((f,i)=>this.tone(f,0.18,'triangle',0.045,null,i*0.08));this.addSeeds(5);
    const n=all?120:30;for(let i=0;i<n;i++)this.parts.push({x:rnd(0,this.W),y:rnd(-10,this.H*0.4),vx:rnd(-4,8),vy:rnd(6,16),life:rnd(2,4),max:4,c:pick(['#F4C542','#F28C38','#F7B7C4','#fffaf0','#e0533d']),leaf:true,ph:Math.random()*6});}
  placeClover(){if(this.clover&&this.clover.x<this.W&&this.clover.y<this.H)return;for(let k=0;k<50;k++){const x=Math.round(rnd(this.W*0.3,this.W*0.85)),y=Math.round(rnd(this.H*0.3,this.H*0.7));if(!this.mask||!this.mask[y*this.W+x]){this.clover={x,y};return;}}this.clover={x:Math.round(this.W/2),y:Math.round(this.H/2)};}
  rimSpot(p){const a=Math.random()*6.28;return{x:Math.round(p.x+Math.cos(a)*(p.r+2)),y:Math.round(p.y+Math.sin(a)*(p.r+2))};}
  starter(){
    const W=this.W,H=this.H;this.flowers=[];this.sheep=[];this.blankets=[];this.trees=[];this.fences=[];this.paths=[];this.ponds=[];this.lilies=[];this.frogs=[];this.ducks=[];this.walkers=[];this.dog=null;
    this.addTree(W*0.96,H*0.12,16);this.addTree(W*0.9,H*0.9,18);this.addTree(W*0.03,H*0.86,13);this.addTree(W*0.6,H*0.08,10);
    const f=[];const a={x:W*0.42,y:H+6},b={x:W+6,y:H*0.3};const n=Math.ceil(Math.hypot(b.x-a.x,b.y-a.y)/9);for(let i=0;i<=n;i++)f.push({x:a.x+(b.x-a.x)*i/n,y:a.y+(b.y-a.y)*i/n});this.fences.push(f);
    const px=W*0.2,py=H*0.6;[[0,0,8],[7,2,7],[-5,4,6],[3,-4,6]].forEach(([dx,dy,r])=>this.addPond(px+dx,py+dy,r));
    const P0=[-2,H*0.82],P1=[W*0.4,H*1.02],P2=[W*0.72,H*0.68];for(let t=0;t<=1;t+=0.004){const u=1-t;this.paths.push([Math.round(u*u*P0[0]+2*u*t*P1[0]+t*t*P2[0]),Math.round(u*u*P0[1]+2*u*t*P1[1]+t*t*P2[1])]);}
    this.makeTerrain();
    this.addDuck(px,py);this.addFrog(px+9,py-6);this.lilies.push({x:Math.round(px+4),y:Math.round(py+3),f:true},{x:Math.round(px-3),y:Math.round(py-2),f:false});
    this.addBlanket(W*0.78,H*0.62,2);this.blankets[0].c=0;
    const cx=W*0.45,cy=H*0.42;for(let i=0;i<9;i++){const a=i/9*Math.PI*2+rnd(-0.2,0.2);this.addSheep(cx+Math.cos(a)*W*0.13,cy+Math.sin(a)*H*0.2);}
    for(let k=0;k<6;k++){const x=rnd(W*0.3,W*0.9),y=rnd(H*0.2,H*0.85);for(let i=0;i<8;i++)this.addFlower(x+rnd(-10,10),y+rnd(-7,7),Math.random()<0.6?1:rnd(0,0.6));}
    this.dirty=true;
  }
  save(){if(!this.seeded)return;try{localStorage.setItem(KEY,JSON.stringify({W:this.W,H:this.H,night:this.state.night,season:this.season,
    flowers:this.flowers.map(f=>[f.x,f.y,f.c,f.s,+f.g.toFixed(2),f.u?1:0]),sheep:this.sheep.map(s=>[Math.round(s.x),Math.round(s.y)]),
    blankets:this.blankets.map(b=>({...b,people:b.people.map(p=>({...p,away:false}))})),trees:this.trees.map(t=>[t.x,t.y,t.r,t.seed]),fences:this.fences.map(f=>f.map(p=>[Math.round(p.x),Math.round(p.y)])),
    paths:this.paths,ponds:this.ponds.map(p=>[p.x,p.y,p.r]),lilies:this.lilies.map(l=>[l.x,l.y,l.f?1:0]),frogs:this.frogs.map(f=>[Math.round(f.x),Math.round(f.y)]),ducks:this.ducks.map(d=>[Math.round(d.x),Math.round(d.y),d.kids.length])}));}catch(e){}}
  load(){try{const d=JSON.parse(localStorage.getItem(KEY)||'null');if(!d)return false;const sx=this.W/d.W,sy=this.H/d.H,X=v=>Math.round(v*sx),Y=v=>Math.round(v*sy);
    if(d.season!=null&&d.season!==this.season){this.season=d.season;this.setState({season:d.season});this.makeGrass();}
    this.flowers=d.flowers.map(([x,y,c,s,g,u])=>({x:X(x),y:Y(y),c,s,g,wet:0,b:g>=0.65,u:!!u}));
    this.sheep=[];d.sheep.forEach(([x,y])=>this.addSheep(x*sx,y*sy));
    this.blankets=d.blankets.map(b=>({...b,x:X(b.x),y:Y(b.y),people:b.people.map(p=>({...p,away:false}))}));
    this.trees=d.trees.map(([x,y,r,seed])=>({x:X(x),y:Y(y),r,seed,shake:0,birds:2}));
    this.fences=d.fences.map(f=>f.map(([x,y])=>({x:x*sx,y:y*sy})));
    this.paths=(d.paths||[]).map(([x,y])=>[X(x),Y(y)]);this.ponds=(d.ponds||[]).map(([x,y,r])=>({x:X(x),y:Y(y),r}));
    this.makeTerrain();
    this.lilies=(d.lilies||[]).map(([x,y,f])=>({x:X(x),y:Y(y),f:!!f}));this.frogs=[];(d.frogs||[]).forEach(([x,y])=>this.addFrog(X(x),Y(y)));
    this.ducks=[];(d.ducks||[]).forEach(([x,y,k])=>{if(this.isWater(X(x),Y(y))){this.addDuck(X(x),Y(y));const dk=this.ducks[this.ducks.length-1];dk.kids=dk.kids.slice(0,0);for(let i=0;i<k;i++)dk.kids.push({x:X(x),y:Y(y)});}});
    this.terrainDirty=true;
    if(d.night){this.nightT=1;this.setState({night:true});}return true;}catch(e){console.error(e);return false;}}

  hitSheep(x,y){return this.sheep.find(s=>x>=s.x-1&&x<=s.x+10&&y>=s.y-2&&y<=s.y+6);}
  hitPerson(x,y){for(const b of this.blankets)for(const p of b.people){if(p.away)continue;const px=b.x+p.dx,py=b.y+p.dy,w=p.hz?7:3,h=p.hz?3:7;if(x>=px-1&&x<=px+w&&y>=py-1&&y<=py+h)return{px,py};}
    const w=this.walkers.find(w=>Math.abs(w.x-x)<4&&Math.abs(w.y-y)<5);return w?{px:w.x,py:w.y-2}:null;}
  hitTree(x,y){return this.trees.slice().reverse().find(t=>Math.hypot(x-t.x,y-t.y)<t.r);}
  near(o,x,y,r){return o&&Math.abs(o.x-x)<r&&Math.abs(o.y-y)<r;}
  bubble(x,y,text,plain){this.bubbles.push({x,y,text,life:plain?1.6:1.3,plain});}
  burst(x,y,cols,n,sp=20,life=0.7){for(let i=0;i<n;i++){const a=Math.random()*6.28,v=rnd(sp*0.3,sp);this.parts.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,life,max:life,c:pick(cols)});}}
  scatterBirds(t,n){if(this.season===3&&Math.random()<0.5)n=Math.min(n,1);for(let i=0;i<n;i++){const a=Math.random()*6.28,v=rnd(30,45);this.birds.push({x:t.x+rnd(-3,3),y:t.y+rnd(-3,3),vx:Math.cos(a)*v,vy:Math.sin(a)*v,ph:Math.random()*6});}if(n){this.tone(1800,0.06,'square',0.02,2400);this.tone(2000,0.06,'square',0.02,2600,0.08);}}

  press(x,y){
    const tool=this.state.tool,wint=this.season===3;
    if(tool!=='shovel'&&this.clover&&Math.abs(x-this.clover.x-1)<3&&Math.abs(y-this.clover.y-1)<3&&!this.state.done.clover){this.goal('clover');this.burst(this.clover.x+1,this.clover.y+1,['#fffaf0','#F4C542','#86c057'],14,18,1);return;}
    if(tool!=='shovel'){
      const s=this.hitSheep(x,y);if(s){s.hop=1;if(s.st==='sleep')s.st='graze';s.t=1.5;this.baa();this.bubble(s.x+4,s.y-2,pick(['baa','baa','baaa','mehh']));if(Math.random()<0.4)this.burst(s.x+4,s.y,['#F7B7C4','#e07a9a'],4,10,0.9);return;}
      if(this.near(this.dog,x-3,y-1,5)){const d=this.dog;d.hop=1;this.bubble(d.x+3,d.y-2,'woof');this.tone(320,0.08,'square',0.05,180);this.tone(340,0.08,'square',0.05,190,0.14);d.st='roam';d.t=2;d.tx=rnd(0,this.W);d.ty=rnd(0,this.H);return;}
      if(!wint){const dk=this.ducks.find(d=>this.near(d,x-2,y,5));if(dk){this.bubble(dk.x+2,dk.y-2,'quack');this.tone(620,0.12,'sawtooth',0.035,380);dk.a+=Math.PI;return;}
        const fr=this.frogs.find(f=>this.near(f,x-1,y-1,4));if(fr){this.bubble(fr.x+1,fr.y-1,'ribbit');this.goal('frog');this.tone(190,0.07,'square',0.05,120);this.tone(210,0.07,'square',0.05,130,0.1);fr.t=0;return;}}
      if(this.fox&&this.near(this.fox,x-4,y-1,6)){this.fox.run=true;this.goal('fox');this.bubble(this.fox.x+4,this.fox.y-2,'!');this.tone(900,0.1,'square',0.03,1400);return;}
      const p=this.hitPerson(x,y);if(p){this.bubble(p.px+1,p.py-1,pick(['hi','hello','hey','nice day','lovely']));[660,880].forEach((f,i)=>this.tone(f,0.12,'triangle',0.04,null,i*0.09));return;}
      if(!['flower','water','path','pond'].includes(tool)){const t=this.hitTree(x,y);if(t){this.shakeTree(t);return;}}
    }
    if(tool==='flower'){if(!this.useSeed(x,y))return;this.addFlower(x,y,0,true);this.tone(rnd(700,950),0.07,'square',0.03,1200);this.burst(x,y,wint?['#ffffff']:['#8a5a2b','#a8703f'],3,8,0.4);}
    else if(tool==='sheep'){if(this.addSheep(x-4,y-2)){this.baa();this.burst(x,y,['#fffaf0'],6,14,0.5);}else this.bubble(x,y,'field is full');}
    else if(tool==='picnic'){this.addBlanket(x,y);[523,659,784].forEach((f,i)=>this.tone(f,0.14,'triangle',0.04,null,i*0.07));}
    else if(tool==='tree'){if(this.limits()&&this.trees.length>=12){this.bubble(x,y,'no room for more trees');return;}this.addTree(x,y);this.tone(196,0.25,'triangle',0.06,392);this.burst(x,y,['#8a5a2b','#86c057'],8,16,0.6);}
    else if(tool==='fence'){this.curFence=[{x,y}];this.fences.push(this.curFence);if(this.fences.length>25)this.fences.shift();this.tone(260,0.05,'square',0.04);}
    else if(tool==='path'){this.paths.push([Math.round(x),Math.round(y)]);this.terrainDirty=true;this.hiss(0.08,600,0.04,'lowpass');}
    else if(tool==='pond'){this.addPond(x,y);this.curPond={x,y,n:1};const p=this.ponds[this.ponds.length-1],r=this.rimSpot(p);this.addFrog(r.x,r.y);this.hiss(0.25,800,0.06,'lowpass');this.tone(300,0.15,'sine',0.05,600);this.burst(x,y,['#8a5a2b','#6aa6e0'],8,16,0.6);}
    else if(tool==='shovel')this.dig(x,y);
    this.dirty=true;
  }
  shakeTree(t){t.shake=0.5;this.hiss(0.4,2500,0.05);const L=[['#F7B7C4','#fffaf0','#86c057'],['#5f9d3c','#86c057','#477f2f'],['#e08a2e','#f2b450','#e0533d'],['#ffffff','#e3ebf1']][this.season];
    for(let i=0;i<12;i++)this.parts.push({x:t.x+rnd(-t.r,t.r),y:t.y+rnd(-t.r,t.r),vx:rnd(-8,8),vy:rnd(2,10),life:2,max:2,c:pick(L),leaf:true,ph:Math.random()*6});
    if(t.birds>0){this.scatterBirds(t,t.birds);t.birds=0;setTimeout(()=>{t.birds=Math.floor(rnd(1,4));},20000);}}
  drag(x,y){
    const tool=this.state.tool,d=Math.hypot(x-this.last.x,y-this.last.y);
    if(tool==='flower'&&d>=5){if(!this.useSeed(x,y)){this.last={x,y};return;}this.addFlower(x+rnd(-1,1),y+rnd(-1,1),0,true);this.tone(rnd(700,1000),0.05,'square',0.02,1300);this.last={x,y};this.dirty=true;}
    else if(tool==='fence'&&this.curFence&&d>=8){this.curFence.push({x,y});this.tone(rnd(240,290),0.05,'square',0.04);this.last={x,y};this.dirty=true;}
    else if(tool==='path'&&d>=1.5){const n=Math.ceil(d/1.5);for(let i=1;i<=n;i++)this.paths.push([Math.round(this.last.x+(x-this.last.x)*i/n),Math.round(this.last.y+(y-this.last.y)*i/n)]);if(this.paths.length>4000)this.paths.splice(0,this.paths.length-4000);this.last={x,y};this.terrainDirty=true;this.dirty=true;if(Math.random()<0.2)this.hiss(0.06,500,0.025,'lowpass');}
    else if(tool==='pond'&&this.curPond&&d>=4){this.addPond(x,y);this.curPond.n++;this.last={x,y};this.dirty=true;if(Math.random()<0.4)this.hiss(0.1,700,0.03,'lowpass');}
    else if(tool==='shovel'&&d>=3){this.dig(x,y);this.last={x,y};}
  }
  dig(x,y){
    let hit=false;const near=(o,r)=>Math.hypot(o.x-x,o.y-y)<r;
    const fl=this.flowers.filter(f=>near(f,4));if(fl.length){this.flowers=this.flowers.filter(f=>!fl.includes(f));hit=true;}
    const li=this.lilies.filter(f=>near(f,3));if(li.length){this.lilies=this.lilies.filter(f=>!li.includes(f));hit=true;}
    const s=!hit&&this.hitSheep(x,y);if(s){this.sheep=this.sheep.filter(o=>o!==s);this.bubble(s.x+4,s.y,'bye');hit=true;}
    const b=!hit&&this.blankets.find(b=>x>=b.x&&x<=b.x+b.w&&y>=b.y&&y<=b.y+b.h);if(b){this.blankets=this.blankets.filter(o=>o!==b);this.walkers=this.walkers.filter(w=>w.b!==b);hit=true;}
    const t=!hit&&this.hitTree(x,y);if(t){this.trees=this.trees.filter(o=>o!==t);this.burst(t.x,t.y,['#5f9d3c','#86c057'],14,30,0.9);if(t.birds)this.scatterBirds(t,t.birds);hit=true;}
    if(!hit){const fi=this.fences.findIndex(f=>f.some(p=>near(p,5)));if(fi>=0){this.fences.splice(fi,1);hit=true;}}
    if(!hit){const n0=this.ponds.length;this.ponds=this.ponds.filter(p=>Math.hypot(p.x-x,p.y-y)>p.r);if(this.ponds.length!==n0){hit=true;this.terrainDirty=true;}}
    if(!hit){const n0=this.paths.length;this.paths=this.paths.filter(([px,py])=>Math.hypot(px-x,py-y)>4);if(this.paths.length!==n0){hit=true;this.terrainDirty=true;}}
    if(hit){this.burst(x,y,['#8a5a2b','#a8703f','#6b3e1f'],10,22,0.6);this.hiss(0.15,400,0.08,'lowpass');this.tone(110,0.1,'square',0.04,70);this.dirty=true;}
  }
  setTool(id){this.audio();this.setState({tool:id,hint:TOOLS.find(t=>t.id===id).hint});this.tone(520,0.05,'square',0.03);}
  toggleRain(){this.audio();const r=!this.state.rain;this.setState({rain:r});this.rainSound(r);
    if(r){for(const w of this.walkers){w.st='back';w.sp=16;}if(this.walkers.length)this.bubble(this.walkers[0].x,this.walkers[0].y-3,this.season===3?'snow':'rain');}
    else if(this.season!==3&&this.nightT<0.5){this.rainbow=10;this.goal('rainbow');[784,988,1175,1568].forEach((f,i)=>this.tone(f,0.3,'sine',0.03,null,i*0.12));}}
  toggleNight(){this.audio();const n=!this.state.night;this.setState({night:n});this.tone(n?392:523,0.3,'triangle',0.05,n?262:784);if(n)this.nextFox=rnd(3,7);this.dirty=true;}
  toggleSound(){this.audio();const s=!this.state.sound;this.setState({sound:s});if(this.master)this.master.gain.value=s?0.8:0;}
  toggleMusic(){this.audio();const m=!this.state.music;this.setState({music:m});if(this.musicG)this.musicG.gain.value=m?0.55:0;this.musN=0;}
  nextSeason(){this.audio();const s=(this.season+1)%4;this.season=s;this.seen.add(s);this.saveGoals();if(this.seen.size>=4)this.goal('seasons');this.setState({season:s});this.makeGrass();this.terrainDirty=true;
    if(this.rainSrc){this.rainSound(false);setTimeout(()=>{if(this.state.rain)this.rainSound(true);},950);}
    const sc=s>=2?MIN:MAJ,b=[72,74,69,76][s];sc.slice(0,4).forEach((n,i)=>this.tone(440*Math.pow(2,(b+n-69)/12),0.25,'triangle',0.035,null,i*0.08));
    if(s===0)this.ducks.forEach(d=>{if(!d.kids.length&&Math.random()<0.6)for(let i=0;i<3;i++)d.kids.push({x:d.x,y:d.y});});
    this.dirty=true;}
  launchPlane(){this.audio();if(this.plane)return;const l=Math.random()<0.5;this.plane={x:l?-40:this.W+40,y:rnd(this.H*0.15,this.H*0.85),vx:(l?1:-1)*rnd(34,44),vy:rnd(-6,6)};this.drone(true);this.nextPlane=rnd(40,80);}

  step(dt){
    const W=this.W,H=this.H;this.time+=dt;const T=this.time;const m=this.mouse,S=this.season,wint=S===3;
    if(this.terrainDirty)this.makeTerrain();
    this.nightT+=((this.state.night?1:0)-this.nightT)*Math.min(1,dt*1.5);this.rainT+=((this.state.rain?1:0)-this.rainT)*Math.min(1,dt*1.5);
    const night=this.nightT>0.5,rain=this.state.rain;
    for(const c of this.clouds){c.x+=c.v*dt;if(c.x-c.rx>W){c.x=-c.rx;c.y=rnd(0,H);}}
    let bloomed=0,ub=0;
    for(const f of this.flowers){if(f.g<1&&!wint){const r=(1/18)*(f.wet>0?4:1)*(rain?3:1)*(night?0.3:1)*(S===2?0.5:1);f.g=Math.min(1,f.g+r*dt);}
      if(f.wet>0)f.wet-=dt;if(!f.b&&f.g>=0.65){f.b=true;if(Math.random()<0.5)this.addSeeds(1);this.burst(f.x,f.y,['#fffaf0','#F4C542'],5,10,0.5);if(Math.random()<0.5)this.tone(rnd(1000,1500),0.1,'triangle',0.02);}if(f.b&&!wint){bloomed++;if(f.u)ub++;}}
    this.bloomed=bloomed;
    if(this.down&&this.state.tool==='water'&&m.in){for(let i=0;i<2;i++){const a=Math.random()*6.28,r=Math.random()*7;this.parts.push({x:m.x+Math.cos(a)*r,y:m.y+Math.sin(a)*r,vx:0,vy:0,life:0.35,max:0.35,c:'#cfe6f7',ring:true});}
      this.wT=(this.wT||0)-dt;if(this.wT<=0){this.wT=0.12;this.wet.push({x:m.x,y:m.y,life:5});if(this.wet.length>90)this.wet.shift();this.hiss(0.12,3000,0.025);}
      for(const f of this.flowers)if(Math.abs(f.x-m.x)<9&&Math.abs(f.y-m.y)<9)f.wet=3;}
    this.wet=this.wet.filter(w=>(w.life-=dt)>0);
    m.spd*=0.85;
    // seasonal particles
    if(this.trees.length&&(S===0||S===2)&&Math.random()<dt*(S===2?5:3)){const t=pick(this.trees);const L=S===0?['#F7B7C4','#fffaf0','#F7B7C4']:['#e08a2e','#f2b450','#e0533d','#c4621c'];this.parts.push({x:t.x+rnd(-t.r,t.r),y:t.y+rnd(-t.r,t.r),vx:rnd(4,10),vy:rnd(3,8),life:6,max:6,c:pick(L),leaf:true,ph:Math.random()*6});}
    // dog
    const ownerB=this.blankets.find(b=>b.people.length);
    if(!this.dog&&ownerB){this.dog={x:ownerB.x+ownerB.w+2,y:ownerB.y+ownerB.h/2,st:'sit',t:3,f:1,ph:0,hop:0,b:ownerB};}
    if(this.dog&&(!ownerB)){this.dog=null;}
    const dog=this.dog;
    if(dog){dog.ph+=dt;dog.t-=dt;if(dog.hop>0)dog.hop=Math.max(0,dog.hop-dt*3);if(!this.blankets.includes(dog.b))dog.b=ownerB;
      const home={x:dog.b.x+dog.b.w+2,y:dog.b.y+Math.floor(dog.b.h/2)};
      if(night&&dog.st!=='sleep'&&dog.st!=='back'){dog.st='back';}
      if(dog.t<=0){if(night){dog.st='sleep';dog.t=999;}else if(this.sheep.length&&Math.random()<0.5&&!rain){dog.st='chase';dog.target=pick(this.sheep);dog.t=rnd(3,5);if(Math.random()<0.5){this.bubble(dog.x+3,dog.y-2,'woof');this.tone(320,0.08,'square',0.04,180);}}
        else if(Math.random()<0.5){dog.st='roam';dog.tx=rnd(4,W-10);dog.ty=rnd(4,H-6);dog.t=rnd(3,5);}else{dog.st='back';dog.t=rnd(4,8);}}
      if(!night&&dog.st==='sleep'){dog.st='sit';dog.t=rnd(1,3);}
      let tx=null,ty=null,sp=0;
      if(dog.st==='chase'&&dog.target&&this.sheep.includes(dog.target)){tx=dog.target.x+4;ty=dog.target.y+2;sp=24;}
      else if(dog.st==='roam'){tx=dog.tx;ty=dog.ty;sp=14;}
      else if(dog.st==='back'){tx=home.x;ty=home.y;sp=16;if(Math.hypot(tx-dog.x,ty-dog.y)<2){dog.st=night?'sleep':'sit';dog.t=night?999:rnd(3,8);}}
      if(tx!=null){const ex=tx-dog.x,ey=ty-dog.y,ed=Math.hypot(ex,ey);if(ed>1){const nx=dog.x+ex/ed*sp*dt,ny=dog.y+ey/ed*sp*dt;if(!this.isWater(nx+3,ny+1)){dog.x=nx;dog.y=ny;}else{dog.st='back';}dog.f=ex>0?1:-1;dog.moving=true;}else dog.moving=false;}else dog.moving=false;
      dog.x=Math.max(1,Math.min(W-8,dog.x));dog.y=Math.max(1,Math.min(H-5,dog.y));}
    // fox
    this.nextFox-=dt;
    if(!this.fox&&night&&this.nextFox<=0){const l=Math.random()<0.5;this.fox={x:l?-10:W+2,y:rnd(H*0.2,H*0.8),vx:l?12:-12,ph:0,pause:0,run:false};this.nextFox=rnd(15,30);}
    if(this.fox){const f=this.fox;f.ph+=dt;if(f.run)f.vx=Math.sign(f.vx)*45;if(f.pause>0)f.pause-=dt;else{f.x+=f.vx*dt;f.y+=Math.sin(f.ph*0.7)*4*dt;if(Math.random()<dt*0.3&&!f.run)f.pause=rnd(1,2.5);}
      if(f.x<-20||f.x>W+20||(!night&&!f.run)){if(!night)f.run=true;if(f.x<-20||f.x>W+20)this.fox=null;}}
    // sheep
    if(wint){this.trackT-=dt;}
    for(const s of this.sheep){
      s.ph+=dt;if(s.hop>0)s.hop=Math.max(0,s.hop-dt*2.5);
      const dx=s.x+4-m.x,dy=s.y+2-m.y,dd=Math.hypot(dx,dy);
      let threat=null;if(m.in&&m.spd>2.2&&dd<18)threat={x:m.x,y:m.y};
      if(dog&&dog.st==='chase'&&Math.hypot(s.x+4-dog.x,s.y+2-dog.y)<16)threat=dog;
      if(this.fox&&Math.hypot(s.x+4-this.fox.x-4,s.y+2-this.fox.y)<16)threat={x:this.fox.x+4,y:this.fox.y};
      if(threat&&(!night||threat!==null)){const tx=s.x+4-threat.x,ty=s.y+2-threat.y,td=Math.hypot(tx,ty)||1;s.vx=tx/td*30;s.vy=ty/td*30;if(s.st!=='flee'&&Math.random()<0.25){this.baa();}s.st='flee';s.t=0.7;}
      s.t-=dt;
      if(night&&s.st!=='flee'){s.st='sleep';if(Math.random()<dt*0.25)this.bubble(s.x+8,s.y-1,'z',true);}
      else if(s.st==='sleep')s.st='graze';
      if(s.t<=0&&s.st!=='sleep'){
        if(s.st==='eat'&&s.target){s.target.g=0.35;s.target.b=false;this.goal('fed');this.burst(s.target.x,s.target.y,[FCOL[s.target.c][0]],5,10,0.8);if(Math.random()<0.5)this.bubble(s.x+4,s.y-2,'nom');s.target=null;}
        const r=Math.random();
        if(r<0.3&&!wint){const cand=this.flowers.filter(f=>f.b&&Math.abs(f.x-s.x)<40&&Math.abs(f.y-s.y)<30);if(cand.length){s.target=pick(cand);s.st='seek';s.t=6;}else{s.st='graze';s.t=rnd(1,3);}}
        else if(r<0.65){const a=Math.random()*6.28,v=rnd(4,9);s.vx=Math.cos(a)*v;s.vy=Math.sin(a)*v*0.7;s.st='walk';s.t=rnd(1,3);}
        else{s.st='graze';s.t=rnd(1.5,4);}
      }
      if(s.st==='seek'&&s.target){const tx=s.target.x-(s.f>0?8:0),ty=s.target.y-2,ex=tx-s.x,ey=ty-s.y,ed=Math.hypot(ex,ey);if(!this.flowers.includes(s.target)){s.st='graze';s.t=1;}else if(ed<1.5){s.st='eat';s.t=1.4;s.vx=s.vy=0;}else{s.vx=ex/ed*8;s.vy=ey/ed*8;}}
      if(s.st==='walk'||s.st==='flee'||s.st==='seek'){const nx=s.x+s.vx*dt,ny=s.y+s.vy*dt;if(this.isWater(nx+4,ny+2)&&!wint){s.vx=-s.vx;s.vy=-s.vy;if(s.st==='seek'){s.st='graze';s.t=1;}}else{s.x=nx;s.y=ny;}if(Math.abs(s.vx)>0.5)s.f=s.vx>0?1:-1;
        if(wint&&this.trackT<=0&&Math.random()<0.5)this.tracks.push({x:Math.round(s.x+4),y:Math.round(s.y+4),life:10});}
      if(s.st==='flee'){s.vx*=0.96;s.vy*=0.96;}
      for(const b of this.blankets){if(s.x+9>b.x&&s.x<b.x+b.w&&s.y+5>b.y&&s.y<b.y+b.h){const cx=b.x+b.w/2,cy=b.y+b.h/2;s.x+=Math.sign(s.x+4-cx)*0.6;s.y+=Math.sign(s.y+2-cy)*0.6;}}
      s.x=Math.max(1,Math.min(W-10,s.x));s.y=Math.max(1,Math.min(H-6,s.y));
    }
    if(wint&&this.trackT<=0)this.trackT=0.3;
    this.tracks=this.tracks.filter(t=>(t.life-=dt)>0);if(this.tracks.length>500)this.tracks.splice(0,this.tracks.length-500);
    // picnickers wandering
    this.walkT-=dt;
    if(this.walkT<=0){this.walkT=1;if(!night&&!rain)for(const b of this.blankets)for(const p of b.people){if(p.away||Math.random()>0.025||this.walkers.length>=6)continue;
      let tgt,say;const blooms=this.flowers.filter(f=>f.b&&Math.hypot(f.x-b.x,f.y-b.y)<80);const r=Math.random();
      if(r<0.35&&blooms.length&&!wint){const f=pick(blooms);tgt={x:f.x+2,y:f.y};say=pick(['pretty','smells nice']);}
      else if(r<0.6&&this.ponds.length){const pd=pick(this.ponds),rs=this.rimSpot(pd);tgt=rs;say=this.ducks.length&&!wint?'ducks':wint?'ice':'splash';}
      else if(r<0.8&&this.sheep.length){const s=pick(this.sheep);tgt={x:s.x+10,y:s.y+2};say='hello sheep';}
      else{tgt={x:Math.max(4,Math.min(W-4,b.x+rnd(-50,50))),y:Math.max(4,Math.min(H-4,b.y+rnd(-40,40)))};say=null;}
      p.away=true;this.walkers.push({b,p,x:b.x+p.dx+1,y:b.y+p.dy+2,tx:tgt.x,ty:tgt.y,st:'go',sp:8,t:0,say,ph:0});}}
    this.walkers=this.walkers.filter(w=>{if(!this.blankets.includes(w.b))return false;w.ph+=dt;
      if(night&&w.st!=='back'){w.st='back';w.sp=12;}
      if(w.st==='stay'){w.t-=dt;if(w.t<=0){w.st='back';w.sp=8;}return true;}
      const tx=w.st==='go'?w.tx:w.b.x+w.p.dx+1,ty=w.st==='go'?w.ty:w.b.y+w.p.dy+2;const ex=tx-w.x,ey=ty-w.y,ed=Math.hypot(ex,ey);
      if(ed<1.2){if(w.st==='go'){w.st='stay';w.t=rnd(3,7);if(w.say&&Math.random()<0.7)this.bubble(w.x,w.y-3,w.say);return true;}w.p.away=false;return false;}
      w.x+=ex/ed*w.sp*dt;w.y+=ey/ed*w.sp*dt;w.f=ex>=0?1:-1;return true;});
    // ducks, frogs
    if(!wint){for(const d of this.ducks){d.a+=rnd(-1.2,1.2)*dt;const nx=d.x+Math.cos(d.a)*5*dt,ny=d.y+Math.sin(d.a)*5*dt;if(this.isWater(nx+3,ny+1)&&this.isWater(nx,ny+1)&&this.isWater(nx+5,ny+1))d.x=nx,d.y=ny;else d.a+=Math.PI*rnd(0.5,1);
      d.tt-=dt;if(d.tt<=0){d.tt=0.25;d.trail.push({x:d.x,y:d.y});if(d.trail.length>20)d.trail.shift();if(Math.random()<0.25)this.parts.push({x:d.x+(Math.cos(d.a)>0?0:5),y:d.y+1,vx:0,vy:0,life:0.6,max:0.6,c:'#cfe6ff',ring:true});}
      d.kids.forEach((k,i)=>{const tp=d.trail[Math.max(0,d.trail.length-3-i*3)];if(tp){k.x+=(tp.x+2-k.x)*Math.min(1,dt*3);k.y+=(tp.y+1-k.y)*Math.min(1,dt*3);}});}
      for(const f of this.frogs){if(f.hop>0){f.hop=Math.max(0,f.hop-dt*2.5);const k=1-f.hop;f.x=f.sx+(f.tx-f.sx)*k;f.y=f.sy+(f.ty-f.sy)*k;continue;}
        f.t-=dt;if(f.t<=0){f.t=rnd(3,9);const a=Math.random()*6.28,r=rnd(4,9);const tx=f.x+Math.cos(a)*r,ty=f.y+Math.sin(a)*r;if(this.nearWater(tx,ty)&&!this.isWater(tx+1,ty+1)){f.sx=f.x;f.sy=f.y;f.tx=tx;f.ty=ty;f.hop=1;if(Math.random()<0.3)this.tone(200,0.06,'square',0.025,130);}}}}
    // birds
    this.nextFlock-=dt;
    if(this.nextFlock<=0&&!night){this.nextFlock=rnd(25,50);const l=Math.random()<0.5,y0=rnd(H*0.1,H*0.9),vx=(l?1:-1)*rnd(22,30),vy=rnd(-5,5);for(let i=0;i<5;i++){const row=Math.ceil(i/2),side=i%2?1:-1;this.birds.push({x:(l?-10:W+10)-Math.sign(vx)*row*4,y:y0+side*row*3,vx,vy,ph:i*0.7});}}
    this.birds=this.birds.filter(b=>{b.ph+=dt;b.x+=b.vx*dt;b.y+=b.vy*dt;return b.x>-30&&b.x<W+30&&b.y>-30&&b.y<H+30;});
    if(m.in&&m.spd>3)for(const t of this.trees)if(t.birds>0&&Math.hypot(m.x-t.x,m.y-t.y)<t.r){this.scatterBirds(t,t.birds);t.birds=0;setTimeout(()=>{t.birds=Math.floor(rnd(1,4));},20000);}
    // butterflies
    const want=this.nightT<0.4&&S<2?Math.min(14,Math.floor(bloomed/3)):S===2&&this.nightT<0.4?Math.min(3,Math.floor(bloomed/6)):0;
    if(this.bflies.length<want&&Math.random()<dt*1.5){const l=Math.random()<0.5;this.bflies.push({x:l?-3:W+3,y:rnd(0,H),vx:0,vy:0,c:pick(FCOL)[0],ph:Math.random()*9,land:0,target:null});}
    if(this.bflies.length>want&&Math.random()<dt*2)this.bflies.shift();
    const blooms=this.flowers.filter(f=>f.b);
    for(const b of this.bflies){b.ph+=dt;
      if(b.land>0){b.land-=dt;if(b.land<=0||!b.target||!b.target.b){b.target=null;b.land=0;}continue;}
      if(!b.target||!b.target.b)b.target=blooms.length?pick(blooms):null;
      let tx=b.target?b.target.x:W/2+Math.sin(b.ph*0.3)*W*0.4,ty=b.target?b.target.y-2:H/2+Math.cos(b.ph*0.37)*H*0.4;
      if(m.in&&m.spd<0.6&&Math.hypot(m.x-b.x,m.y-b.y)<28){tx=m.x+Math.cos(b.ph*2)*6;ty=m.y+Math.sin(b.ph*2)*4;}
      const ex=tx-b.x,ey=ty-b.y,ed=Math.hypot(ex,ey)||1;
      b.vx+=(ex/ed*16-b.vx)*dt*2;b.vy+=(ey/ed*16-b.vy)*dt*2;b.x+=b.vx*dt+Math.sin(b.ph*9)*0.15;b.y+=b.vy*dt+Math.cos(b.ph*7)*0.2;
      if(b.target&&ed<1.5){b.land=rnd(2,5);b.x=tx;b.y=ty;}}
    // fireflies
    const wantF=this.nightT>0.3?[24,50,16,0][S]:0;while(this.flies.length<wantF)this.flies.push({x:rnd(0,W),y:rnd(0,H),a:Math.random()*6.28,ph:Math.random()*9});
    if(this.flies.length>wantF)this.flies.length=Math.max(wantF,this.flies.length-1);
    for(const f of this.flies){f.ph+=dt;f.a+=rnd(-1,1)*dt*2;f.x+=Math.cos(f.a)*4*dt;f.y+=Math.sin(f.a)*4*dt;if(f.x<0)f.x=W;if(f.x>W)f.x=0;if(f.y<0)f.y=H;if(f.y>H)f.y=0;}
    // rain / snow
    if(rain){const n=Math.ceil(W*H/(wint?9000:5000));for(let i=0;i<n;i++)this.drops.push({x:rnd(0,W+20),y:rnd(-10,H),life:wint?rnd(1,3):rnd(0.15,0.4),ph:Math.random()*6});if(!wint)for(const f of this.flowers)f.wet=Math.max(f.wet,0.5);}
    this.drops=this.drops.filter(d=>{if(wint){d.x+=(-6+Math.sin(T*2+d.ph)*6)*dt;d.y+=14*dt;}else{d.x-=30*dt;d.y+=90*dt;}d.life-=dt;if(d.life<=0){if(!wint&&Math.random()<0.4)this.parts.push({x:d.x,y:d.y,vx:0,vy:0,life:0.3,max:0.3,c:'#d6e8f7',ring:true});return false;}return true;});
    if(this.drops.length>3000)this.drops.splice(0,this.drops.length-3000);
    if(this.rainbow>0)this.rainbow-=dt;
    // plane
    this.nextPlane-=dt;if((this.props.autoPlane??true)&&!this.plane&&this.nextPlane<=0&&!night)this.launchPlane();
    if(this.plane){const p=this.plane;p.x+=p.vx*dt;p.y+=p.vy*dt;for(const s of this.sheep)if(!s.hop&&Math.abs(s.x-p.x)<6&&Math.abs(s.y-p.y)<10){s.hop=1;if(Math.random()<0.3)this.bubble(s.x+4,s.y-2,'!');}
      for(const t of this.trees)if(t.birds>0&&Math.abs(t.x-p.x)<t.r&&Math.abs(t.y-p.y)<t.r+6){this.scatterBirds(t,t.birds);t.birds=0;setTimeout(()=>{t.birds=Math.floor(rnd(1,4));},20000);}
      if(p.x<-60||p.x>W+60){this.plane=null;this.drone(false);}}
    for(const t of this.trees)if(t.shake>0)t.shake-=dt;
    this.parts=this.parts.filter(p=>{if(p.leaf){p.x+=(p.vx+Math.sin(T*2.5+p.ph)*5)*dt;p.y+=p.vy*dt;}else{p.x+=p.vx*dt;p.y+=p.vy*dt;p.vx*=0.92;p.vy*=0.92;}return(p.life-=dt)>0;});
    if(this.parts.length>700)this.parts.splice(0,this.parts.length-700);
    this.bubbles=this.bubbles.filter(b=>{b.y-=dt*(b.plain?5:2);return(b.life-=dt)>0;});
    // HUD
    if(this.limits()){this.seedT=(this.seedT||0)+dt;if(this.seedT>=8){this.seedT=0;if(this.state.seeds<SEED_MAX)this.addSeeds(1);}}
    if(this.seedsDirty&&Math.random()<dt){this.seedsDirty=false;this.saveGoals();}
    this.statT-=dt;if(this.statT<=0){this.statT=0.4;
      if(ub>=20)this.goal('bloom');if(this.sheep.length>=15)this.goal('flock');if(this.blankets.length>=3)this.goal('picnic');if(this.trees.length>=8)this.goal('wood');
      if(this.ponds.length&&this.state.tool==='pond')this.goal('pond');if(this.paths.length>=420&&this.state.tool==='path')this.goal('path');if(S===1&&this.nightT>0.8)this.goal('fireflies');const sky=(this.state.night?'night':'day')+(rain?(wint?', snow':', rain'):'');
      const stats=[{label:'season',value:SEASONS[S]},{label:'sky',value:sky},{label:'blooming',value:wint?'dormant':bloomed+' / '+this.flowers.length},{label:'sheep',value:String(this.sheep.length)},{label:'picnics',value:String(this.blankets.length)},{label:'ponds',value:String(this.pondCount())}];if(this.limits())stats.unshift({label:'seeds',value:this.state.seeds+' / '+SEED_MAX});
      const k=JSON.stringify(stats);if(k!==this.statK){this.statK=k;this.setState({stats});}}
    this.saveT-=dt;if(this.saveT<=0&&this.dirty){this.saveT=2;this.dirty=false;this.save();}
    if(this.saveT<=-20){this.saveT=0;this.dirty=true;}
  }
  pondCount(){const P=this.ponds,n=P.length,par=P.map((_,i)=>i);const f=i=>par[i]===i?i:(par[i]=f(par[i]));
    for(let i=0;i<n;i++)for(let j=i+1;j<n;j++)if(Math.hypot(P[i].x-P[j].x,P[i].y-P[j].y)<P[i].r+P[j].r+1)par[f(i)]=f(j);let c=0;for(let i=0;i<n;i++)if(f(i)===i)c++;return c;}

  draw(){
    const cv=this.canvasRef.current;if(!cv)return;if(cv!==this.cv){this.cv=cv;this.ctx=cv.getContext('2d');}
    if(cv.width!==this.W||cv.height!==this.H){cv.width=this.W;cv.height=this.H;}
    const ctx=this.ctx,W=this.W,H=this.H,T=this.time,S=this.season,wint=S===3;if(!this.grass)return;
    ctx.drawImage(this.grass,0,0);
    const bl=this.blades,BC=GRASS[S].BC,mk=this.mask;
    for(let i=0;i<bl.length;i+=3){const x=bl[i],y=bl[i+1];if(mk&&mk[y*W+x])continue;const w=Math.sin(T*1.6-x*0.05-y*0.03)>0.55;ctx.fillStyle=BC[Math.min(3,bl[i+2]+(w?1:0))];ctx.fillRect(x+(w?1:0),y,1,1);}
    if(this.terrain)ctx.drawImage(this.terrain,0,0);
    const wp=this.waterPx;if(wp){ctx.fillStyle=wint?'#ffffff':'#cfe6ff';for(let i=0;i<wp.length;i+=2){const x=wp[i],y=wp[i+1];if(Math.sin(T*1.8+x*0.4+y*0.7)>0.75)ctx.fillRect(x,y,wint?1:2,1);}}
    for(const l of this.lilies){ctx.fillStyle=wint?'#d4e2ec':'#4f8a34';ctx.fillRect(l.x-1,l.y-1,3,2);ctx.fillRect(l.x,l.y+1,2,1);if(l.f&&!wint){ctx.fillStyle='#F7B7C4';ctx.fillRect(l.x,l.y-1,1,1);}}
    ctx.fillStyle='rgba(30,60,90,0.16)';for(const w of this.wet){ctx.globalAlpha=Math.min(1,w.life/2);ctx.beginPath();ctx.ellipse(Math.round(w.x),Math.round(w.y),6,4,0,0,6.29);ctx.fill();}ctx.globalAlpha=1;
    ctx.fillStyle=wint?'rgba(60,80,110,0.08)':'rgba(20,50,20,0.10)';for(const c of this.clouds){ctx.beginPath();ctx.ellipse(Math.round(c.x),Math.round(c.y),c.rx,c.ry,0,0,6.29);ctx.fill();ctx.beginPath();ctx.ellipse(Math.round(c.x+c.rx*0.5),Math.round(c.y-c.ry*0.4),c.rx*0.6,c.ry*0.7,0,0,6.29);ctx.fill();}
    const SH=wint?'rgba(60,80,110,0.22)':'rgba(25,50,15,0.3)';
    ctx.fillStyle=wint?'rgba(60,80,110,0.25)':'rgba(25,50,15,0.32)';for(const t of this.trees){ctx.beginPath();ctx.ellipse(t.x+4,t.y+4,t.r+1,t.r,0,0,6.29);ctx.fill();}
    ctx.fillStyle='#c9d6e2';for(const t of this.tracks){ctx.globalAlpha=Math.min(1,t.life/3);ctx.fillRect(t.x,t.y,1,1);}ctx.globalAlpha=1;
    const line=(a,b,fn)=>{const dx=b.x-a.x,dy=b.y-a.y,n=Math.max(1,Math.round(Math.max(Math.abs(dx),Math.abs(dy))));for(let k=0;k<=n;k++)fn(Math.round(a.x+dx*k/n),Math.round(a.y+dy*k/n),Math.abs(dx)>Math.abs(dy));};
    for(const pass of [0,1])for(const f of this.fences){for(let i=1;i<f.length;i++)line(f[i-1],f[i],(x,y,hz)=>{if(pass===0){ctx.fillStyle=SH;ctx.fillRect(x+1,y+2,1,1);ctx.fillRect(x+(hz?1:3),y+(hz?4:2),1,1);}else{ctx.fillStyle='#d89a48';ctx.fillRect(x,y,1,1);ctx.fillStyle='#c98a3a';ctx.fillRect(x+(hz?0:2),y+(hz?2:0),1,1);}});
      if(pass===1)for(const p of f){const x=Math.round(p.x),y=Math.round(p.y);ctx.fillStyle='#6b3e1f';ctx.fillRect(x,y,2,3);ctx.fillStyle=wint?'#ffffff':'#a8703f';ctx.fillRect(x,y,2,1);}}
    for(const b of this.blankets){const B=BLANK[b.c];ctx.fillStyle=SH;ctx.fillRect(b.x+1,b.y+1,b.w,b.h);
      for(let y=0;y<b.h;y++)for(let x=0;x<b.w;x++){const a=(x>>1)&1,c=(y>>1)&1;ctx.fillStyle=a&&c?B[0]:a||c?B[1]:B[2];ctx.fillRect(b.x+x,b.y+y,1,1);}
      for(const it of b.items){const x=b.x+it.dx,y=b.y+it.dy;if(it.t==='basket'){ctx.fillStyle='#8a5a2b';ctx.fillRect(x,y,3,2);ctx.fillStyle='#c98a3a';ctx.fillRect(x,y,3,1);}else if(it.t==='plate'){ctx.fillStyle='#fffaf0';ctx.fillRect(x,y,2,2);ctx.fillStyle='#F28C38';ctx.fillRect(x,y,1,1);}else if(it.t==='fruit'){ctx.fillStyle='#e0533d';ctx.fillRect(x,y,1,1);ctx.fillStyle='#F4C542';ctx.fillRect(x+1,y+1,1,1);}else{ctx.fillStyle='#2f8f8a';ctx.fillRect(x,y,1,3);}}
      for(const p of b.people){if(p.away)continue;const cols={h:p.hair,s:p.skin,t:p.shirt,p:'#3f4f7a'};const x=b.x+p.dx,y=b.y+p.dy;ctx.fillStyle=SH;drawMap(ctx,p.hz?PERSONH:PERSON,x+1,y+1,null,false);drawMap(ctx,p.hz?PERSONH:PERSON,x,y,cols,false);}}
    if(this.clover&&!wint){const c=this.clover,g=this.state.done.clover?'#86c057':'#4f9a34';ctx.fillStyle=g;ctx.fillRect(c.x,c.y,1,1);ctx.fillRect(c.x+2,c.y,1,1);ctx.fillRect(c.x,c.y+2,1,1);ctx.fillRect(c.x+2,c.y+2,1,1);ctx.fillStyle='#3f7a2c';ctx.fillRect(c.x+1,c.y+1,1,1);
      if(Math.sin(T*1.3)>0.97){ctx.fillStyle='#fffaf0';ctx.fillRect(c.x+3,c.y-1,1,1);}}
    for(const f of this.flowers){const C=FCOL[f.c];
      if(wint){ctx.fillStyle='#8a7a5a';ctx.fillRect(f.x,f.y,1,2);ctx.fillStyle='#ffffff';ctx.fillRect(f.x,f.y-1,1,1);continue;}
      if(f.g<0.3)drawMap(ctx,SP.sprout,f.x-1,f.y,{l:'#a6d872',g:'#3f7a2c'});
      else if(f.g<0.65)drawMap(ctx,SP.bud,f.x-1,f.y-1,{q:C[0],c:'#3f7a2c'});
      else{const sw=Math.round(Math.sin(T*2+f.x*0.15)*0.6);ctx.fillStyle='#3f7a2c';ctx.fillRect(f.x+2,f.y+2,1,1);ctx.fillRect(f.x-3,f.y+1,1,1);ctx.fillStyle='rgba(25,50,15,0.25)';drawMap(ctx,SP.bloom[f.s],f.x-1+sw,f.y-1,null,false);drawMap(ctx,SP.bloom[f.s],f.x-2+sw,f.y-2,{p:C[0],q:C[1],c:C[2]});}}
    if(!wint){for(const f of this.frogs){const hop=Math.round(Math.sin(f.hop*Math.PI)*2);drawMap(ctx,SP.frog,Math.round(f.x)-1,Math.round(f.y)-1-hop,{e:'#2b2420',g:'#4f9a34'});}
      for(const d of this.ducks){const fl=Math.cos(d.a)<0;ctx.fillStyle='#F4C542';for(const k of d.kids)ctx.fillRect(Math.round(k.x),Math.round(k.y),2,1);drawMap(ctx,SP.duck,Math.round(d.x),Math.round(d.y),{w:'#fffaf0',g:'#2f6b3a',y:'#F28C38'},fl);}}
    const sh=this.sheep.slice().sort((a,b)=>a.y-b.y);
    for(const s of sh){const x=Math.round(s.x),y=Math.round(s.y),hop=Math.round(Math.sin(s.hop*Math.PI)*3);
      ctx.fillStyle=SH;ctx.fillRect(x+1,y+4,7,2);
      let map;if(s.st==='sleep')map=SP.sheepS;else if(s.st==='eat'||s.st==='graze')map=Math.sin(s.ph*(s.st==='eat'?10:1.5))>0.3?SP.sheep2:SP.sheep1;else map=Math.floor(s.ph*6)%2?SP.sheep2:SP.sheep1;
      drawMap(ctx,map,x,y-hop,SHEEPC,s.f<0);}
    if(this.dog){const d=this.dog,x=Math.round(d.x),y=Math.round(d.y),hop=Math.round(Math.sin(d.hop*Math.PI)*2);ctx.fillStyle=SH;ctx.fillRect(x+1,y+3,6,1);
      const map=d.st==='sleep'||(d.st==='sit'&&!d.moving)?SP.dogS:Math.floor(d.ph*10)%2?SP.dog2:SP.dog1;drawMap(ctx,map,x,y-hop,DOGC,d.f<0);
      if(d.st==='sleep'&&Math.random()<0.005)this.bubble(x+5,y-1,'z',true);}
    for(const w of this.walkers){const cols={h:w.p.hair,s:w.p.skin,t:w.p.shirt,p:'#3f4f7a'};const moving=w.st!=='stay';const map=moving&&Math.floor(w.ph*6)%2?SP.walk2:SP.walk1;const x=Math.round(w.x)-1,y=Math.round(w.y)-2;ctx.fillStyle=SH;ctx.fillRect(x+1,y+3,3,1);drawMap(ctx,map,x,y,cols,false);}
    if(this.fox){const f=this.fox;drawMap(ctx,f.pause>0?SP.fox1:Math.floor(f.ph*8)%2?SP.fox2:SP.fox1,Math.round(f.x),Math.round(f.y),FOXC,f.vx<0);}
    if(this.plane){ctx.fillStyle=wint?'rgba(60,80,110,0.25)':'rgba(20,45,15,0.32)';drawMap(ctx,SP.plane,Math.round(this.plane.x-12),Math.round(this.plane.y-7),null,this.plane.vx<0,2);}
    for(const t of this.trees){const sx=t.shake>0?Math.round(Math.sin(T*70)):0;ctx.drawImage(treeCanvas(t.r,t.seed,S),t.x-t.r-2+sx,t.y-t.r-2);}
    for(const b of this.birds){const x=Math.round(b.x),y=Math.round(b.y);ctx.fillStyle='rgba(25,50,15,0.18)';ctx.fillRect(x+3,y+5,3,1);ctx.fillStyle='#2b2420';drawMap(ctx,Math.sin(b.ph*16)>0?SP.bird1:SP.bird2,x,y,null,false);}
    for(const b of this.bflies){const open=b.land>0?Math.sin(b.ph*3)>0:Math.sin(b.ph*28)>0;drawMap(ctx,open?SP.bfo:SP.bfc,Math.round(b.x)-1,Math.round(b.y)-1,{c:b.c,b:'#2b2420'});}
    for(const p of this.parts){ctx.globalAlpha=Math.max(0,Math.min(1,p.life/p.max*(p.leaf?3:1)));ctx.fillStyle=p.c;const x=Math.round(p.x),y=Math.round(p.y);
      if(p.ring){const r=Math.round((1-p.life/p.max)*2)+1;ctx.fillRect(x-r,y,1,1);ctx.fillRect(x+r,y,1,1);ctx.fillRect(x,y-r,1,1);ctx.fillRect(x,y+r,1,1);}else ctx.fillRect(x,y,1,1);}
    ctx.globalAlpha=1;
    if(wint){ctx.fillStyle='#ffffff';for(const d of this.drops)ctx.fillRect(Math.round(d.x),Math.round(d.y),1,1);}
    else{ctx.fillStyle='rgba(214,232,247,0.75)';for(const d of this.drops){const x=Math.round(d.x),y=Math.round(d.y);ctx.fillRect(x,y,1,1);ctx.fillRect(x+1,y-1,1,1);}}
    if(this.rainbow>0){const a=Math.min(1,this.rainbow/2,(10-this.rainbow)*1.5)*0.28;const RB=['#e0533d','#F28C38','#F4C542','#6CA24A','#3f66b8','#8b5fc9'];ctx.lineWidth=2;
      RB.forEach((c,i)=>{ctx.strokeStyle=c;ctx.globalAlpha=a;ctx.beginPath();ctx.arc(W*0.55,H*1.15,H*0.95-i*2,Math.PI*1.05,Math.PI*1.95);ctx.stroke();});ctx.globalAlpha=1;}
    if(this.rainT>0.01){ctx.fillStyle=`rgba(60,80,110,${(wint?0.12:0.2)*this.rainT})`;ctx.fillRect(0,0,W,H);}
    if(this.nightT>0.01){const n=this.nightT;ctx.fillStyle=`rgba(16,22,58,${0.55*n})`;ctx.fillRect(0,0,W,H);
      for(const b of this.blankets){const x=b.x+2,y=b.y+2,fl=0.85+Math.sin(T*9+b.x)*0.08;ctx.fillStyle=`rgba(244,197,66,${0.12*n*fl})`;ctx.beginPath();ctx.arc(x,y,12,0,6.29);ctx.fill();ctx.beginPath();ctx.arc(x,y,6,0,6.29);ctx.fill();ctx.fillStyle='#8a5a2b';ctx.fillRect(x-1,y,3,2);ctx.fillStyle='#fff3a0';ctx.fillRect(x,y-1,1,1);}
      for(const f of this.flies){const a=Math.max(0,Math.sin(f.ph*2.2+f.x))*n;if(a<0.05)continue;const x=Math.round(f.x),y=Math.round(f.y);ctx.fillStyle=`rgba(247,226,122,${0.3*a})`;ctx.fillRect(x-1,y-1,3,3);ctx.fillStyle=`rgba(255,246,170,${a})`;ctx.fillRect(x,y,1,1);}
      if(this.fox){const f=this.fox;ctx.fillStyle='#fff3a0';ctx.fillRect(Math.round(f.x)+(f.vx<0?1:7),Math.round(f.y),1,1);}}
    ctx.font='8px Silkscreen, monospace';ctx.textBaseline='top';
    for(const b of this.bubbles){ctx.globalAlpha=Math.min(1,b.life*3);const tw=Math.ceil(ctx.measureText(b.text).width);const x=Math.round(b.x-tw/2),y=Math.round(b.y-12);
      if(b.plain){ctx.fillStyle='#fffaf0';ctx.fillText(b.text,x,y);}else{ctx.fillStyle='#3b2f22';ctx.fillRect(x-3,y-2,tw+6,11);ctx.fillRect(Math.round(b.x)-1,y+9,2,2);ctx.fillStyle='#FFF7E6';ctx.fillRect(x-2,y-1,tw+4,9);ctx.fillStyle='#3b2f22';ctx.fillText(b.text,x,y-1);}}
    ctx.globalAlpha=1;
    const m=this.mouse;if(m.in&&this.iconCv){const ic=this.iconCv[this.state.tool];const x=Math.round(m.x),y=Math.round(m.y);
      if(this.state.tool==='water'){ctx.fillStyle='rgba(255,250,240,0.5)';for(let a=0;a<16;a++){ctx.fillRect(Math.round(x+Math.cos(a/16*6.28)*8),Math.round(y+Math.sin(a/16*6.28)*8),1,1);}}
      ctx.fillStyle='rgba(43,36,32,0.45)';ctx.fillRect(x-1,y,3,1);ctx.fillRect(x,y-1,1,3);
      ctx.drawImage(ic,x+2,y-12);}
  }

  renderVals(){
    const s=this.state,ic=s.icons||{},wint=s.season===3;
    return {
      canvasRef:this.canvasRef,wrapRef:this.wrapRef,stats:s.stats,
      goals:GOALS.map(g=>{const d=!!s.done[g.id];return{text:g.text,box:d?'#6CA24A':'#FFF7E6',color:d?'#9a8a70':'#3b2f22'};}),
      goalCount:Object.keys(s.done).length+' / '+GOALS.length,goalArrow:s.goalsOpen?'−':'+',goalsOpen:s.goalsOpen,toggleGoals:()=>this.setState({goalsOpen:!s.goalsOpen}),
      toastOn:!!s.toast,toast:s.toast,toastLabel:s.toastLabel,
      hint:s.night?'Night — the sheep are asleep. Watch for fireflies and a fox.':s.hint,
      tools:TOOLS.map(t=>{const a=t.id===s.tool;return{...t,icon:ic[t.id]||'data:image/gif;base64,R0lGODlhAQABAAAAACw=',bg:a?'#F4C542':'#FFF7E6',shadow:a?'none':'3px 3px 0 #3b2f22',tf:a?'translate(2px,2px)':'none',select:()=>this.setTool(t.id)};}),
      seasonLabel:SEASONS[s.season],seasonBg:SEASON_BG[s.season],rainLabel:wint?'Snow':'Rain',
      rainBg:s.rain?'#9cc7f0':'#FFF7E6',nightBg:s.night?'#2a3566':'#FFF7E6',nightFg:s.night?'#FFF7E6':'#3b2f22',
      soundBg:s.sound?'#FFF7E6':'#ddd2b8',soundLabel:s.sound?'Sound':'Muted',musicBg:s.music?'#c7ddae':'#ddd2b8',
      toggleRain:()=>this.toggleRain(),toggleNight:()=>this.toggleNight(),launchPlane:()=>this.launchPlane(),toggleSound:()=>this.toggleSound(),
      toggleMusic:()=>this.toggleMusic(),nextSeason:()=>this.nextSeason(),
      reset:()=>{this.audio();this.bflies=[];this.parts=[];this.birds=[];this.fox=null;this.starter();this.save();this.tone(392,0.15,'triangle',0.05,784);}
    };
  }
}
