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
            $(".story-block p").addClass("animate__animated");
            setTimeout(function() { 
                document.getElementById("story-block").classList.add("active");
            }, 1800);
          });
    }
    var storyRunning = function (){         
        $( "#to-po" ).click(function() {
            $("#story").removeClass("active");
            $("#po-talk").addClass("active");
            $(".info01").addClass("animate__animated");
        });
        $('.next').click(function() {
            $(".info02").toggleClass("active animate__animated");
            $(".info01").toggleClass("active");
            $('.next').addClass("hide");
            $(".again").removeClass("hide");
            $("#to-test").removeClass("hide");
        });
        $('.again').click(function() {
            $(".info02").removeClass("active animate__animated");
            $(".info01").addClass("active animate__animated");
            $('.next').removeClass("hide");
            $(".again").addClass("hide");
            $("#to-test").addClass("hide");
        });
    }
    var testRunning = function (){
        $( "#to-test" ).click(function() {
            $("#po-talk").removeClass("active");
            $("#go-test").addClass("active");
            setTimeout(function() { 
                document.getElementById("test-block").classList.add("active");
            }, 1200);
          });
    }
    
    startRunning()
    storyRunning()
    testRunning()
});