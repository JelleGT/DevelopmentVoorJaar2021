//laat de selectiepaginas langzaam inkomen en bij het klikken van de links verdwijnt deze weer
$(document).ready(function(){
  $(".display").fadeIn(2000).css('display', 'block');
  $("#selection").fadeIn(2000).css('display', 'flex');
  $("a").click(function(){
    $("#selection").fadeOut(500);
  });
  $("button").click(function(){
    $(".display").fadeOut(500);
  });
  $(".item").click(function(){
    $(".display").fadeOut(500);
  });
  $("a").click(function(){
    $(".display").fadeOut(500);
  });
});


//Geeft een delay voordat de selectiespaginas verdwijnen
function delay (URL) {
    setTimeout( function() { window.location = URL }, 1200 );
}

//Maakt een variabele aan die onthouden wordt in deze sessie, en wordt in character.js gebruikt om het geklikte karakter te laden.
var character = "placeholder character"
var currentCharacter = sessionStorage.getItem(character);
function setCharacter(clicked_id){
  sessionStorage.setItem(character, clicked_id);
}
//Maakt een variabele aan die onthouden wordt in deze sessie, en wordt in world.js gebruikt om de geklikte wereld te laden.
var world = "placeholder world"
var currentWorld = sessionStorage.getItem(world);
function setWorld(clicked_id){
  sessionStorage.setItem(world, clicked_id);
}
