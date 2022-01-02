$(document).ready(function(){
    
  $("#gototop").click(function() {
    $('html,body').animate({ scrollTop: 0 }, 'ease-in-out');
    return false;
  });
  window.onscroll = function() {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > 100) {
         $("#gototop").fadeIn();
    } else {
        $("#gototop").fadeOut();
  };
};


// nav 
  let menu_click=false;
  $(".navbar-toggler").click(function(){
    menu_click=!menu_click;
    if(menu_click){
        $(".navbar-icon-bar").attr("menu-click","true");
    }
    else{
        $(".navbar-icon-bar").attr("menu-click","false");
  }
});


});
