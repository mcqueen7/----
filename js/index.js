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

    $("#gototop").click(function() {
      $('html,body').animate({ scrollTop: 0 }, 'ease-in-out');
      return false;
    });

  $(function() {
      $(".flexslider").flexslider({
      slideshowSpeed: 3700, //展示时间间隔ms
      animationSpeed: 500, //滚动时间ms
      touch: true //是否支持触屏滑动
    });
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

var t1 = new gsap.timeline({
  scrollTrigger: {
      trigger: ".intro_part",
      pin: false, // pin the trigger element while active
      start: "center center", // when the top of the trigger hits the top of the viewport
      end: "+=400", // end after scrolling 500px beyond the start
      // yoyo:true,
      // scrub: true,
      // markers: true,
      id: "intro_part",
    },
});
t1.fromTo(".intro_part",{x: -1000,opacity:0},{x:0,opacity:1}).yoyo(true);

var t2 = new gsap.timeline({
  scrollTrigger: {
      trigger: ".news_part",
      pin: false, // pin the trigger element while active
      start: "top center", // when the top of the trigger hits the top of the viewport
      end: "+=400", // end after scrolling 500px beyond the start
      // yoyo:true,
      // scrub: true,
      // markers: true,
      id: "nrws_part",
    },
});
t2.fromTo(".news_part",{x: 1000,opacity:0},{x:0,opacity:1}).yoyo(true);







  
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

