let ship = document.getElementById('gunship');
const onMouseMove = (e) =>{
  ship.style.left = e.pageX + 'px';
  ship.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);
