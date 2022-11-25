$(window).on('load', function () {
    setTimeout(function() { 
        document.getElementById("loading").style.display = "none"
        // document.getElementById("start").style.display = "block"
        document.getElementById("start").classList.add("active");
      }, 1800);
});
$(document).ready(function() {
    var startRunning = function (){
        $(".page-label, .po, .role-user").addClass("animate__animated");
        $( "#start-btn" ).click(function() {
            $("#start").removeClass("active");
            $("#story").addClass("active");
          });
    }
    
    startRunning()
});