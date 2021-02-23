//Er worden 8 cirkels aangemaakt die proportioneel steeds iets groter worden
for(x = 2; x < 9; x++) {
    var div = document.createElement('div');
    div.className = 'circle one';
    div.style.cssText = 'width:' + x*x*0.12*75 + 'px;height:' + x*x*0.12*75 + 'px;z-index:-' + x + ';animation-delay:' + x*0.25 + 's;';
    document.body.appendChild(div);
  }
for (y = 5; y < 15; y++) {
  var sqr = document.createElement('div');
  sqr.className = "circle three";
  sqr.style.cssText = 'width:' + y*y*0.18*50 + 'px;height:' + y*y*0.18*50 + 'px;';
  document.body.appendChild(sqr);
}
