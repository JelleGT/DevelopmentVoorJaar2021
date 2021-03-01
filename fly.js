let ship = document.getElementById('gunship');
const onMouseMove = (e) =>{
  ship.style.left = e.pageX + 'px';
  ship.style.top = e.pageY + 'px';
}
const shoot = (e) =>{
  var div = document.createElement('div');
  div.setAttribute("id","bullet");
  div.style.cssText = 'width:5px;height:10px;background-color:blue;left:' + e.pageX + 'px;top:' + e.pageY + 'px;';
  document.body.appendChild(div);
  setTimeout(function(){
    var gone = document.getElementById('bullet');
    gone.remove();
  }, 1500);
}
document.addEventListener('mousemove', onMouseMove);
document.addEventListener("mousedown", shoot)
