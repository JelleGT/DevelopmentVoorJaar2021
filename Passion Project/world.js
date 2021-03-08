document.getElementById(currentWorld).style.display = "block";
document.getElementById(currentWorld + "Name").style.display = "block";
$("#worldSelection").hide();


function showMe() {
  let show = document.getElementById("show");
  $("#worldSelection").fadeToggle(1000);
  if (show.innerHTML === "Show Locations") {
    $("#show").fadeOut(function() {
      $(this).text("Hide Locations").fadeIn(500);
    });
  } else {
    $("#show").fadeOut(function() {
      $(this).text("Show Locations").fadeIn(500);
    });
  }
}
