$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 400) {
          $(".navbar").css("background" , "white" );
        }
  
        else{
            $(".navbar").css("background" , "");  	
        }
    })
  })

  $(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 400) {
          $(".navbar ").css("width" , "90%" );
        }
  
        else{
            $(".navbar ").css("width" , "100%" );  	
        }
    })
  })
  $(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 400) {
          $(".navbar ").css("margin" , "auto" );
        }
  
        else{
            $(".navbar ").css("margin-top" , "0px" );  	
        }
    })
  })

  $(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 400) {
          $(".navbar ").css("border-radius" , "0px 0px 50px 50px" );
        }
  
        else{
            $(".navbar ").css("border-radius" , "" );  	
        }
    })
  })
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);