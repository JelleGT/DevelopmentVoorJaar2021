//Er worden 8 cirkels aangemaakt die proportioneel steeds iets groter worden
for(x = 2; x < 9; x++) {
    var div = document.createElement('div');
    div.className = 'circle one';
    div.style.cssText = 'width:' + x*x*0.12*75 + 'px;height:' + x*x*0.12*75 + 'px;z-index:-' + x + ';animation-delay:' + x*0.25 + 's;';
    document.body.appendChild(div);
  }
for (y = 3; y < 12; y++) {
  var sqr = document.createElement('div');
  sqr.className = "circle three";
  sqr.style.cssText = 'width:' + y*y*0.18*50 + 'px;height:' + y*y*0.18*50 + 'px;' + 'px;z-index:1;';
  document.body.appendChild(sqr);
}
for (z = 3; z < 12; z++) {
  var cir = document.createElement('div');
  cir.className = "circle four";
  cir.style.cssText = 'width:' + z*z*0.2*50 + 'px;height:' + z*z*0.2*50 + 'px;' + 'px;z-index:2;';
  document.body.appendChild(cir);
}
