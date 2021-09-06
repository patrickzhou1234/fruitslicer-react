const e = React.createElement;
root = document.getElementById('root');
leftpos = window.innerWidth/2;
toppos = window.innerHeight*0.5;
angle = 0;
animateshuriken = false;
lemonY = 0;
lemonX = Math.floor(Math.random() * window.innerWidth-window.innerHeight/10);
lemonrot = 0;
rendersplash = false;
score = 0;

function anim() {
  var dy = event.pageY - window.innerHeight/2;
  var dx = event.pageX - window.innerWidth/2;
  var clickang = Math.atan2(dy, dx);
  leftanim = Math.cos(clickang)*(window.innerHeight*window.innerWidth*0.000005);
  topanim = Math.sin(clickang)*(window.innerHeight*window.innerWidth*0.000005);
  animateshuriken = true;
}

function render() {
  if (leftpos>window.innerWidth-window.innerHeight/10 || toppos>window.innerHeight*0.9 || leftpos<0 || toppos<0) {
    animateshuriken = false;
    leftpos = window.innerWidth/2;
    toppos = window.innerHeight*0.5;
    angle = 0;
  }
  if (animateshuriken) {
    leftpos+=leftanim;
    toppos+=topanim;
    angle+=5;
  }
  if (lemonY > window.innerHeight*0.9) {
    lemonY=0;
    lemonX=Math.floor(Math.random() * (window.innerWidth-window.innerHeight/10));
  }
  lemonrot += 3;
  lemonY+=window.innerHeight/320;
  if (lemonY<toppos+window.innerHeight/10 && lemonY>toppos-window.innerHeight/10 && lemonX<leftpos+window.innerHeight/10 && lemonX>leftpos-window.innerHeight/10) {
    rendersplash = true;
    score+=1;
    var splashX = lemonX;
    var splashY = lemonY;
    lemonY=0;
    lemonX=Math.floor(Math.random() * (window.innerWidth-window.innerHeight/10));
    
  }
  if (rendersplash) {
    ReactDOM.render(
      e('div', null, e('img', {src:"shuriken.png", style:{width:10+'vh', height:10+'vh', position:'absolute', left: leftpos-window.innerHeight*0.05+'px', top: toppos-window.innerHeight*0.05+'px', transform:'rotate('+angle+'deg)'}}), e('img', {src:"lemon.png", style:{width:10+'vh', height:10+'vh', position:'absolute', left:lemonX+'px', top:lemonY+'px', transform:"rotate("+lemonrot+"deg)"}}), e('img', {src:"lemonsplash.png", style:{width:10+'vh', height:10+'vh', position:'absolute', left:splashX+'px', top:splashY+'px'}}), e('p', {style:{position:"absolute", color:"lightgreen", fontSize:4+'vw'}}, 'score: '+score)), root
    );
    return;
  }
  ReactDOM.render(
    e('div', null, e('img', {src:"shuriken.png", style:{width:10+'vh', height:10+'vh', position:'absolute', left: leftpos-window.innerHeight*0.05+'px', top: toppos-window.innerHeight*0.05+'px', transform:'rotate('+angle+'deg)'}}), e('img', {src:"lemon.png", style:{width:10+'vh', height:10+'vh', position:'absolute', left:lemonX+'px', top:lemonY+'px', transform:"rotate("+lemonrot+"deg)"}})), root
  );
}

renderinterval = setInterval(render, 10);
