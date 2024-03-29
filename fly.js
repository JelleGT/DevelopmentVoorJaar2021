function startGame() {
  document.getElementById("overlay").class;
  document.getElementById('overlay').id ='gone';
  var theme = document.getElementById("prime");
  setTimeout(function() {
    theme.play();
  }, 500);
}


//Zoekt het schip
let ship = document.getElementById('gunship');


//Voor het bewegen van het schip
const onMouseMove = (e) =>{
  ship.style.left = e.pageX + 'px';
  ship.style.top = e.pageY + 'px';
}


//Voor het schieten van bullets
const shoot = (e) =>{
  var missile = document.createElement('img');
  missile.setAttribute("id","bullet");
  missile.setAttribute("src","FlyingAssets/Missile.png");
  missile.style.cssText = 'width:20px;height:45px;left:' + (e.pageX - 10) + 'px;top:' + (e.pageY - 20) + 'px;';
  document.body.appendChild(missile);
  pew.pause();
  pew.play();
  setTimeout(function(){
    var gone = document.getElementById('bullet');
    gone.remove();
  }, 1500);
}
document.addEventListener('mousemove', onMouseMove);
document.addEventListener("mousedown", shoot)


//Explodeert het schip
function explodeShip() {
  setTimeout(function(){
    setTimeout(function() {
      ship.style.display = "none";
    }, 1200);
    var boom = document.getElementById("boom");
    boom.play();
    ship.src = "FlyingAssets/Explosion.gif"
  }, 2000)
}


//Plaatst een nieuw schip
function spawnShip() {
  ship.src = "FlyingAssets/Gunship_Top.png"
  ship.style.display = "block";
}

//Speelt en stopt de muziek
function playMusic() {
  var theme = document.getElementById("prime");
  theme.play();
}
function stopMusic() {
  var theme = document.getElementById("prime");
  theme.pause();
}
