lemon = document.getElementById("lemon");
lemonsplash = document.getElementById("lemonsplash");
shuriken = document.getElementById("shuriken");

function check() {
  if (lemon.offsetTop>window.innerHeight*0.895) {
    var randX = Math.floor(Math.random() * window.innerWidth-window.innerHeight/10);
    lemon.style.left = randX + 'px';
  }
  if (lemon.offsetLeft>shuriken.offsetLeft-lemon.offsetWidth && lemon.offsetLeft<shuriken.offsetLeft+shuriken.offsetWidth && lemon.offsetTop>shuriken.offsetTop-lemon.offsetHeight && lemon.offsetTop<shuriken.offsetTop+shuriken.offsetHeight) {
    lemonsplash.style.display = "block";
    lemonsplash.style.left = lemon.offsetLeft + 'px';
    lemonsplash.style.top = lemon.offsetTop + 'px';
  }
  if (shuriken.offsetLeft<0 || shuriken.offsetLeft>window.innerWidth-shuriken.offsetWidth || shuriken.offsetTop<0 || shuriken.offsetTop>window.innerHeight-shuriken.offsetHeight) {
    $(shuriken).stop(true);
    shuriken.style.left = window.innerWidth/2-shuriken.offsetWidth/2+'px';
    shuriken.style.top = window.innerHeight/2-shuriken.offsetHeight/2+'px';
    shuriken.classList.remove("spinshuriken");
  }
}

setInterval(check, 10);

window.onclick = function() {
  $(shuriken).stop(true);
  var dy = event.pageY - (shuriken.offsetTop+shuriken.offsetHeight/2);
  var dx = event.pageX - (shuriken.offsetLeft+shuriken.offsetWidth/2);
  angle = Math.atan2(dy, dx);
  shuriken.classList.add("spinshuriken");
  $("#shuriken").animate({
    left: shuriken.offsetLeft+Math.cos(angle)*(window.innerHeight+window.innerWidth)-(shuriken.offsetHeight/2)+'px', top: shuriken.offsetTop+Math.sin(angle)*(window.innerHeight+window.innerWidth)-(shuriken.offsetWidth/2)+'px'
  }, {duration:4000, specialEasing:{left:"linear", top:"linear"}});
}
