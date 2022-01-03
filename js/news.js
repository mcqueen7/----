$(document).ready(function(){
    
  firebase.initializeApp({
    apiKey: "AIzaSyAwzWn4kP3v1JIoT9g94-HhbIS0xBYyz9U",
    authDomain: "htmlfinal-c6b79.firebaseapp.com",
    projectId: "htmlfinal-c6b79",
    storageBucket: "htmlfinal-c6b79.appspot.com",
    messagingSenderId: "1090006288916",
    appId: "1:1090006288916:web:41200ab4edbbe818377501"
  });
  const auth = firebase.auth();
  let check=0;
// Listening Login User
firebase.auth().onAuthStateChanged(function (user) {
  if(user){
    check=1;
  }
  else{
    check=0;
  }
});

  const $tosignin = $('#tosignin');
const $tosignup = $('#tosignup');
const $toprofile = $('#toprofile');
const $tosignout = $('#tosignout');
var user = firebase.auth().currentUser;
$tosignin.click(function(){
 
  if (check) {
    window.location.href = "./join.html";
  } else {
    window.location.href = "./signin.html";
  }
});
$tosignup.click(function(){
  if (check) {
    window.location.href = "./join.html";
  } else {
    window.location.href = "./signup.html";
  }
});

$toprofile.click(function(){
  if (check) {
    window.location.href = "./join.html";
  } else {
    window.location.href = "./signin.html";
  }
});
$tosignout.click(function(){
    auth.signOut();
    window.location.href = "./index.html";
  
});

$(".serch_btn").click(function(){
  
    // console.log("放手");
   var value = $(this).val().toLowerCase();
   console.log(value);
  if(!value){
    $('.list-search-style').html('');
    // console.log("論");
  }
  else{
    _searchStart(value);
  }
function _searchStart(v){
  // console.log("搜");
  $('.list-search-style').html(
    '.container a:not([data-title*="' + v + '"]) {display: none;}'
  );
}

});
const $search = $('#search');
$search.on('change paste keyup',function(){
    // console.log("放手");
   var value = $(this).val().toLowerCase();
   console.log(value);
  if(!value){
    $('.list-search-style').html('');
    // console.log("論");
  }
  else{
    _searchStart(value);
  }
function _searchStart(v){
  // console.log("搜");
  $('.list-search-style').html(
    '.container a:not([data-title*="' + v + '"]) {display: none;}'
  );
}
});



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
