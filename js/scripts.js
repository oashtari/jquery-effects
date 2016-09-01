$(function() {
  $("h2").click(function() {
    $(".lion").slideUp();
    $("body").addClass("bodyClass");
  });
  $(".wombat").click(function() {
    $(".wombat").fadeOut();
    $("body").removeClass();
  });
  $("#second").click(function() {
    $("h4").fadeIn();
  });
  $("#right").click(function() {
    $(".lion").fadeIn();
    $(".wombat").fadeIn();
    $("body").removeClass();
  });
});
