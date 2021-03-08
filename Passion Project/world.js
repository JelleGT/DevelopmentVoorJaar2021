document.getElementById(currentWorld).style.display = "block";
document.getElementById(currentWorld + "Name").style.display = "block";
var hide = document.getElementById("worldSelection");
var title = document.getElementById("show");
hide.style.display = "none";

function showMe() {
  if (hide.style.display === "none") {
    hide.style.display = "block";
    title.innerHTML = "Hide Locations";
  } else {
    hide.style.display = "none";
    title.innerHTML = "Show Locations";
  }
}
