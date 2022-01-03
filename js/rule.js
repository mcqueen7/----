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
  
  
  var t1 = new gsap.timeline({
    scrollTrigger: {
        trigger: ".article1",
        pin: false, // pin the trigger element while active
        start: "top center", // when the top of the trigger hits the top of the viewport
        end: "+=600", // end after scrolling 500px beyond the start
        // yoyo:true,
        scrub: true,
        // markers: true,
        id: "article1",
      },
  });
  t1.fromTo(".article1",{y: -200,opacity:0},{y:0,opacity:1,duration: 1})
    .to(".article1",{duration: 3}).repeat(1).yoyo(true);

  var t2 = new gsap.timeline({
    scrollTrigger: {
        trigger: ".article2",
        pin: false, // pin the trigger element while active
        start: "top center", // when the top of the trigger hits the top of the viewport
        end: "+=500", // end after scrolling 500px beyond the start
        // yoyo:true,
        scrub: true,
        // markers: true,
        id: "article2",
      },
  });
  t2.fromTo(".article2",{y: -200,opacity:0},{y:0,opacity:1,duration: 1})
    .to(".article2",{duration: 3}).repeat(1).yoyo(true);


    var t3 = new gsap.timeline({
      scrollTrigger: {
          trigger: ".article3",
          pin: false, // pin the trigger element while active
          start: "top center", // when the top of the trigger hits the top of the viewport
          end: "+=450", // end after scrolling 500px beyond the start
          // yoyo:true,
          scrub: true,
          // markers: true,
          id: "article3",
        },
    });
    t3.fromTo(".article3",{y: -200,opacity:0},{y:0,opacity:1,duration: 1})
      .to(".article3",{duration: 3}).repeat(1).yoyo(true);


      var t4 = new gsap.timeline({
        scrollTrigger: {
            trigger: ".article4",
            pin: false, // pin the trigger element while active
            start: "top center", // when the top of the trigger hits the top of the viewport
            end: "+=600", // end after scrolling 500px beyond the start
            // yoyo:true,
            scrub: true,
            // markers: true,
            id: "article4",
          },
      });
      t4.fromTo(".article4",{y: -200,opacity:0},{y:0,opacity:1,duration: 1})
        .to(".article4",{duration: 3}).repeat(1).yoyo(true);

        var t5 = new gsap.timeline({
          scrollTrigger: {
              trigger: ".article5",
              pin: false, // pin the trigger element while active
              start: "top center", // when the top of the trigger hits the top of the viewport
              end: "+=970", // end after scrolling 500px beyond the start
              // yoyo:true,
              scrub: true,
              // markers: true,
              id: "article5",
            },
        });
        t5.fromTo(".article5",{y: -200,opacity:0},{y:0,opacity:1,duration: 1})
          .to(".article5",{duration: 3}).repeat(1).yoyo(true);
          




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
