try {

  //De sectie van de pagina waar alle creatures in komen te staan
  var sc = document.querySelector("#creatureSelection");

  var a = sc.getElementsByTagName('a');
  var img = sc.getElementsByTagName('img');
  //Er worden a en img elementen aangemaakt met daarin de links naar de afbeeldingen en een stukje js
  for(var i=0; i < 30; i++){
     var link = sc.appendChild(document.createElement("a"));
     var img = link.appendChild(document.createElement("img"));
     link.href = "javascript:delay('creatureImages/image" + (i + 1) + ".jpg')";
     img.src = "creatureImages/image" + (i + 1) + ".jpg"
  }
}
catch {

}
