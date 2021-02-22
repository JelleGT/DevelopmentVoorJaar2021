//Er worden 8 cirkels aangemaakt die proportioneel steeds iets groter worden
for(x = 2; x < 10; x++) {
    var div = document.createElement('div');
    div.className = 'circle one';
    div.style.cssText = 'width:' + x*x*0.12*75 + 'px;height:' + x*x*0.12*75 + 'px;z-index:-' + x + ';animation-delay:' + x*0.25 + 's;';
    document.body.appendChild(div);
  }
