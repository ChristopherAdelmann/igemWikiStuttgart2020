// var isHidden = false;
// // $(window).on("scroll", function(){
//   if($(document).scrollTop() > 150){
//     $(".navbar-wrapper").hide();
//     isHidden = true
//     // $(window).off("scroll");
//     console.log("Passed Point!");
//   // } else if ($(document).scrollTop() < 150) {
//   //   if (isHidden === true) {
//   //     $(".navbar-wrapper").fadeIn();
//   //   }
//   // }
//   // console.log($(document).scrollTop())
// }

// $(window).on("scroll", function(){
//   if ($(document).scrollTop() < 150) {
//     if (isHidden === true) {
//       $(".navbar-wrapper").fadeIn();
//     }
//   }
//   console.log($(document).scrollTop())
// })

    $(function() {
      var navbar = $("#navbar-wrapper");
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= navbar.height()) {
          $("nav").removeClass("navbar-expand-lg");
          navbar.addClass("minimized");
          $(".navbar-brand").addClass("hidden");
          $("nav").addClass("nav-collapse");
          navbar.stop().animate({
            width: 200,
            opacity: 0.3
          });
        } else {
          $("nav").addClass("navbar-expand-lg");
          navbar.removeClass("minimized");
          $(".navbar-brand").removeClass("hidden");
          navbar.stop().animate({
            width: "100%",
            opacity: 1
          });
        }
      });
    });
